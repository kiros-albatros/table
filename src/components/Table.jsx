import React from "react";
import { useState, useEffect } from "react";
import Stores from "./Stores.jsx";
import styled from "styled-components";

const StyledTable = styled.div`
	text-align: center;
	margin: 0 auto;
	max-width: 80%;
	box-sizing: border-box;
`;

const Table = () => {
	const [stores, setStores] = useState([]);

	useEffect(() => {
		const getStores = async () => {
			const storesFromServer = await fetchStores();
			setStores(storesFromServer);
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
		setStores(stores.filter((store) => store.id !== id));
	};
	return (
		<StyledTable>
			<h1>Таблица магазинов</h1>
			<Stores stores={stores} onDelete={deleteItem} />
		</StyledTable>
	);
};

export default Table;
