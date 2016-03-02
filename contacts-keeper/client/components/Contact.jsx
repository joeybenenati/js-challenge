Contact = React.createClass({ 

  getInitialState () {
    return {
      active: Boolean(this.props.firstName || this.props.lastName)
    }
  },

  render() {
    return (
      <tr>
        {
          this.state.active ?
            <td className='td-remove' id active={this.state.active}><Remove /></td> :
            <td className='disabled' id active={this.state.active}><Remove /></td>
        }
        {
          this.state.active ?
            <td className='td-edit' active={this.state.active}><Edit /></td> :
            <td className='disabled' active={this.state.active}><Edit /></td>
        }
        <td className='td-md'>{this.props.firstName || ''}</td>
        <td className='td-md'>{this.props.lastName || ''}</td>
        <td className='td-sm'>{this.props.dob || ''}</td>
        <td className='td-md'>{this.props.phone || ''}</td>
        <td className='td-md'>{this.props.email || ''}</td>
        <td className='td-lg'>{this.props.notes || ''}</td>
      </tr>
    );
  }

})