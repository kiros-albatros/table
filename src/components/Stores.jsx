import React from "react";

import Store from "./Store.jsx";

const Stores = ({ stores, onDelete }) => {
	return (
		<>
			{stores.map((store) => (
				<Store key={store.id} store={store} onDelete={onDelete} />
			))}
		</>
	);
};

export default Stores;
