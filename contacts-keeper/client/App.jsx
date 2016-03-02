App = React.createClass({

  render() {
    return (
      <div>
        <RBS.PageHeader><small>Contacts Keeper</small></RBS.PageHeader>
        <div className='content'>
          <RBS.Row className="show-grid controls">
            <RBS.Col xs={5} sm={4} md={4}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <div className="input-group-addon"><RBS.Glyphicon glyph="search" /></div>
              </div>
            </RBS.Col>
            <RBS.Col xs={4} sm={6} md={6}></RBS.Col>
            <RBS.Col xs={3} sm={2} md={2} >
              <AddButton/>
            </RBS.Col>
          </RBS.Row>
          <Table/>
        </div>
      </div>

    )
  }
})