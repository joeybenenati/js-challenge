if (Meteor.isClient) {
  Meteor.subscribe("contacts");

  Meteor.startup(function () {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}