const path = require("path");

const get_user_details = async (email, pwd) => {
    console.log("came for checking user details in db");
    console.log(email, pwd);
    return true;
    
}

module.exports = get_user_details;