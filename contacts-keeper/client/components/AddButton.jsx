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

  render() {

    return (
      <RBS.Button bsStyle="primary" bsSize="small" onClick={this.openModal} className='float-right'>
        <RBS.Glyphicon className='btn-glyph' glyph="plus-sign" />
        Contacts Keeper
        <RBS.Modal show={this.state.showModal} onHide={this.closeModal} dialogClassName="contact-form">
          <RBS.Modal.Header>
            <RBS.Modal.Title>Contacts Keeper</RBS.Modal.Title>
          </RBS.Modal.Header>
          <RBS.Modal.Body>
          </RBS.Modal.Body>
          <RBS.Modal.Footer>
            <RBS.Button className='btn-save'>Save</RBS.Button>
          </RBS.Modal.Footer>
        </RBS.Modal>
      </RBS.Button>
    )
  }
})