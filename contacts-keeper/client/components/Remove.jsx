Remove = React.createClass({

  getInitialState() {
    return ({ showModal: false })
  },

  showModal(){
    this.setState({ showModal: true })
  },

  closeModal(){
    this.setState({ showModal: false })
  },

  deleteContact(){
    this.closeModal()
    Meteor.call('deleteContact', this.props.contact._id)
  },

  render () {
    return (
      <RBS.Glyphicon glyph="remove" onClick={this.showModal} className='contact-ctrl'>
        <RBS.Modal show={this.state.showModal} onHide={this.closeModal} dialogClassName="contact-form">
          <RBS.Modal.Header>
            <button className='close close-btn' onClick={this.closeModal}>&times;</button>
            <RBS.Modal.Title>Remove Contact</RBS.Modal.Title>
          </RBS.Modal.Header>
          <RBS.Modal.Body>
            <p>Are you sure you want to permanently remove {this.props.contact.firstName} {this.props.contact.lastName} from Contacts Keeper?
            </p>
          </RBS.Modal.Body>
          <RBS.Modal.Footer>
            <RBS.Button className='btn-save' type='submit' onClick={this.closeModal}>Cancel</RBS.Button>
            <RBS.Button className='btn-save' type='submit' onClick={this.deleteContact}>Remove</RBS.Button>
          </RBS.Modal.Footer>
        </RBS.Modal>
      </RBS.Glyphicon>
    )
  }
})