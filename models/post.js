Post = new Meteor.Collection('posts');

Post.publish = function (message) {
  this.insert({
    message : message, 
    date : moment().format('DD/MM/YYYY HH:mm:ss'), 
    userId : Meteor.userId()
  });
};

Post.list = function (userId) {
  return this.find({userId : userId}, {sort: {date: "desc"}});
};