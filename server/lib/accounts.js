Accounts.onCreateUser(function (options, user) {
  if (user.servvices.facebook) {
    var facebook = user.servvices.facebook;
    user['profile'] = {
      name : facebook.name
    }
  }
  
  return user;
});