if (Meteor.isServer) {
  Meteor.publish("contacts", function (user){
    return Contacts.find();
  });
}