import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    
    images: {
        type: Array,
        required: true, 
    },
    category: {
        type: String,
        required: true, 
    },
    chacked: {
        type: Boolean,
        default: false, 
    },
    inStock: {
        type: Number,
        default: 0, 
    },
    sold: {
        type: Number,
        default: 0, 
    },
}, {
    timestamps: true
})


let Dataset = mongoose.models.product || mongoose.model('product', productSchema)

export default Dataset