var express = require('express');
var router = express.Router();

var unirest = require('unirest');

var soap = require('soap');
var url = 'http://localhost:7777/ws/PublicacionWebService?wsdl';

var soapHeader = ''//xml string for header

router.get("/rest", function (req, res, nex) {
    res.redirect("FormRest.html")
});


router.get("/soap", function (req, res, nex) {
    res.redirect("FormSoap.html")
});


router.get("/", function (req, res, nex) {
    res.redirect("index.html")
});



router.get("/soap/publicaciones/:correo", function(req, res, next) {

    soap.createClient(url, function(err, client){

        client.getPublicacionesByEmail({arg0: req.params.correo}, function(err, resp){
            console.log(resp);

            if(err){ throw err; }
                res.json(resp);
        });


    });
});

router.post("/soap/crear/", function(req, res, next) {
    soap.createClient(url, function(err, client){
        client.crear({arg0: req.body.correo, arg1: req.body.descripcion, arg2: req.body.foto}, function(err, resp){
         //   console.log(resp);
            if(err){ throw err; }
                res.json(resp);
        });
    });
});


module.exports = router;
