if (Meteor.isClient) {
  Meteor.subscribe("contacts");

  Meteor.startup(function () {
    const {Router, Route, Link, IndexRoute} = ReactRouter
    const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

    ReactDOM.render((
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component = {App} />
        </Route>
      </Router>
    ), document.getElementById("render-target"));

  });
}