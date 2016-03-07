var RemoveIcon = React.createClass({

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
    var that = this
    var url = '/contacts/' + this.props.contact.id
    $.ajax({
      method: 'DELETE',
      url: '/contacts/' + this.props.contact.id,
      dataType: 'JSON',
      success: function() {
        that.props.remove(that.props.contact)
      }
    })
  },

  render () {

    return (
      <ReactBootstrap.Glyphicon glyph="remove" onClick={this.showModal} className='contact-ctrl'>
        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.closeModal} dialogClassName="contact-form">
          <ReactBootstrap.Modal.Header>
            <button className='close close-btn' onClick={this.closeModal}>&times;</button>
            <ReactBootstrap.Modal.Title>Remove Contact</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
            <p>Are you sure you want to permanently remove {this.props.contact.firstName} {this.props.contact.lastName} from Contacts Keeper?
            </p>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button className='btn-save' type='submit' onClick={this.closeModal}>Cancel</ReactBootstrap.Button>
            <ReactBootstrap.Button className='btn-save' type='submit' onClick={this.deleteContact}>Remove</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </ReactBootstrap.Glyphicon>
    )
  }
});
