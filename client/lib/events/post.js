Template.post.events({
  "submit form" : function (e, template) {
    e.preventDefault();
    var textarea = template.find("textarea");
    // var posts = Session.get("posts") || [];
    // posts.push({message: textarea.value});
    // Session.set("posts", posts);
    Post.insert({
      date : moment().format('DD/MM/YYYY HH:mm:ss'), 
      message : textarea.value
    });
    textarea.value = "";
  }
});