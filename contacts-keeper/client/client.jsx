if (Meteor.isClient) {
  Meteor.subscribe("contacts");

  Meteor.startup(function () {
    ReactDOM.render(<Routes/>, document.getElementById("render-target"));

  });
}