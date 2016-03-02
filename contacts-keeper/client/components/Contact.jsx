Contact = React.createClass({ 

  getInitialState () {
    return {
      active: this.props.active
    }
  },

  render() {
    return (
      <tr>
        {
          this.props.active ?
            <td className='td-remove'><Remove contact={this.props}/></td> :
            <td className='disabled'></td>
        }
        {
          this.props.active ?
            <td className='td-edit'><Edit contact={this.props}/></td> :
            <td></td>
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