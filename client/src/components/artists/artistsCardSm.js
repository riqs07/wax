import React, { Fragment, useState } from "react";
import Backdrop from "../layout/Backdrop";
import { convertArtistScoreToGrade } from "../../utils/algo";
import Modal from "../artists/artistsModal";
import Spinner from "../layout/Spinner";
import styled from "styled-components";
import { Shadows } from "../layout/Palette";

const Card = styled.div`
	margin-top: -35px;
	box-shadow: ${Shadows.xl};
	background: #fff;
	border-radius: 12px;
	text-align: center;
	padding: 0 20px;
	padding-bottom: 40px;
`;
const StatContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-start;
`;

const Stats = styled.div`
	padding: 10px 35px;
	min-width: 150px;
	font-size: 1.25rem;
	color: #324e63;
`;
const Wrapper = styled.div`
	width: 100%;

	padding: 50px 20px;
	padding-top: 100px;
`;
const Info = styled.div`
	margin-top: -35px;
`;

const Image = styled.img`
	display: block;

	object-fit: cover;
	width: 150px;
	height: 150px;
	margin-left: auto;
	margin-right: auto;
	transform: translateY(-50%);
	border-radius: 50%;
	overflow: hidden;
	z-index: 4;
	box-shadow: ${Shadows.blue};
`;

const ArtistsCardSm = ({ artist }) => {
	const {
		artistID,
		name,
		imageURL,
		score,
		followers,
		fav_total,
		like_total,
	} = artist;

	let interactions = fav_total + like_total;
	const [modalState, setModal] = useState(false);
	const [loading, setLoading] = useState(true);

	const manageModal = () => {
		setModal(!modalState);
	};

	return (
		<>
			{loading && <Spinner />}
			<Wrapper>
				<Card>
					<Image
						alt="artist-image"
						src={imageURL}
						onClick={manageModal}
						onLoad={() => setLoading(false)}></Image>

					<Info>
						<h1>{name}</h1>

						<StatContainer>
							<Stats>
								{followers}
								<p style={{ marginTop: "7px" }}>
									<i className="fas fa-users fa-2x"></i>
								</p>
							</Stats>

							<Stats>
								{convertArtistScoreToGrade(score)}
								<p style={{ marginTop: "7px" }}>
									<i className="fas fa-flag-checkered fa-2x"></i>
								</p>
							</Stats>

							<Stats>
								{interactions}
								<p style={{ marginTop: "7px" }}>
									<i className="fa fa-heart fa-2x"></i>
								</p>
							</Stats>
						</StatContainer>
					</Info>
				</Card>
			</Wrapper>
			{modalState && (
				<>
					<Modal artist={artist} />
					<Backdrop manageModal={manageModal} />
				</>
			)}
		</>
	);
};

export default ArtistsCardSm;
