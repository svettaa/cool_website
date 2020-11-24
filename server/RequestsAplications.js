const db  = require("./ModelAplications").aplication;
const emailService = require("./EmailController");
const config = require('../config/config.json')
const config1 = require("../static/readJSConfig")
const wrtjsn = require("../static/writeJSON")


exports.getJsonFile = (rq,res) => {

    db.find().then( res.status(200).send(config1.configfile)).catch(err => {
        console.log(err);
    })

};

exports.writeJson = (req,res) => {



    wrtjsn.rewriteJS(req.body.email)
        .then(user => {
            res.status(200).send(user);
        }).catch(err => {
            console.log(err);
        })




};


exports.sendEmails = (req, res) => {
    console.log(req.body);
    emailService
        .send(
            req.body.text,
            req.body.users
        )
        .then((result) => res.status(200).send(result))
        .catch((err) => {
            console.log(err);
        });
};

exports.makeVerificated = (req, res) => {
    db.updateOne(
        { token: req.params.id },
        { $set: { varificated: 'true' } },
        (err, result) => {
            if (err) {
                console.log('Unable update user: ', err)
                throw err
            }
        }
    )
        .then(user => {
            res.status(200).send(user);
        })
        .catch(err => {
            console.log(err);
        });
};

//
// exports.makeVerificated = (req, res) => {
//     console.log(req.body);
//     var sql = "UPDATE customers SET varificated = 'true' WHERE token = req.params.id";
//     db.query(sql, function(err, user) {
//         if (err) throw err;
//         res.status(200).send(user); })
//         .catch(err => {
//             console.log(err);
//         });
//
// };
exports.getByMail = (req, res) => {
    db.find({email: req.body.email})
        .then(users => {
            res.status(200).send(users);
        })
        .catch(err => {
            console.log(err);
        });

};
exports.addNew = (req, res) => {
    console.log(req);
    db.create(req.body)
        .then(users => {
            res.status(200).send(users);
        })
        .catch(err => {
            console.log(err);
        });
};



exports.getAll = (req, res) => {
    db.find()
        .then(users => {
            res.status(200).send(users);
        })
        .catch(err => {
            console.log(err);
        });
};


exports.removeOne = (req, res) => {
    db.deleteOne({ _id: req.params.id })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.editOne = (req, res) => {
    db.findByIdAndUpdate(req.params.id, req.body,
        function(err, user) {
        if (err) throw err;
        res.status(200).send(user); })
        .catch(err => {
        console.log(err);
    });
};

exports.getOne =(req, res) => {
    db.find({_id: req.params.id})
        .then(users => {
            res.status(200).send(users);
        })
        .catch(err => {
            console.log(err);
        });
};


