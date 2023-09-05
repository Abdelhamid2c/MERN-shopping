const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }

}, { timestamps: true })

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: {
        type: [reviewSchema]
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    stocks: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)