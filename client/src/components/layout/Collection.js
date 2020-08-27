import React from "react";
import styled from "styled-components";
import { Colors, Shadows } from "./Palette";

const Card = styled.ul`
	padding: 1rem 0;
	box-shadow: ${Shadows.sm};
	border-radius: 2rem;
`;

const Child = styled.li`
	list-style: none;
	padding: 0 1rem;
	background: #fff;
	border-bottom: 1px solid grey;
	margin: 0 1.5rem;

	&:last-child {
		border-bottom: 0px;
	}
`;
const Header = styled.h2`
	color: ${Colors.primary};
	padding:1rem 0rem;
	font-size: 1.5rem;
`;
const Container = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 1.6fr;
	grid-template-rows: 1fr;
	gap: 1px 1px;
`;

const Image = styled.img`
	width:8rem;
	border-radius: 50%;
	padding: 1rem;
	transform: translateY(-2rem);
`;

const Collection = (props) => {
	return <Card>
		{props.children}
		</Card>;
};

const ReviewCollectionChild = ({ data }) => {
	const { imageURL, review, name } = data;

	return (
		<Child>
			{name && <Header>{name}</Header>}
			<Container>
			{imageURL && (
				<Image src={imageURL}/>
				)}

				<p style={{ fontSize: "1.5rem" }}>{review}</p>
			</Container>
		</Child>
	);
};

const RatingCollectionChild = ({ data }) => {
	const { imageURL, rating, name } = data;
/// ratigns can be smaller as i wanna have more than 3
	return (
		<Child>
			<Header>{name}</Header>
			<Container>
				{imageURL && (
				<Image src={imageURL}/>
				)}

				<p style={{ fontSize: "2.5rem"}}>{rating}</p>
			</Container>
		</Child>
	);
};

export { Collection, ReviewCollectionChild ,RatingCollectionChild};
