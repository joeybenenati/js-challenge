Contact = React.createClass({ 

  getInitialState () {
    return {
      active: this.props.active
    }
  },

  render() {
    return (
      <tr>
        {/* so remove and edit glyphs don't render for empty rows*/
          this.props.active ?
            <td className='td-remove'><Remove contact={this.props}/></td> :
            <td className='td-remove'></td>
        }
        {
          this.props.active ?
            <td className='td-edit'><Edit contact={this.props}/></td> :
            <td className='td-edit'></td>
        }
        <td className='td-md'>{this.props.firstName}</td>
        <td className='td-md'>{this.props.lastName}</td>
        <td className='td-sm'>{this.props.dob}</td>
        <td className='td-md'>{this.props.phone}</td>
        <td className='td-md'>{this.props.email}</td>
        <td className='td-lg'>{this.props.notes}</td>
      </tr>
    );
  }

})