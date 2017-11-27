"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Portfolio_1 = require("../models/Portfolio");
// get all portfolios
function getAllPortfolios(req, res, next) {
    Portfolio_1.default.find()
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
exports.getAllPortfolios = getAllPortfolios;
// get one portfolio
function getPortfolioById(req, res, next) {
    var id = req.params.id;
    Portfolio_1.default.findOne({ id: id })
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
exports.getPortfolioById = getPortfolioById;
// create a portfolio
function createPortfolio(req, res, next) {
    var id = req.body.id;
    var transactions = req.body.transactions;
    var portfolio = new Portfolio_1.default({
        id: id,
        transactions: transactions
    });
    portfolio
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
exports.createPortfolio = createPortfolio;
// update a portfolio
function updatePortfolio(req, res, next) {
    var id = req.params.id;
    Portfolio_1.default.findOneAndUpdate({ id: id }, req.body)
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
exports.updatePortfolio = updatePortfolio;
// delate a portfolio
function deletePortfolio(req, res, next) {
    var id = req.params.id;
    Portfolio_1.default.findByIdAndRemove({ id: id })
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
exports.deletePortfolio = deletePortfolio;
//# sourceMappingURL=PortfolioController.js.map