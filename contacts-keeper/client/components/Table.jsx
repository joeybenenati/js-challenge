Table = React.createClass({
  
  renderContacts() {
    //map contact data to Contact component
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