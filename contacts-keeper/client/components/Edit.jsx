Edit = React.createClass({
  
  getInitialState() {
    return ({ showModal: false })
  },

  closeModal() {
    this.setState({ showModal: false })
  },

  openModal() {
    this.setState({ showModal: true })
  },

  updateContact(){
    this.closeModal()
    Meteor.call('updateContact', {
      firstName: text.capitalize(this.refs.firstName.getValue()),
      lastName: text.capitalize(this.refs.lastName.getValue()),
      dob: this.refs.dob.getValue(),
      phone: this.refs.phone.getValue(),
      email: this.refs.email.getValue(),
      notes: this.refs.notes.getValue()
    }, this.props.contact._id)
  },

  render() {
    var contact = this.props.contact

    return (
      <RBS.Glyphicon glyph="pencil" onClick={this.openModal}>
        <RBS.Modal show={this.state.showModal} onHide={this.closeModal} dialogClassName="contact-form">
          <RBS.Modal.Header>
            <button className='close close-btn' onClick={this.closeModal}>&times;</button>
            <RBS.Modal.Title>Contacts Keeper</RBS.Modal.Title>
          </RBS.Modal.Header>
          <RBS.Modal.Body>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="text" label="First Name" ref="firstName" defaultValue={contact.firstName}/> 
              </RBS.Col>
              <RBS.Col xs={2} md={2} sm={2} />
              <RBS.Col xs={5} md={5} sm={5} >
                <RBS.Input type="text" label="Last Name" ref="lastName" defaultValue={contact.lastName}/>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="text" label="Date of Birth" ref="dob" placeholder='MM/DD/YYYY' defaultValue={contact.dob}/> 
              </RBS.Col>
              <RBS.Col xs={2} md={2} sm={2} />
              <RBS.Col xs={5} md={5} sm={5} >
                <RBS.Input type="text" label="Phone Number" ref="phone" defaultValue={contact.phone}/>
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={5} md={5} sm={5}>
                <RBS.Input type="email" label="Email" ref="email" defaultValue={contact.email}/> 
              </RBS.Col>
            </RBS.Row>
            <RBS.Row className="show-grid">
              <RBS.Col xs={12} md={12} sm={12}>
                <RBS.Input type="textarea" label="Notes" ref="notes" defaultValue={contact.notes}/> 
              </RBS.Col>
            </RBS.Row>
          </RBS.Modal.Body>
          <RBS.Modal.Footer>
            <RBS.Button className='btn-save' type='submit' onClick={this.updateContact} >Update</RBS.Button>
          </RBS.Modal.Footer>
        </RBS.Modal>
      </RBS.Glyphicon>
    )
  }
})