"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = require("../models/User");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.GetUsers = function (req, res) {
        User_1.default.find({})
            .then(function (data) {
            var status = res.statusCode;
            var tempData = data.filter(function (val) { return val.active; });
            data = tempData;
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
    };
    UserRouter.prototype.GetUser = function (req, res) {
        var username = req.params.username;
        User_1.default.findOne({ username: username })
            .then(function (data) {
            var status = res.statusCode;
            if (data.active) {
                res.json({
                    status: status,
                    data: data
                });
            }
            else {
                res.json({
                    status: 403,
                    data: []
                });
            }
        })
            .catch(function (err) {
            var status = res.statusCode;
            res.json({
                status: status,
                err: err
            });
        });
    };
    UserRouter.prototype.CreateUser = function (req, res) {
        var fName = req.body.fName;
        var lName = req.body.lName;
        var username = req.body.username;
        var email = req.body.email;
        var nationality = req.body.nationality;
        var phone = req.body.phone;
        var primaryAddress = req.body.primaryAddress;
        var deliveryAddress = req.body.deliveryAddress;
        var postalCode = req.body.postalCode;
        var city = req.body.city;
        var country = req.body.country;
        var password = req.body.password;
        var user = new User_1.default({
            fName: fName,
            lName: lName,
            username: username,
            email: email,
            nationality: nationality,
            phone: phone,
            primaryAddress: primaryAddress,
            deliveryAddress: deliveryAddress,
            postalCode: postalCode,
            city: city,
            country: country,
            password: password
        });
        user
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
    };
    UserRouter.prototype.UpdateUser = function (req, res) {
        var username = req.params.username;
        // console.log(`Params: ${req.params.username}`);
        // console.log(`Body: ${req.body.active}`);
        User_1.default.findOneAndUpdate({ username: username }, req.body)
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
    };
    UserRouter.prototype.DeleteUser = function (req, res) {
        var username = req.params.username;
        req.body = { active: false };
        User_1.default.findOneAndUpdate({ username: username }, req.body)
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
    };
    UserRouter.prototype.routes = function () {
        this.router.get('/', this.GetUsers);
        this.router.get('/:username', this.GetUser);
        this.router.post('/', this.CreateUser);
        this.router.put('/:username', this.UpdateUser);
        this.router.delete('/:username', this.DeleteUser);
    };
    return UserRouter;
}());
// export
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
