var Contact = React.createClass({

  render: function() {
    return (
      <tr>
        {/* remove and edit glyphs don't render for empty rows*/
          this.props.active ?
            <td className='td-remove'><RemoveIcon contact={this.props.contact} remove={this.props.remove}/></td> :
            <td className='td-remove'></td>
        }
        {
          this.props.active ?
            <td className='td-edit'><EditIcon contact={this.props.contact} update={this.props.update}/></td> :
            <td className='td-edit'></td>
        }
        <td className='td-md'>{this.props.contact.firstname}</td>
        <td className='td-md'>{this.props.contact.lastname}</td>
        <td className='td-sm'>{this.props.contact.dob}</td>
        <td className='td-md'>{this.props.contact.phone}</td>
        <td className='td-md'>{this.props.contact.email}</td>
        <td className='td-lg'>{this.props.contact.notes}</td>
      </tr>
    );
  }
});
