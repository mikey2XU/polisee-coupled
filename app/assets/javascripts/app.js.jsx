var RouteHandler = ReactRouter.RouteHandler,
  Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function() {
    return { signedIn: false,
            representatives: []
    }
  },

  checkSignedIn: function() {
    $.ajax({
      url: '/check',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({signedIn: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/check', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  setZipCode: function(zipCode) {
    $.ajax({
      url: "/legislators",
      dataType: 'json',
      cache: false,
      data: {zip: zipCode},
      success: function(reps) {
        console.log("Zip: " + zipCode)
        this.setState({representatives: reps});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Zip: ERROR")
        console.error('/check', status, err.toString());
        console.error(this.state.zip);
      }.bind(this)
    });
  },

  loadRepresentativesFromServer: function() {
    $.ajax({
      url: '/legislators',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({representatives: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadRepresentativesFromServer();
  },

  render: function() {
    return (
      <div>
        <Menu signedIn={this.state.signedIn} parentComponent={this} />
        <RouteHandler reps={this.state.representatives} />
        <FooterContainer />
      </div>
    );
  }
});
        // <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        // <RepresentativeContainer url="/legislators" />
