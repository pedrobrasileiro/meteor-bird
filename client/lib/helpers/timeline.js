Template.timeline.helpers({
  posts : function () {
    // return Session.get("posts");
    return Post.find({}, {sort: {date: "desc"}});
  }
});