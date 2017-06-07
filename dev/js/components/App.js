import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import CreateUser from '../containers/create-user';
require('../../scss/style.scss');

class App extends Component {

	render() {
		return (
			<div>
				<CreateUser />
	        	<UserList />
	        	<UserDetails />
	    	</div>
		);
	}

}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(App);
