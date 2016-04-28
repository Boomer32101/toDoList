$(function () {
     var APPLICATION_ID = "C243E829-5B89-D716-FF6E-7451EBCBF800",
         SECRET_KEY = "2BCB2663-E3EF-920F-FFC1-56108020FF00",
         VERSION = "v1";
         
     Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     var loginScript = $("#login-template").html();
     var loginTemplate = Handlebars.compile(loginScript);
     
     $('.main-container').html(loginTemplate);
     
     $(document).on('submit','.form-signin',function(event){
         event.preventDefault();
         
         var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
            
        Backendless.UserService.login(email,password,true,new Backendless.Async(userLoggedIn, gotError));   
     });
});
     
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}