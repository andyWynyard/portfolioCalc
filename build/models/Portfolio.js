"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PortfolioSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: '',
        required: true
    },
    transactions: [
        {
            securityId: {
                type: String,
                default: '',
                required: true
            },
            type: {
                type: String,
                default: '',
                required: true
            },
            date: {
                type: String,
                default: '',
                required: true
            },
            amount: {
                type: String,
                default: '',
                required: true
            }
        }
    ]
});
exports.default = mongoose_1.model('Portfolio', PortfolioSchema);
//# sourceMappingURL=Portfolio.js.map