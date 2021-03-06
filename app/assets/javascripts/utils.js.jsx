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

var sortBy = {
  firstname (a, b, a_z) {
    if (a_z) {
      return a.firstname > b.firstname   
    } else {
      return a.firstname < b.firstname
    }
  },

  lastname (a, b, a_z) {
    if (a_z) {
      return a.lastname > b.lastname   
    } else {
      return a.lastname < b.lastname
    }
  },

  email (a, b, a_z) {
    if (a_z) {
      return a.email > b.email   
    } else {
      return a.email < b.email
    }
  },

  dob (a, b, a_z) {
    a = a.dob.split('/')
    b = b.dob.split('/')
    var aTime = new Date(a[2], a[0], a[1]).getTime()
    var bTime = new Date(b[2], b[0], b[1]).getTime()

    if (a_z) {
      return aTime > bTime
    } else {
      return aTime < bTime
    }
  }
}

