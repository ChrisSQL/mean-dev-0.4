'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Coupon Schema
 */
var CouponSchema = new Schema({

    title: {
        type: String,
        required: 'Title cannot be blank',
        trim: true,
        maxlength: 150
    },
    link: {
        type: String,
        required: 'We need a Link to the Deal.',
        trim: true
    },
    code: {
        type: String,
        required: 'We need a Code for the Discount.',
        default: 'None',
        trim: true,
        maxlength: 23
    },
    instructions: {
        type: String,
        default: 'NA',
        trim: true
    },
    userIdStringCoupon: {
        type: String,
        trim: true
    },
    retailer: {
        type: String,
        required: 'We need a Retailer for the Deal.',
        trim: true
    },
    discountpercent: {
        type: Number,
        required: 'We need a Discount for the Deal.',
        default: 0,
        trim: true,
        min:0,
        max: 100
    },
    discount: {
        type: Number,
        required: 'We need a Discount for the Deal.',
        default: 0,
        min:0,
        trim: true
    },
    minimumspend: {
        type: Number,
        required: 'We need a Minimum Spend for the Deal.',
        default: 0,
        trim: true,
        maxlength: 35
    },
    currency: {
        type: String,
        default: 'Euro (€)',
        required: 'We need a Currency for the Deal.',
        trim: true
    },
    category: {
        type: String,
        default: 'All',
        required: 'We need a category for the Deal.',
        trim: true
    },
    validfrom: {
        type: String,
        default: 'NA',
        trim: true
    },
    validto: {
        type: String,
        default: 'NA',
        trim: true
    },
    votes: {
        type: Number,
        default: 100
    },
    upVoters: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    downVoters: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});

mongoose.model('Coupon', CouponSchema);
