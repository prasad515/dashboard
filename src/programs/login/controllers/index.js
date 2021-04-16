const path = require("path");

exports.get_user = async (req, res) => {
    console.log("came for checking user");
    res.render("././dashboard/views/index.ejs", {email: req.body.email});
    
}

exports.get_login = async (req, res) => {
    console.log("came for login page");
    res.render("././dashboard/views/login.ejs");
}