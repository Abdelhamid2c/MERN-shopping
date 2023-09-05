const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [
        {
            name: { type: String, required: true },
            quantite: { type: Number, required: true },
            picture: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }
    ],
    Localisation: {
        Adresse: { type: String, required: true },
        city: { type: Number, required: true },
        codePostale: { type: String, required: true },
        country: { type: Number, required: true }
    },
    payment: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update: { type: String },
        email: { type: String }
    },
    category: {
        type: String,
        required: true
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    datePaiment: {
        type: Date
    },
    isDelivred: {
        type: Boolean,
        required: true,
        default: false
    },
    DelivredAt: {
        type: Date
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)