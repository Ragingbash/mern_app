const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const productschema = new mongose.Schema({
  name:{
    type: String,
    required: [true, 'Please enter product name'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 characters'],

  },
price:{
    type: Number,
    required: [true, 'Please enter product price'],
    maxLength: [5, 'Product name cannot exceed 5 characters'],
    default: 0.0
  },
description:{
    type: String,
    required: [true, 'Please enter product description'],
  },
ratings: {
 type: Number,
 default: 0
 }, 
images: {
    public_id :{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true    
    }
}, 
category :{
    type: String,
    required: [true, 'Please select the category of products'],
    enum: {
        values: [
            'Electronics',
            'Camera',
            'Laptop',
            'Headphones',
            'Books',
            'Clothes/Shoes',
            'Sports',
            'Outdoor',
            'Home'

        ],
        message: 'Please select correct category for product'
    }
},
seller:{
    type: String,
    required: [true, 'Please enter product seller'],
},
stock:{
    type: String,
    required: [true, 'Please enter product stock'],
    maxLength: [5, 'Product name cannot exceed 5 characters'],
    default: 0
},
numofreviews: {
    type: Number,
    default : 0
},
reviews: [
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment:{
            type: String,
            required: true
        }

    }
],
createdAt: {
    type: Date,
    default: Date.now
}
})

module.exports = mongoose.model('Product',productschema);
