"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PortfolioController_1 = require("../controllers/PortfolioController");
// import {
//   getAllSecurities,
//   getSecurityById,
//   createSecurity,
//   updateSecurity,
//   deleteSecurity
// } from '../controllers/SecuritiesController';
exports.default = function (app) {
    // api routes
    var apiRoutes = express.Router();
    var portfolioRoutes = express.Router();
    var securitiesRoutes = express.Router();
    /********************************
    === portfolio endpoints
    ********************************/
    // append portfolio routes to api routes
    apiRoutes.use('/portfolio', portfolioRoutes);
    // get all Portfolios
    portfolioRoutes.get('/', PortfolioController_1.getAllPortfolios);
    // get user by id
    portfolioRoutes.get('/:id', PortfolioController_1.getPortfolioById);
    // create user
    portfolioRoutes.post('/', PortfolioController_1.createPortfolio);
    // update user by id
    portfolioRoutes.put('/:id', PortfolioController_1.updatePortfolio);
    // delete user by id
    portfolioRoutes.delete('/:id', PortfolioController_1.deletePortfolio);
    /********************************
    === securities endpoints
    ********************************/
    // append user routes to api routes
    // apiRoutes.use('/securities', securitiesRoutes);
    //
    // // get all posts
    // securitiesRoutes.get('/', getAllSecurities);
    //
    // // get user by id
    // securitiesRoutes.get('/:id', getSecurityById);
    //
    // // create user
    // securitiesRoutes.post('/', createSecurity);
    //
    // // update user by id
    // securitiesRoutes.put('/:id', updateSecurity);
    //
    // // delete user by id
    // securitiesRoutes.delete('/:id', deleteSecurity);
    /********************************
    === append apiRoutes to app
    ********************************/
    app.use('/api/v1', apiRoutes);
};
//# sourceMappingURL=v1.js.map