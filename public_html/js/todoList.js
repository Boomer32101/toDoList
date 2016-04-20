$(function () {
    var APPLICATION_ID = "C243E829-5B89-D716-FF6E-7451EBCBF800",
        SECRET_KEY = "2BCB2663-E3EF-920F-FFC1-56108020FF00",
        VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var user =  Backendless.User();
    user.email = "owen.vande@outlook.com";
    user.password = "password";
    Backendless.UserService.register(user);
});