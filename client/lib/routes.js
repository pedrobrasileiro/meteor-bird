Router.configure({
  autoRender : false
});

Router.map(function () {
  this.route('home', {
    path : '/', 
    data : function () {
      return { posts : Post.list(Meteor.userId())}
    }
  });
  
  this.route('user', {
    path : '/user/:_id', 
    data : function () {
      var _id = this.params._id;
      return {
        user : Meteor.users.findOne({_id:_id}), 
        posts : Post.list(_id)
      };
    }
  });
});