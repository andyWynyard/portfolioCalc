"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    // mongodb location
    db: 'mongodb://portfolio:portfoliopassword@ds259855.mlab.com:59855/user-no-delete',
    // port
    port: process.env.PORT || 3000,
    // test environment
    test_env: 'test',
    test_db: 'mongodb://localhost/appTester',
    test_port: 3001,
    // secret for jwt
    secret: 'darth vader'
};
exports.default = config;
//# sourceMappingURL=main.js.map