const STORAGE_KEY = 'posterfy_pending_flow'
const OAUTH_RESUME_KEY = 'posterfy_oauth_resume'
const VERSION = 1
const TTL_MS = 24 * 60 * 60 * 1000

const validActions = new Set(['publish', 'print_ready_export'])
const validReasons = new Set(['login', 'checkout'])

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)

const createFlowId = () => {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

const isSafeReturnPath = (value) => {
  if (value === '/') return true
  return typeof value === 'string' && /^\/p\/[a-f\d]{24}$/i.test(value)
}

const isValidFlow = (flow) => {
  if (!isObject(flow) || flow.version !== VERSION) return false
  if (typeof flow.flowId !== 'string' || !flow.flowId) return false
  if (!Number.isFinite(flow.createdAt) || Date.now() - flow.createdAt > TTL_MS) return false
  if (!validReasons.has(flow.reason) || !isSafeReturnPath(flow.returnTo)) return false
  if (!isObject(flow.editor) || typeof flow.editor.albumId !== 'string' || !flow.editor.albumId) return false
  if (!isObject(flow.editor.posterJson) || !isObject(flow.action) || !validActions.has(flow.action.type)) return false

  if (flow.action.type === 'publish') {
    return flow.action.visibility === 'public' || flow.action.visibility === 'private'
  }

  return ['png', 'pdf'].includes(flow.action.format) && [1, 1.5].includes(flow.action.scale)
}

export const readPendingFlow = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const flow = JSON.parse(raw)
    if (!isValidFlow(flow)) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return flow
  } catch {
    return null
  }
}

export const savePendingFlow = ({ reason, returnTo, editor, action, checkout }) => {
  const flow = {
    version: VERSION,
    flowId: createFlowId(),
    createdAt: Date.now(),
    reason,
    returnTo,
    editor,
    action,
    ...(checkout ? { checkout } : {})
  }

  if (!isValidFlow(flow)) throw new Error('Unable to preserve this poster')

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flow))
  } catch {
    throw new Error('Unable to preserve this poster in this browser')
  }

  const stored = readPendingFlow()
  if (!stored || stored.flowId !== flow.flowId) {
    throw new Error('Unable to verify the saved poster')
  }
  return stored
}

export const updatePendingFlow = (flowId, changes) => {
  const current = readPendingFlow()
  if (!current || current.flowId !== flowId) return null

  const next = {
    ...current,
    ...changes,
    editor: changes.editor ? { ...current.editor, ...changes.editor } : current.editor,
    action: changes.action ? { ...current.action, ...changes.action } : current.action,
    checkout: changes.checkout ? { ...(current.checkout || {}), ...changes.checkout } : current.checkout
  }

  if (!isValidFlow(next)) return null
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    return readPendingFlow()
  } catch {
    return null
  }
}

export const clearPendingFlow = (flowId) => {
  const current = readPendingFlow()
  if (!current || (flowId && current.flowId !== flowId)) return false
  localStorage.removeItem(STORAGE_KEY)
  return true
}

export const rememberPendingOAuthFlow = (flowId) => {
  const flow = readPendingFlow()
  if (!flow || flow.flowId !== flowId) return false
  try {
    sessionStorage.setItem(OAUTH_RESUME_KEY, flowId)
    return true
  } catch {
    return false
  }
}

export const readPendingOAuthFlow = () => {
  try {
    const flowId = sessionStorage.getItem(OAUTH_RESUME_KEY)
    const flow = readPendingFlow()
    if (!flowId || !flow || flow.flowId !== flowId) {
      sessionStorage.removeItem(OAUTH_RESUME_KEY)
      return null
    }
    return flow
  } catch {
    return null
  }
}

export const clearPendingOAuthFlow = (flowId) => {
  try {
    const storedFlowId = sessionStorage.getItem(OAUTH_RESUME_KEY)
    if (flowId && storedFlowId !== flowId) return false
    sessionStorage.removeItem(OAUTH_RESUME_KEY)
    return true
  } catch {
    return false
  }
}

export const getPendingFlowReturnUrl = (flow) => {
  if (!flow || !isValidFlow(flow)) return null
  const url = new URL(flow.returnTo, window.location.origin)
  url.searchParams.set('resume', flow.flowId)
  return url.toString()
}

export const PENDING_FLOW_KEY = STORAGE_KEY
