AddButton = React.createClass({

  render() {

    return (
      <RBS.Button bsStyle="primary" bsSize="small" onClick={this.open} className='float-right'>
        <RBS.Glyphicon className='btn-glyph' glyph="plus-sign" />
        Contacts Keeper
      </RBS.Button>
    )
  }
})