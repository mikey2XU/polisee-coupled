var RepresentativeBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  loadRepresentativesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
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
      <RepresentativesList data={this.state.data} />
    )
  }
});