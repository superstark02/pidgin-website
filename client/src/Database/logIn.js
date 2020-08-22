import firebase, {db} from '../firebase'
export default function LogIn() {

    return new Promise((resolve, reject) => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result.user.displayName)
            resolve(result.user.displayName)
        }).catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            db.collection("LoginErrors").doc(email).set(
                {
                    errorMessage: errorMessage,
                    email: email,
                    credential: credential
                }
            )
        });

    });
}