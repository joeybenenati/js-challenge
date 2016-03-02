Table = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData() {
    return {
      contacts: Contacts.find().fetch()
    }
  },
  
  renderContacts() {
    //map contact data to Contact component
    var rows = this.data.contacts.map((contact, index) => {
      return <Contact key={index} {...contact} />
    })

    while (rows.length < 7) { //minimum 7 table rows showing
      rows.push(<Contact key={rows.length}/>)
    }
    return rows
  },

  render() {
    return (
      <RBS.Table bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {this.renderContacts()}
        </tbody>
      </RBS.Table>
    )
  }
})