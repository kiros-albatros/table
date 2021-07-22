import React, { useState } from "react";
import edit from "../assets/edit.png";
import save from "../assets/save.png";
import detail from "../assets/detail.png";
import deleteIcon from "../assets/delete.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledRow = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0;
	padding: 10px 20px;
	border-bottom: none;
	box-sizing: border-box;
	margin: 0 auto;
`;

const StyledInput = styled.input`
	width: 80%;
`;

const StyledButtonsDiv = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	background-color: #fff;
	border: 1px solid black;
	cursor: pointer;
	border-radius: 5px;
	&:hover {
		background-color: rgb(230, 221, 221);
	}
`;

const Store = ({ store, onDelete }) => {
	const [editable, setEditable] = useState(false);

	function handleEditBtn() {
		if (!editable) {
			setEditable(true);
			return;
		} else {
			let randomError = Math.ceil(Math.random() * 10);
			if (randomError < 4) {
				alert("error");
				return;
			}
			setEditable(false);
		}
	}

	return (
		<StyledRow>
			<StyledInput
				readOnly={editable ? false : true}
				type='text'
				defaultValue={store.id + " " + store.name}
			/>
			<StyledButtonsDiv>
				<StyledButton onClick={() => handleEditBtn()}>
					<img width='30px' src={editable ? save : edit} alt='edit' />
				</StyledButton>
				<Link to={`/stores/${store.id}`}>
					<StyledButton>
						<img width='30px' src={detail} alt='detail' />
					</StyledButton>
				</Link>
				<StyledButton onClick={() => onDelete(store.id)}>
					<img width='30px' src={deleteIcon} alt='delete' />
				</StyledButton>
			</StyledButtonsDiv>
		</StyledRow>
	);
};

export default Store;
