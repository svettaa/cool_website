const articles = require("../server/ModelAplications").aplication;
const path = require("path");
const requests = require("../server/Requests");
module.exports = function (app) {
    var varifiID;
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    /*app.route("/").get((req, res) => {
        articles.find()
            .then(() => {
                res.render(path.join(__dirname, "..", "adminMode.html"));
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.route("/adminMode.html").get((req, res) => {
        articles.find()
            .then(() => {
                res.render(path.join(__dirname, "..", "adminMode.html"));
            })
            .catch((err) => {
                console.log(err);
            });
    });
*/
    const items1 = [
        {
            name: "Головна",
            href: "/main.twig"
        },
        {
            name: "Тренінги",
            href: "/main.twig"
        },
        {
            name: "Про нас",
            href: "/aboutUs.twig"
        }
    ];

    app.route("/").get((req, res) => {
        res.render(path.join(__dirname, "../templates/", "main.twig"),
                {menu_items: items1});


    });

    app.route("/main.twig").get((req, res) => {

       res.render(path.join(__dirname, "../templates/", "main.twig"),
                {menu_items: items1});
    });

    app.route("/aboutUs.twig").get((req, res) => {
        res.render(path.join(__dirname, "../templates/", "aboutUs.twig"),
            {menu_items: items1});
    });

    app.route('/varification/:id').get(

        (req, res) =>  {
        res.render(path.join(__dirname, "../templates/", "varification.html")
        )

    });

};
