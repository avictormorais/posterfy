import mongoose from 'mongoose'
import { albumMetadataFields } from '../utils/albumMetadata.js'

const policyAcceptanceFields = {
  termsVersion: { type: String, default: null },
  refundPolicyVersion: { type: String, default: null },
  privacyPolicyVersion: { type: String, default: null },
  acceptedAt: { type: Date, default: null }
}

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
    index: true
  },
  album: {
    type: new mongoose.Schema(albumMetadataFields, { _id: false }),
    required: true
  },
  stripePriceId: { type: String, required: true },
  stripeCheckoutSessionId: { type: String, default: null },
  stripeCheckoutUrl: { type: String, default: null, select: false },
  stripePaymentIntentId: { type: String, default: null },
  stripeChargeId: { type: String, default: null },
  amountSubtotal: { type: Number, default: 0, min: 0 },
  amountTotal: { type: Number, default: 0, min: 0 },
  amountRefunded: { type: Number, default: 0, min: 0 },
  currency: { type: String, default: 'usd', lowercase: true },
  policyAcceptance: {
    type: new mongoose.Schema(policyAcceptanceFields, { _id: false }),
    default: null
  },
  livemode: { type: Boolean, default: false, index: true },
  checkoutStatus: {
    type: String,
    enum: ['creating', 'open', 'complete', 'expired', 'failed'],
    default: 'creating',
    index: true
  },
  paymentStatus: {
    type: String,
    enum: ['unpaid', 'paid', 'failed', 'partially_refunded', 'refunded'],
    default: 'unpaid',
    index: true
  },
  refundStatus: {
    type: String,
    enum: ['none', 'pending', 'partial', 'full', 'failed'],
    default: 'none'
  },
  disputeStatus: { type: String, default: 'none' },
  disputeReason: { type: String, default: '' },
  checkoutOpen: { type: Boolean, default: true },
  checkoutExpiresAt: { type: Date, default: null },
  fulfilledAt: { type: Date, default: null },
  lastStripeEventId: { type: String, default: '' },
  accountDeletedAt: { type: Date, default: null }
}, { timestamps: true })

PaymentSchema.index({ stripeCheckoutSessionId: 1 }, { unique: true, partialFilterExpression: { stripeCheckoutSessionId: { $type: 'string' } } })
PaymentSchema.index({ stripePaymentIntentId: 1 }, { unique: true, partialFilterExpression: { stripePaymentIntentId: { $type: 'string' } } })
PaymentSchema.index({ stripeChargeId: 1 }, { unique: true, partialFilterExpression: { stripeChargeId: { $type: 'string' } } })
PaymentSchema.index({ userId: 1, createdAt: -1 })
PaymentSchema.index({ 'album.providerAlbumId': 1, createdAt: -1 })
PaymentSchema.index(
  { userId: 1, 'album.provider': 1, 'album.providerAlbumId': 1 },
  { unique: true, partialFilterExpression: { checkoutOpen: true, userId: { $type: 'objectId' } } }
)

export default mongoose.model('Payment', PaymentSchema)
