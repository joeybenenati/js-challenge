Contact = React.createClass({

  render() {
    return (
      <tr>
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