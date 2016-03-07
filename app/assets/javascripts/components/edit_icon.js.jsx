var EditIcon = React.createClass({

  getInitialState() {
    var contact = this.props.contact
    return { 
      showModal: false,
      contact: {
        firstname: contact.firstname,
        lastname: contact.lastname,
        dob: contact.dob,
        phone: contact.phone,
        email: contact.email,
        notes: contact.notes
      }
    }
  },

  hideModal: function() {
    this.setState(this.getInitialState)
    // this.setState({ showModal: false })
  },

  openModal: function() {
    this.setState({ showModal: true })
  },

  handleChange: function(e) {
    var contact = JSON.parse(JSON.stringify(this.state.contact))
    contact[e.target.name] = e.target.value
    this.setState({contact: contact})
  },

  updateContact: function(e){
    e.preventDefault()
    this.closeModal()
    // Meteor.call('updateContact', {
    //   firstName: text.capitalize(this.refs.firstName.getValue()),
    //   lastName: text.capitalize(this.refs.lastName.getValue()),
    //   dob: this.refs.dob.getValue(),
    //   phone: this.refs.phone.getValue(),
    //   email: this.refs.email.getValue(),
    //   notes: this.refs.notes.getValue()
    // }, this.props.contact._id)
  },

  render: function() {
    var contact = this.state.contact

    return (
      <ReactBootstrap.Glyphicon glyph="pencil" onClick={this.openModal} className='contact-ctrl'>
        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.hideModal} dialogClassName="contact-form">
          <ReactBootstrap.Modal.Header>
            <button className='close close-btn' onClick={this.hideModal}>&times;</button>
            <ReactBootstrap.Modal.Title>Contacts Keeper</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <form onSubmit={this.handleSubmit}>
          <ReactBootstrap.Modal.Body>
            <ReactBootstrap.Row className="show-grid">
              <ReactBootstrap.Col xs={5} md={5} sm={5}>
                <ReactBootstrap.Input type="text" label="First Name" name='firstname' 
                                      value={contact.firstname} onChange={this.handleChange}
                                      /> 
              </ReactBootstrap.Col>
              <ReactBootstrap.Col xs={2} md={2} sm={2} />
              <ReactBootstrap.Col xs={5} md={5} sm={5} >
                <ReactBootstrap.Input type="text" label="Last Name" name="lastname"
                                      value={contact.lastname} onChange={this.handleChange}
                                      />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="show-grid">
              <ReactBootstrap.Col xs={5} md={5} sm={5}>
                <ReactBootstrap.Input type="text" label="Date of Birth" name="dob" placeholder='MM/DD/YYYY'
                                      value={contact.dob} onChange={this.handleChange}
                                      /> 
              </ReactBootstrap.Col>
              <ReactBootstrap.Col xs={2} md={2} sm={2} />
              <ReactBootstrap.Col xs={5} md={5} sm={5} >
                <ReactBootstrap.Input type="text" label="Phone Number" name="phone"
                                      value={contact.phone} onChange={this.handleChange}
                                      />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="show-grid">
              <ReactBootstrap.Col xs={5} md={5} sm={5}>
                <ReactBootstrap.Input type="email" label="Email" name="email" 
                                      value={contact.email} onChange={this.handleChange}
                                      /> 
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row className="show-grid">
              <ReactBootstrap.Col xs={12} md={12} sm={12}>
                <ReactBootstrap.Input type="textarea" label="Notes" name="notes" 
                                      value={contact.notes} onChange={this.handleChange}
                                      /> 
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button className='btn-save' type='submit' onClick={this.handleSubmit} >Update</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
          </form>
        </ReactBootstrap.Modal>
      </ReactBootstrap.Glyphicon>
    )
  }
});
