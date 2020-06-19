var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
}
if (firebase.apps.length === 0) {
    firebase.initializeApp(config)
}