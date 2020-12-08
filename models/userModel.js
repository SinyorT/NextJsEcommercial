import moongose, { mongo } from 'mongoose'

const userSchema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://dummyimage.com/180x180/3868e0/ffffff.png'
    }
}, {
    timestamps: true
})


let Dataset = mongoose.model.user || mongoose.model('user', userSchema)

export default Dataset