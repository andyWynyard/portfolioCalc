"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    fName: {
        type: String,
        default: '',
        required: true
    },
    lName: {
        type: String,
        default: '',
        required: true
    },
    username: {
        // used as user slug
        type: String,
        default: '',
        required: true,
        lowercase: true,
        unique: true
    },
    nationality: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
    primaryAddress: {
        type: String,
        required: false
    },
    deliveryAddress: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
});
exports.default = mongoose_1.model('User', UserSchema);
