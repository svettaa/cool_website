const requests = require("../server/RequestsAplications");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.route("/api/send").post(requests.sendEmails);
    app.route("/api/aplication")
        .get(requests.getAll)
        .post(requests.addNew);

  app.route("/api/userid")
      .get(requests.getByMail)

    app.route("/api/aplication/:id")
        .get(requests.getOne)
        .post(requests.editOne)
        .delete(requests.removeOne);

  app.route("/varification/:id")
      .patch( requests.makeVerificated);
};
