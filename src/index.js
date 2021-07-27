import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const defaultState = {
	stores: [],
	editable: false,
	storeDetail: {},
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_STORES":
			return {
				...state,
				stores: action.payload,
			};

		case "DELETE_STORE":
			return {
				...state,
				stores: action.payload,
			};
		case "DETAIL_STORE":
			return {
				...state,
				storeDetail: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
