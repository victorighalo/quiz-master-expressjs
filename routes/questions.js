var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET Questions. */
router.get('/', function (req, res, next) {
    db.Questions.find()
        .then((questions) => {
            res.json(questions);
        })
        .catch((error) => {
            res.send(error);
        })
});

/* GET Question by Id. */
router.get('/:questionId', function (req, res, next) {
    db.Questions.findById(req.params.questionId)
        .then((question) => {
            res.json(question);
        })
        .catch((error) => {
            res.send(error);
        })
});

router.post('/', function (req, res, next) {
    db.Questions.create(req.body)
    .then( (newCreatedQustion) => {
        res.status(201).json(newCreatedQustion)
    } )
    .catch( (error) => {
        res.send(error);
    })

})

module.exports = router;
