"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PortfolioSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    id: {
        type: String,
        default: '',
        required: true
    },
    historyDetails: [
        {
            endDate: {
                type: String,
                default: '',
                required: true
            },
            historyDetails: {
                type: String,
                default: '',
                required: true
            }
        }
    ]
});
exports.default = mongoose_1.model('Portfolio', PortfolioSchema);
//# sourceMappingURL=Portfolio.js.map