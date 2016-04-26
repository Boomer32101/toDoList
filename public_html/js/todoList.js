$(function () {
     var APPLICATION_ID = "C243E829-5B89-D716-FF6E-7451EBCBF800",
         SECRET_KEY = "2BCB2663-E3EF-920F-FFC1-56108020FF00",
         VERSION = "v1";
         
     Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
     
     
     var dataStore = Backendless.Persistence.of(Posts);
     var post = new Posts({title:"My first Poost", content:"Poost number one", authorEmail:"email@email.com"});
     dataStore.save(post);
         
});
     
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}