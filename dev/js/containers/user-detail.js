import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {editUser} from "../actions/edit-user";
import {saveUser} from "../actions/save-user";
import {selectUser} from '../actions/select-user'
import {deleteUser} from '../actions/delete-user'


/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return <div></div>;
        } else if (this.props.editMode) {
        	return (
	            <div>
	            	<hr />
		        	<h2>User Details</h2>

	                First: <input type="text" ref="first" defaultValue={this.props.user.first}></input>
	                Last: <input type="text" ref="last" defaultValue={this.props.user.last}></input>
	                Age: <input type="text" ref="age" defaultValue={this.props.user.age}></input> <br/>
	                Description <input type="text" ref="description" defaultValue={this.props.user.description}></input> <br/>

	                <button 
	                	onClick={() => {
	                		const newUser = {
		                		id: this.props.user.id,
				            	first: this.refs.first.value,
				            	last: this.refs.last.value,
				            	age: this.refs.age.value,
				            	description: this.refs.description.value
	                		};
	                		this.props.saveUser(newUser);
	                		this.props.selectUser(newUser);
	                	}}
	                >
	                	Save
	                </button>
	            </div>
	        );
        } else {
	        return (
	            <div>
	            	<hr />
		        	<h2>User Details</h2>

	                <h3>{this.props.user.first} {this.props.user.last}</h3>
	                <h4>Age: {this.props.user.age}</h4>
	                <h4>Description: {this.props.user.description}</h4>

	                <button onClick={() => this.props.editUser()}>Edit</button>
	                <button
	                	onClick={() => {
	                		this.props.deleteUser(this.props.user);
	                		this.props.selectUser(null);
	                	}}
	                >
	                	Delete
	                </button>
	            </div>
	        );
	    }
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser,
        editMode: state.editMode
    };
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		editUser: editUser,
		saveUser: saveUser,
		selectUser: selectUser,
		deleteUser: deleteUser
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
