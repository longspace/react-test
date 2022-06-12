const initalState = {
	authBtnNodes: [],
}
export default function reducer(state = initalState, action) {
	const { type, payload } = action;
	switch (type) {
		case "login":
			return payload.user_name;
		case "setAuthBtnNode":
			state.authBtnNodes = payload.authBtnNodes;
			return state;
		default:
			return state;
	}

}
