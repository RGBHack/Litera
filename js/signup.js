var form = document.getElementById("form")
form.onsubmit = (e) => {
    e.preventDefault();
    var username = form['name'];
    var password = form['password'];
    firebase.auth().createUserWithEmailAndPassword(username+"@rgbhack.tk",password).then((cred) => {
        cred.user.updateProfile({
            displayName: 0
        }).then(() => {
            window.location.pathname = '/'
        })
    })
}