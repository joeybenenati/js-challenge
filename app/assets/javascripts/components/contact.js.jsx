var Contact = React.createClass({

  getInitialState: function() {
    return {
      active: this.props.active
    }
  },

  render: function() {
    return (
      <tr>
        {/* emove and edit glyphs don't render for empty rows*/
          this.props.active ?
            <td className='td-remove'>{/*<Remove contact={this.props}/>*/}</td> :
            <td className='td-remove'></td>
        }
        {
          this.props.active ?
            <td className='td-edit'>{/*<Edit contact={this.props}/>*/}</td> :
            <td className='td-edit'></td>
        }
        <td className='td-md'>{this.props.firstname}</td>
        <td className='td-md'>{this.props.lastname}</td>
        <td className='td-sm'>{this.props.dob}</td>
        <td className='td-md'>{this.props.phone}</td>
        <td className='td-md'>{this.props.email}</td>
        <td className='td-lg'>{this.props.notes}</td>
      </tr>
    );
  }
});
