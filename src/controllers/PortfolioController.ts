import Portfolio from '../models/Portfolio';

// get all portfolios
export function getAllPortfolios(req, res, next) {
  Portfolio.find()
    .then(data => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch(err => {
      const status = res.statusCode;
      res.json({
        status,
        err
      });
    });
}

// get one portfolio
export function getPortfolioById(req, res, next) {
  const id: string = req.params.id;
  Portfolio.findOne({ id })
    .then(data => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch(err => {
      const status = res.statusCode;
      res.json({
        status,
        err
      });
    });
}

// create a portfolio
export function createPortfolio(req, res, next) {
  const id: string = req.body.id;
  const transactions: string = req.body.transactions;

  const portfolio = new Portfolio({
    id,
    transactions
  });

  portfolio
    .save()
    .then(data => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch(err => {
      const status = res.statusCode;
      res.json({
        status,
        err
      });
    });
}

// update a portfolio
export function updatePortfolio(req, res, next) {
  const id: string = req.params.id;

  Portfolio.findOneAndUpdate({ id }, req.body)

    .then(data => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch(err => {
      const status = res.statusCode;
      res.json({
        status,
        err
      });
    });
}

// delate a portfolio
export function deletePortfolio(req, res, next) {
  const id: string = req.params.id;

  Portfolio.findByIdAndRemove({ id })
    .then(data => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch(err => {
      const status = res.statusCode;
      res.json({
        status,
        err
      });
    });
}
