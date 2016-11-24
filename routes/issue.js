var express = require('express');
var router = express.Router();

var jira = require("../jira");

router.get('/:key/issue', function (req, res) {
    jira.getIssue(req.params.key).then(function (json) {
        res.send(json);
    })
});

module.exports = router;
