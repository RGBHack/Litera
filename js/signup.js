var form = document.getElementById("form")
form.onsubmit = (e) => {
    e.preventDefault();
    var username = form['name'].value;
    var password = form['password'].value;
    firebase.auth().createUserWithEmailAndPassword(username+"@rgbhack.tk",password).then((cred) => {
        cred.user.updateProfile({
            displayName: 0
        }).then(() => {
            window.location.pathname = '/'
        })
    }).catch(err => {
        if (err.code === "auth/email-already-in-use") {
            alert("Username is already in use")
        } else if (err.code === "auth/invalid-email") {
            alert("Forbidden Characters Used (@, -)")
        } else {
            console.log(err.code)
            alert("Insecure password")
        }
    })
}