var express = require('express');
const fetch = require('node-fetch');

var app = express();
app.get('/', function (req, res) {
  //Reemplazar URL de abajo
  fetch('https://wmclouddev.s3.amazonaws.com/spacex/20220429/workflow/5f80a76f-189a-5c49-bac4-9f8c64530e47/diagrama.xml?response-content-disposition=inline&response-content-type=application%2Fxml&AWSAccessKeyId=AKIA43PUSPQQS3Q6NRMJ&Signature=Fhq4SG%2FJ1tkjcmvW9A%2BOkS5qWFA%3D&Expires=1651852226', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/xml',
      "Access-Control-Allow-Origin": "*"
    }
  }).then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

});
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});