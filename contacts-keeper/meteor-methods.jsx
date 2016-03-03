Meteor.methods({
  
  addContact(contact) {
    return Contacts.insert(contact, err => {
      if (err) {
        console.log('failed to add contact: ', err.message)
      }
    })
  },

  updateContact(contact, contactId) {
    return Contacts.update({_id: contactId}, contact)
  },

  deleteContact(contactId) {
    return Contacts.remove({_id: contactId})
  }

})