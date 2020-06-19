firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    window.location.pathname = "/login";
  }
});

function correctAnswer () {

}
