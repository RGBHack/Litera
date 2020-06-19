const auth = firebase.auth();
    document.getElementById("logout").onclick = function () {
      console.log("log out")
      auth.signOut().then(() => {
        window.location.pathname = '/login'
        console.log("logged out")
      })
    }