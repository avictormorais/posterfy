import styled from 'styled-components'

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`

export const TabTitle = styled.h2`
  font-size: 1.4em;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.15em;
  }
`

export const SearchInput = styled.input`
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.85em;
  outline: none;
  width: 240px;
  max-width: 100%;

  &::placeholder { color: var(--textSecondary); }
  &:focus { border-color: var(--AccentColor); }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 0.82em;
  }
`

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`

export const FilterButton = styled.button`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => $active ? 'var(--AccentColor)' : 'var(--borderColor)'};
  background: ${({ $active }) => $active ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : 'var(--textColor)'};
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;

  &:hover { opacity: 0.8; }

  @media (max-width: 640px) {
    padding: 5px 10px;
    font-size: 0.72em;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85em;

  @media (max-width: 640px) {
    font-size: 0.78em;
  }
`

export const Th = styled.th`
  text-align: left;
  padding: 10px 12px;
  border-bottom: 2px solid var(--borderColor);
  font-weight: 700;
  white-space: nowrap;
  color: var(--textSecondary);
  font-size: 0.85em;
`

export const Td = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid var(--borderColor);
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`

export const Tr = styled.tr`
  ${({ $selected }) => $selected && `background: color-mix(in srgb, var(--AccentColor) 8%, transparent);`}
  &:hover { background: var(--glassBackground); }
`

export const ActionButton = styled.button`
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--borderColor);
  background: ${({ $danger }) => $danger ? 'rgba(220, 53, 69, 0.15)' : 'transparent'};
  color: ${({ $danger }) => $danger ? '#dc3545' : 'var(--textColor)'};
  font-size: 0.78em;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover { opacity: 0.7; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`

export const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 700;
  background: ${({ $variant }) => {
    if ($variant === 'active') return 'rgba(40, 167, 69, 0.15)'
    if ($variant === 'suspended') return 'rgba(220, 53, 69, 0.15)'
    if ($variant === 'admin') return 'rgba(223, 109, 64, 0.15)'
    if ($variant === 'public') return 'rgba(40, 167, 69, 0.15)'
    if ($variant === 'private') return 'rgba(255, 193, 7, 0.15)'
    if ($variant === 'deleted') return 'rgba(220, 53, 69, 0.15)'
    return 'var(--glassBackground)'
  }};
  color: ${({ $variant }) => {
    if ($variant === 'active') return '#28a745'
    if ($variant === 'suspended') return '#dc3545'
    if ($variant === 'admin') return '#df6d40'
    if ($variant === 'public') return '#28a745'
    if ($variant === 'private') return '#ffc107'
    if ($variant === 'deleted') return '#dc3545'
    return 'var(--textColor)'
  }};
`

export const Card = styled.div`
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 20px;
  background: var(--glassBackground);
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }
`

export const CardLabel = styled.p`
  font-size: 0.78em;
  color: var(--textSecondary);
  margin: 0 0 4px;
  font-weight: 600;
`

export const CardValue = styled.p`
  font-size: 1.6em;
  font-weight: 800;
  margin: 0;
`

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: transparent;
  color: var(--textColor);
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;

  &:hover { background: var(--glassBackground); }
`

export const EmptyState = styled.p`
  text-align: center;
  color: var(--textSecondary);
  padding: 40px 0;
  font-size: 0.9em;
`

export const ActionsRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
  border: 1px solid var(--borderColor);
`

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

export const ModalBox = styled.div`
  background: var(--backgroundColor);
  border: 1px solid var(--borderColor);
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90vw;
`

export const ModalTitle = styled.h3`
  margin: 0 0 16px;
  font-weight: 700;
  font-size: 1.1em;
`

export const ModalInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  box-sizing: border-box;

  &:focus { border-color: var(--AccentColor); }
`

export const ModalTextarea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  resize: vertical;
  min-height: 60px;
  box-sizing: border-box;
  font-family: inherit;

  &:focus { border-color: var(--AccentColor); }
`

export const ModalSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  margin-bottom: 12px;
  box-sizing: border-box;
  cursor: pointer;

  &:focus { border-color: var(--AccentColor); }
`

export const ModalActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 8px;
`

export const ModalButton = styled.button`
  padding: 8px 18px;
  border-radius: 8px;
  border: 1px solid ${({ $primary }) => $primary ? 'var(--AccentColor)' : 'var(--borderColor)'};
  background: ${({ $primary }) => $primary ? 'var(--AccentColor)' : 'transparent'};
  color: ${({ $primary }) => $primary ? '#fff' : 'var(--textColor)'};
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;

  &:hover { opacity: 0.8; }
`
export const BulkBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid var(--AccentColor);
  background: color-mix(in srgb, var(--AccentColor) 10%, transparent);
  font-size: 0.82em;
  flex-wrap: wrap;
`

export const BulkCount = styled.span`
  font-weight: 700;
  color: var(--AccentColor);
  flex: 1;
  min-width: 100px;
`

export const BulkSelect = styled.select`
  padding: 5px 8px;
  border-radius: 7px;
  border: 1px solid var(--borderColor);
  background: var(--glassBackground);
  color: var(--textColor);
  font-size: 0.9em;
  outline: none;
  cursor: pointer;
  &:focus { border-color: var(--AccentColor); }
`