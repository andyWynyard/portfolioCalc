import * as express from 'express';
import {
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} from '../controllers/PortfolioController';
import {
  getAllSecurities,
  getSecurityById,
  createSecurity,
  updateSecurity,
  deleteSecurity
} from '../controllers/SecuritiesController';

export default app => {
  // api routes
  const apiRoutes = express.Router();
  const portfolioRoutes = express.Router();
  const securitiesRoutes = express.Router();

  /********************************
   *** portfolio endpoints
   ********************************/

  // append portfolio routes to api routes
  apiRoutes.use('/portfolio', portfolioRoutes);

  // get all Portfolios
  portfolioRoutes.get('/', getAllPortfolios);

  // get user by id
  portfolioRoutes.get('/:id', getPortfolioById);

  // create user
  portfolioRoutes.post('/', createPortfolio);

  // update user by id
  portfolioRoutes.put('/:id', updatePortfolio);

  // delete user by id
  portfolioRoutes.delete('/:id', deletePortfolio);

  /********************************
   *** securities endpoints
   ********************************/

  // append user routes to api routes
  apiRoutes.use('/securities', securitiesRoutes);

  // get all posts
  securitiesRoutes.get('/', getAllSecurities);

  // get user by id
  securitiesRoutes.get('/:id', getSecurityById);

  // create user
  securitiesRoutes.post('/', createSecurity);

  // update user by id
  securitiesRoutes.put('/:id', updateSecurity);

  // delete user by id
  securitiesRoutes.delete('/:id', deleteSecurity);

  /********************************
   *** append apiRoutes to app
   ********************************/

  app.use('/api/v1', apiRoutes);
};
