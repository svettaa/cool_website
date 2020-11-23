const requests = require("../server/RequestsTrainings");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.route("/api/training")
        .get(requests.getAll)
        .put(requests.addNew);
    app.route("/api/training/:id")
        .get(requests.getOne)
        .post(requests.editOne)
        .delete(requests.removeOne);
};
