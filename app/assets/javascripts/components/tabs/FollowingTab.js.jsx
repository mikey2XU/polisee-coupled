var FollowingTab = React.createClass({
    handleClick: function() {
      var link = '/favorites/index'
      // console.log("hitting FollowingTab")
      // console.log(this.props.tab)
      this.props.parentElement.handleClick(this.props.tab, link)
    },

    render: function(){
      return(
        <li className="tab col s4">
          <a href="#" onClick={this.handleClick} className="waves-effect waves-blue btn-new ">Following</a>
        </li>
      );
    }
});
