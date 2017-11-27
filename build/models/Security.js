"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SecuritySchema = new mongoose_1.Schema({
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
            value: {
                type: String,
                default: '',
                required: true
            }
        }
    ]
});
exports.default = mongoose_1.model('Security', SecuritySchema);
//# sourceMappingURL=Security.js.map