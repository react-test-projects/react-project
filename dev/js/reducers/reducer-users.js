/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
//import {request} from "request";

export default function (state = [], action) {

    if(action.type === "CREATE_USER") {
    	const users = state.slice();
    	users.push(action.payload);
    	return users;
    } else if(action.type === "SAVE_USER") {
    	const users = state.slice();
    	users[action.payload.id] = action.payload;
    	return users;
    } else if(action.type === "DELETE_USER"){
    	const users = state.slice();
    	users[action.payload.id] = null;
    	return users;
    } else {
    	return state;

    }
}
