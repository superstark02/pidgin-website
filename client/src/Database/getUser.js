import firebase from '../firebase'

export default function getUser() {
    return new Promise((resolve, reject) => {
        var data

        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                resolve(user.displayName)
            }
            else{
                resolve(-1)
            }
        })

    });
}