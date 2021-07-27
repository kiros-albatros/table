import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const StyledDetail = styled.div`
	width: 80%;
	margin: 20px auto;
`;

const StyledTitle = styled.h1`
	text-align: center;
`;

const StoreDetail = () => {
	let { id } = useParams();
	//const [storeDetail, setStoreDetail] = useState({});
	const dispatch = useDispatch();
	const storeDetail = useSelector((state) => state.storeDetail);
	useEffect(() => {
		const getStore = async () => {
			const storeFromServer = await fetchStore();
			dispatch({ type: "DETAIL_STORE", payload: storeFromServer });
			//setStoreDetail(storeFromServer);
			console.log(storeFromServer);
		};
		getStore();
	}, []);

	// Запрос к серверу
	const fetchStore = async () => {
		const res = await fetch(`http://localhost:5000/stores/${id}`);
		const data = await res.json();
		return data;
	};

	let address = "";

	for (let key in storeDetail) {
		if (storeDetail.hasOwnProperty(key)) {
			console.log(`${key} : ${storeDetail[key]}`);
			if (key === "address") {
				address = storeDetail["address"];
			}
		}
	}

	return (
		<StyledDetail>
			<StyledTitle>Страница детального просмотра магазина</StyledTitle>
			<div>
				<p>id: {storeDetail.id}</p>
				<p>Название: {storeDetail.name}</p>
				<p>Адрес: {address["address"]}</p>
			</div>
		</StyledDetail>
	);
};

export default StoreDetail;
