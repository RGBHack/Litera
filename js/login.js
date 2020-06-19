var form = document.getElementById("form")
form.onsubmit = (e) => {
    e.preventDefault();
    var username = form['name'].value;
    var password = form['password'].value;
    firebase.auth().signInWithEmailAndPassword(username+"@rgbhack.tk",password).catch(err => {
        alert("Please check your username and password")
    })
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location.pathname = '/'
    }
})