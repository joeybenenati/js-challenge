Routes = React.createClass({
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component = {App} />
        </Route>
      </Router>
    )
  }
})