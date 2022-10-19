// import { response } from 'express';
// import fetch from 'node-fetch';
// import {parseString} from 'xml2js';
const {parseString} = require('xml2js');
const fetch = require("node-fetch");
fetch('http://restapi.adequateshop.com/api/Traveler?page=1', {
  method: 'GET',
  headers: {
    'Content-Type': 'text/xml'
  }

}).then(response=>{
  return response.text();
}).then(responseText => {
  var xmlData = responseText;
  parseString(xmlData, function(err, result){
    var data = JSON.stringify(result)
    console.log(data);
  })

}).catch(error => console.log(error))
;