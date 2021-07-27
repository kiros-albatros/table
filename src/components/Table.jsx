import React from "react";
import { useEffect } from "react";
import Stores from "./Stores.jsx";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StyledTable = styled.div`
	text-align: center;
	margin: 0 auto;
	max-width: 80%;
	box-sizing: border-box;
`;

const Table = () => {
	//const [stores, setStores] = useState([]);
	const dispatch = useDispatch();
	const stores = useSelector((state) => state.stores);

	useEffect(() => {
		const getStores = async () => {
			const storesFromServer = await fetchStores();
			dispatch({ type: "GET_STORES", payload: storesFromServer });
			//	setStores(storesFromServer);
		};
		getStores();
	}, []);

	// Запрос к серверу
	const fetchStores = async () => {
		const res = await fetch("http://localhost:5000/stores?");
		const data = await res.json();
		return data;
	};

	// Удалить запись
	const deleteItem = async (id) => {
		await fetch(`http://localhost:5000/stores/${id}`, {
			method: "DELETE",
		});
		const filteredStores = stores.filter((store) => store.id !== id);
		dispatch({ type: "DELETE_STORE", payload: filteredStores });
	};
	return (
		<StyledTable>
			<h1>Таблица магазинов</h1>
			<Stores stores={stores} onDelete={deleteItem} />
		</StyledTable>
	);
};

export default Table;
