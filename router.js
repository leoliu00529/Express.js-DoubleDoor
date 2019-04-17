/*
Zihan Liu
 */
var express = require('express');
var router = express.Router();
//I used a separate file to manage the linked list
var list = require('./linkedlist.js');


//GET will retrieve all the nodes currently in the linked list
router.get('/', function(req, res){
    res.write(list.content());
    res.end();
});

/*
POST will add the node to the tail of the linked list
I use the curl -X POST --data "value=Nice" http://localhost:3000/list command to test it
 */
router.post('/', function(req, res){
    //send an error message is the POST does not contain a valid 'value'
    if (!req.body.value) {
        res.status(400);
        res.json({message: "Bad Request"});
    }
    else {
        // list.addTT(req.body.value);
        res.write(list.addTT(req.body.value));
        res.end();
    }
});

/*
PUT will add the node to the head of the linked list
I use the curl -X PUT --data "value=Nice" http://localhost:3000/list command to test it
 */
router.put('/', function(req, res){
    if (!req.body.value) {
        res.status(400);
        res.json({message: "Bad Request"});
    }
    else {
        // list.addTH(req.body.value);
        res.write(list.addTH(req.body.value));
        res.end();
    }
});

/*
DELETE will remove the first occurrence of the node with specified value from the linked list
I use the curl -X DELETE --data "value=Nice" http://localhost:3000/list
 */

router.delete('/', function (req, res){
    if (!req.body.value) {
        res.status(400);
        res.json({message: "Bad Request"});
    }
    else {
        // list.addTH(req.body.value);
        res.write(list.deleteNode(req.body.value));
        res.end();
    }
});

module.exports = router;