"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Security_1 = require("../models/Security");
// get all securities
function getAllSecurities(req, res, next) {
    Security_1.default.find()
        .then(function (data) {
        var status = res.statusCode;
        res.json({
            status: status,
            data: data
        });
    })
        .catch(function (err) {
        var status = res.statusCode;
        res.json({
            status: status,
            err: err
        });
    });
}
exports.getAllSecurities = getAllSecurities;
// get one security
function getSecurityById(req, res, next) {
    var id = req.params.id;
    Security_1.default.findOne({ id: id })
        .then(function (data) {
        var status = res.statusCode;
        res.json({
            status: status,
            data: data
        });
    })
        .catch(function (err) {
        var status = res.statusCode;
        res.json({
            status: status,
            err: err
        });
    });
}
exports.getSecurityById = getSecurityById;
// create a new security
function createSecurity(req, res, next) {
    var id = req.body.id;
    var historyDetails = req.body.historyDetails;
    var security = new Security_1.default({
        id: id,
        historyDetails: historyDetails
    });
    security
        .save()
        .then(function (data) {
        var status = res.statusCode;
        res.json({
            status: status,
            data: data
        });
    })
        .catch(function (err) {
        var status = res.statusCode;
        res.json({
            status: status,
            err: err
        });
    });
}
exports.createSecurity = createSecurity;
// update a security
function updateSecurity(req, res, next) {
    var id = req.params.id;
    Security_1.default.findOneAndUpdate({ id: id }, req.body)
        .then(function (data) {
        var status = res.statusCode;
        res.json({
            status: status,
            data: data
        });
    })
        .catch(function (err) {
        var status = res.statusCode;
        res.json({
            status: status,
            err: err
        });
    });
}
exports.updateSecurity = updateSecurity;
// delete a security
function deleteSecurity(req, res, next) {
    var id = req.params.id;
    Security_1.default.findByIdAndRemove({ id: id })
        .then(function (data) {
        var status = res.statusCode;
        res.json({
            status: status,
            data: data
        });
    })
        .catch(function (err) {
        var status = res.statusCode;
        res.json({
            status: status,
            err: err
        });
    });
}
exports.deleteSecurity = deleteSecurity;
//# sourceMappingURL=SecuritiesController.js.map