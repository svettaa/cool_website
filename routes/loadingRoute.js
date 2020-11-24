const application = require("../server/ModelAplications").aplication;
const training = require("../server/ModelTrainings").training;
const path = require("path");
const config=require("../config/config.json");
const requests = require("../server/RequestsAplications");
module.exports = function (app) {
    var varifiID;
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.route("/admin").get((req, res) => {
        training.find()
            .then(() => {
                res.render(path.join(__dirname, "..", "adminTrainings.html"));
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.route("/adminTrainings.html").get((req, res) => {
        training.find()
            .then(() => {
                res.render(path.join(__dirname, "..", "adminTrainings.html"));
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.route("/adminApplication.html").get((req, res) => {
        application.find()
            .then(() => {
                res.render(path.join(__dirname, "..", "adminApplications.html"));
            })
            .catch((err) => {
                console.log(err);
            });
    });


    const items1 = config.menuItemsUkr;
    const items2 = config.menuItemsEng;

    app.route("/").get((req, res) => {
        res.render(path.join(__dirname, "../templates/", "main.twig"),
            {menu_items1: items1, menu_items2: items2});


    });

    app.route("/main.twig").get((req, res) => {

       res.render(path.join(__dirname, "../templates/", "main.twig"),
           {menu_items1: items1, menu_items2: items2});
    });

    app.route("/aboutUs.twig").get((req, res) => {
        res.render(path.join(__dirname, "../templates/", "aboutUs.twig"),
            {menu_items1: items1, menu_items2: items2});
    });


    app.route("/trainings.twig").get((req, res) => {
        res.render(path.join(__dirname, "../templates/", "trainings.twig"),
            {menu_items1: items1, menu_items2: items2});
    });
    app.route('/varification/:id').get(

        (req, res) =>  {
        res.render(path.join(__dirname, "../templates/", "varification.html")
        )
    });

};
