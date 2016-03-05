var ContactForm = React.createClass({

  getInitialState: function() {
    return {
      firstname: '',
      lastname: '',
      dob:'',
      phone: '',
      email: '',
      notes: ''
    }
  },

  handleChange: function(e) {
    var stateChange = {}
    stateChange[e.target.name] = e.target.value
    this.setState(stateChange)
  },

  handleSubmit: function(e) {
    e.preventDefault()
    var contact = JSON.parse(JSON.stringify(this.state))
    contact.firstname = capitalize(firstname)
    contact.lastname = capitalize(lastname)
    $.post('', { contact: contact }, data => {
      this.props.handleNewContact(data)
      this.setIntitialState(this.getInitialState)
    }, 'JSON')
  },

  render: function() {
    return (
      <ReactBootstrap.Modal show={this.props.show} onHide={this.props.close} dialogClassName="contact-form">
        <ReactBootstrap.Modal.Header>
          <button className='close close-btn' onClick={this.props.close}>&times;</button>
          <ReactBootstrap.Modal.Title>Contacts Keeper</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <form onSubmit={this.handleSubmit}>
        <ReactBootstrap.Modal.Body>
          <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col xs={5} md={5} sm={5}>
              <ReactBootstrap.Input type="text" label="First Name" name='firstname' 
                                    value={this.state.firstname} onChange={this.handleChange}
                                    /> 
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={2} md={2} sm={2} />
            <ReactBootstrap.Col xs={5} md={5} sm={5} >
              <ReactBootstrap.Input type="text" label="Last Name" name="lastname"
                                    value={this.state.lastname} onChange={this.handleChange}
                                    />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col xs={5} md={5} sm={5}>
              <ReactBootstrap.Input type="text" label="Date of Birth" name="dob" placeholder='MM/DD/YYYY'
                                    value={this.state.dob} onChange={this.handleChange}
                                    /> 
            </ReactBootstrap.Col>
            <ReactBootstrap.Col xs={2} md={2} sm={2} />
            <ReactBootstrap.Col xs={5} md={5} sm={5} >
              <ReactBootstrap.Input type="text" label="Phone Number" name="phone"
                                    value={this.state.phone} onChange={this.handleChange}
                                    />
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col xs={5} md={5} sm={5}>
              <ReactBootstrap.Input type="email" label="Email" name="email" 
                                    value={this.state.email} onChange={this.handleChange}
                                    /> 
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Row className="show-grid">
            <ReactBootstrap.Col xs={12} md={12} sm={12}>
              <ReactBootstrap.Input type="textarea" label="Notes" name="notes" 
                                    value={this.state.notes} onChange={this.handleChange}
                                    /> 
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button className='btn-save' type='submit' onClick={this.handleSubmit} >Save</ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
        </form>
      </ReactBootstrap.Modal>
    )
  }
});
