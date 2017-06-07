import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createUser} from '../actions/create-user'


class CreateUser extends Component {

    render() {
        return (
            <div>
            	<h2>Create User</h2>
            	<div className="createForm">
	            	First: <input type="text" ref="first"></input>
	            	Last: <input type="text" ref="last"></input>
	            	Age: <input type="text" ref="age"></input>
	            	Description: <input type="text" ref="description"></input>
		            <button 
		            	onClick={() => {
		            		this.props.createUser({
			            		id: this.props.id,
			            		first: this.refs.first.value,
			            		last: this.refs.last.value,
			            		age: this.refs.age.value,
			            		description: this.refs.description.value
		            		});
		            		this.refs.first.value = "";
		            		this.refs.last.value = "";
		            		this.refs.age.value = "";
		            		this.refs.description.value = "";
		            	}}
		            >
		            	Create
		            </button>
		            <hr/>
		        </div>
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users,
        id: state.currId
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({createUser: createUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(CreateUser);
