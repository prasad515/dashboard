module.exports = app => {
    app.use(require("../../login/routes")),
    app.use(require("../../dashboard/routes"));
};