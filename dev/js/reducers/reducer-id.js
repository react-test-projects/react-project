/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function (state = 0, action) {

    if(action.type === "CREATE_USER") {
    	console.log("increment");
    	let newId = state;
    	newId++;
    	console.log(newId);
    	return newId;
    }
    return state;
}
