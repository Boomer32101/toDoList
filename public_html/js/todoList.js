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
     
     Handlebars.registerHelper('format', function(time) {
         return moment(time).format("dddd, MMMM Do YYYY");
     });
     
     var blogScript = $("#blogs-template").html();
     var blogTemplate = Handlebars.compile(blogScript);
     var blogHTML = blogTemplate(wrapper);
     
     $('.main-container').html(blogHTML);
     
});
     
function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );