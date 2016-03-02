Meteor.methods({
  
  addContact(contact) {
    return Contacts.insert(contact, err => {
      if (err) {
        console.log('failed to add contact: ', err.message)
      }
    })
  }

})