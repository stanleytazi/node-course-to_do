//import 'isomorphic-fetch';
//curl -H "Content-Type:application/x-www-form-urlencoded;charset=UTF-8" -H "Authorization: key= AAAAdFmEV1k:APA91bFjY7SFwzt6D2-Vx3JgFX_a6F1bh2pbV7QY-bt3c0-yaTC52fzoKnxm7e2KS3epiK4OolfmyzIc3sOpb8-xYVVcxay926zSj6m4_d9RdAuiCHgVUTf0uamjeP17VHU5TK0_1r3i" -d "registration_id=APA91bE2f7ORUA8KCnJ7TXXUvez3vdhrlP1iNLUonXCS3DNgkNmcL3g16i9PXixIN4R6VyMi0HFVQPZFAfobfFdOZ3VB_-uYUeH1aR3Eo1k35JWHrOGZSV2SqCZuoWJAVJ0QcxsHNqTYMBESqpyahNjUXk2HekXG5g" -d data.hello=world https://android.googleapis.com/gcm/send
var key = 'AAAAdFmEV1k:APA91bFjY7SFwzt6D2-Vx3JgFX_a6F1bh2pbV7QY-bt3c0-yaTC52fzoKnxm7e2KS3epiK4OolfmyzIc3sOpb8-xYVVcxay926zSj6m4_d9RdAuiCHgVUTf0uamjeP17VHU5TK0_1r3i';
//var to = 'YOUR-IID-TOKEN';
// var notification = {
//   'title': 'Portugal vs. Denmark',
//   'body': '5 to 1',
//   'icon': 'firebase-logo.png',
//   'click_action': 'http://localhost:8081'
// };
var notification = {hello:"world"};
fetch('https://fcm.googleapis.com/fcm/send', {
  'method': 'POST',
  'headers': {
    'Authorization': 'key=' + key,
    'Content-Type': 'application/json'
  },
  'body': JSON.stringify({
    'notification': notification,
  })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
})