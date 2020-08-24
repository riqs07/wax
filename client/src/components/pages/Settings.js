import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contex/users/UserContext";
import { PasswordUpdate, UserNameUpdate } from "../users/UpdateForms";
import { PrimaryButton } from "../layout/Buttons";
import { Shadows } from "../layout/Palette";
import { Column50 } from "../layout/Grids";
import { birdSVG } from "../layout/svg";

const Card = styled.div`
	align-content: center;
	padding: 1rem;
	margin: 1rem;
	box-shadow: ${Shadows.md};
	background: #fff;
	border-radius: 2rem;
`;

const Settings = () => {
	const [passWordState, setPasswordState] = useState(false);
	const [userNameState, setUsernameState] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const userContext = useContext(UserContext);

	const { checkIfAdmin } = userContext;

	const managePass = () => {
		if (userNameState) {
			setUsernameState(false);
		}
		setPasswordState(!passWordState);
	};

	const manageUsername = () => {
		if (passWordState) {
			setPasswordState(false);
		}
		setUsernameState(!userNameState);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await checkIfAdmin();
			setIsAdmin(result.data);
		};

		fetchData();
	}, []);

	return (
		<Column50>
			<Card>
				<h1>
					User Settings <i class="fas fa-cog"></i>
				</h1>
				<PrimaryButton onClick={manageUsername}>
					{" "}
					Change User Name{" "}
				</PrimaryButton>
				<PrimaryButton onClick={managePass}> Change Password </PrimaryButton>

				<div style={{ display: "flex" }}>
					{userNameState && <UserNameUpdate />}
					{passWordState && <PasswordUpdate />}

					{isAdmin && <h1>Admin panel </h1>}
				</div>
			</Card>
			{birdSVG}
		</Column50>
	);
};

export default Settings;
