var RepName = React.createClass({
	render: function() {
		return (
			<a href={this.props.url} >{this.props.first_name} {this.props.last_name}</a>
		)
	}
})
