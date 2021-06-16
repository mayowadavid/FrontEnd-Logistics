const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin.auth().getUserByEmail(data.email).then(user=> {
    return cors(admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    }));
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin`
    }
  }).catch(err => {
    return err;
  });
});
