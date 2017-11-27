"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PortfolioController_1 = require("../controllers/PortfolioController");
var SecuritiesController_1 = require("../controllers/SecuritiesController");
exports.default = function (app) {
    // api routes
    var apiRoutes = express.Router();
    var portfolioRoutes = express.Router();
    var securitiesRoutes = express.Router();
    /********************************
     *** portfolio endpoints
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
     *** securities endpoints
     ********************************/
    // append user routes to api routes
    apiRoutes.use('/securities', securitiesRoutes);
    // get all posts
    securitiesRoutes.get('/', SecuritiesController_1.getAllSecurities);
    // get user by id
    securitiesRoutes.get('/:id', SecuritiesController_1.getSecurityById);
    // create user
    securitiesRoutes.post('/', SecuritiesController_1.createSecurity);
    // update user by id
    securitiesRoutes.put('/:id', SecuritiesController_1.updateSecurity);
    // delete user by id
    securitiesRoutes.delete('/:id', SecuritiesController_1.deleteSecurity);
    /********************************
     *** append apiRoutes to app
     ********************************/
    app.use('/api/v1', apiRoutes);
};
//# sourceMappingURL=v1.js.map