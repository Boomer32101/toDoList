$(function () {
     var APPLICATION_ID = "C243E829-5B89-D716-FF6E-7451EBCBF800",
         SECRET_KEY = "2BCB2663-E3EF-920F-FFC1-56108020FF00",
         VERSION = "v1";
         
     Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     
     var postsCollection = Backendless.Persistence.of(Posts).find();
     
     console.log(postsCollection);
     
     var wrapper = {
         posts: postsCollection.data
     };
     
     var blogScript = $("#blogs-template").html();
     var blogTemplate = Handlebars.compile(blogScript)
     
});
     
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}