/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function (state = false, action) {

    if(action.type === "EDIT_USER") {
    	return true;
    } else if (action.type === "SAVE_USER") {
    	return false;
    }
    return state;
}
