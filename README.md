# Portfolio Calculator

### All files are supplied

Takes advantage of `process.argv();` for CLI.

Takes 2 arguments, portfolio number and Date.

Instructions:

1. Clone
2. `cd PortfolioCalculation`
3. Run `npm install`
4. Example to run: `node PortfolioCalculation.js 4 2011-11-30`

Application has no server to keep running. Will give the result straight away.

Todo:

* [x] Refactor out Calculation functions
* [ ] Write tests
* [ ] Create front end in React
* [x] Store Securities on MongoDB
* [ ] Deploy everything

** UPDATE **

* Application now can take in more securities and portfolios. Some more have
  been added and tested.
* Securities and Portfolios are now stored on an external MongoDB instance.
  Postman can be used for the POST and GET methods.

To do this, run compile `tsc` then `yarn server`. Switch over to Postman and hit
these end points.

http://localhost:3000/api/v1/portfolio/
http://localhost:3000/api/v1/portfolio/:id

http://localhost:3000/api/v1/securities/
http://localhost:3000/api/v1/securities/:id

The instance is very limited, and wont allow massive amounts of data. However I
have adjusted the input size so that up to 50mb of data can be submitted per
post.
