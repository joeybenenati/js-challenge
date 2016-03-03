const {Router, Route, Link, IndexRoute} = ReactRouter
const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

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