var RepName = React.createClass({
	render: function() {
		return (
		<div className="card-content">
			<span className="card-title activator grey-text text-darken-4">{this.props.first_name} {this.props.last_name}<i className="material-icons right">icon_here</i></span>
			<p><a className="waves-effect waves-light btn"><i className="material-icons right"></i>tweet</a></p>
		</div>
		)
	}
})