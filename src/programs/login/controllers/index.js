const path = require("path");
const get_user_details = require("../../database/controllers");

exports.get_user = async (req, res) => {
    console.log("came for checking user");
    let email = req.body.email;
    let pwd = req.body.password;
    let result = await get_user_details(email,pwd);
    console.log("result::",result);
    res.render("././dashboard/views/index.ejs", {email: req.body.email});
    
}

exports.get_login = async (req, res) => {
    console.log("came for login page");
    res.render("././dashboard/views/login.ejs");
}