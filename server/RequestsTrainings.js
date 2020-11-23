const db  = require("./ModelTrainings").training;


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


