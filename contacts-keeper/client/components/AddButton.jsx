AddButton = React.createClass({

  getInitialState() {
    return ({ showModal: false })
  },

  closeModal() {
    this.setState({ showModal: false })
  },

  openModal() {
    this.setState({ showModal: true })
  },

  saveContact(e) {
    e.preventDefault()
    this.closeModal()
    Meteor.call('addContact', {
      firstName: text.capitalize(this.refs.firstName.getValue()),
      lastName: text.capitalize(this.refs.lastName.getValue()),
      dob: this.refs.dob.getValue(),
      phone: this.refs.phone.getValue(),
      email: this.refs.email.getValue(),
      notes: this.refs.notes.getValue()
    })
  },

  render() {

    return (
      <RBS.Button bsStyle="primary" bsSize="small" onClick={this.openModal} className='blue-white float-right'>
        <RBS.Glyphicon className='btn-glyph' glyph="plus-sign" />
        Contacts Keeper
        <RBS.Modal show={this.state.showModal} onHide={this.closeModal} dialogClassName="contact-form">
          <RBS.Modal.Header>
            <button className='close close-btn' onClick={this.closeModal}>&times;</button>
            <RBS.Modal.Title>Contacts Keeper</RBS.Modal.Title>
          </RBS.Modal.Header>
          <form>
          <RBS.Modal.Body>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="text" label="First Name" ref="firstName" /> 
              </RBS.Col>
              <RBS.Col xs={2} md={2} sm={2} />
              <RBS.Col xs={5} md={5} sm={5} >
                <RBS.Input type="text" label="Last Name" ref="lastName"/>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="text" label="Date of Birth" ref="dob" placeholder='MM/DD/YYYY'/> 
              </RBS.Col>
              <RBS.Col xs={2} md={2} sm={2} />
              <RBS.Col xs={5} md={5} sm={5} >
                <RBS.Input type="text" label="Phone Number" ref="phone"/>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="email" label="Email" ref="email" /> 
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={12} md={12} sm={12}>
                <RBS.Input type="textarea" label="Notes" ref="notes" /> 
              </RBS.Col>
            </RBS.Row>
          </RBS.Modal.Body>
          <RBS.Modal.Footer>
            <RBS.Button className='btn-save' type='submit' onClick={this.saveContact} >Save</RBS.Button>
          </RBS.Modal.Footer>
          </form>
        </RBS.Modal>
      </RBS.Button>
    )
  }
})