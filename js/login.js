var form = document.getElementById("form")
form.onsubmit = (e) => {
    e.preventDefault();
    var username = form['name'];
    var password = form['password'];
    firebase.auth().signInWithEmailAndPassword(username+"@rgbhack.tk",password).then((cred) => {
        window.location.pathname = '/'
    })
}