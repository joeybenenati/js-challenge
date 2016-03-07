function capitalize (str) {
  return str.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1)
  }).join(' ')
}

function searchFilter(contact, searchInput){
  return contact.firstname.toLowerCase().includes(searchInput) || 
    contact.lastname.toLowerCase().includes(searchInput) ||
    contact.email.toLowerCase().includes(searchInput) ||
    contact.email.toLowerCase().includes(searchInput) ||
    contact.phone.toLowerCase().includes(searchInput) 
}

