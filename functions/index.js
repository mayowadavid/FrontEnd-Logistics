const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((req, res) => {

    // check if user is an admin
    if (res.auth.token.admin !== true) {
        return {
            erroor: "you are not an admin"
        }
    }

    return admin.auth().getUserByEmail(req.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {
            message: `Success! ${req.email} has been made an admin`
        }
    }).catch(err => {
        return err;
    });
});