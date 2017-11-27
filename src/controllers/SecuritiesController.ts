import Security from '../models/Security';

// get all securities
export function getAllSecurities(req, res, next) {
  Security.find()
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

// get one security
export function getSecurityById(req, res, next) {
  const id: string = req.params.id;
  Security.findOne({ id })
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

// create a new security
export function createSecurity(req, res, next) {
  const id: string = req.body.id;
  const historyDetails: string = req.body.historyDetails;

  const security = new Security({
    id,
    historyDetails
  });

  security
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

// update a security
export function updateSecurity(req, res, next) {
  const id: string = req.params.id;

  Security.findOneAndUpdate({ id }, req.body)

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

// delete a security
export function deleteSecurity(req, res, next) {
  const id: string = req.params.id;

  Security.findByIdAndRemove({ id })
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
