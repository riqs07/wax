import React, { useContext, useState, useEffect } from "react";
import ArtistContext from "../../contex/artists/ArtistContext";
import styled from "styled-components";
import { Colors, Shadows } from "../layout/Palette";
import { PrimaryButton, DangerButton } from "../layout/Buttons";
import {Collection,RatingCollectionChild} from "../layout/Collection"
import {convertArtistScoreToGrade} from "../../utils/algo"

const Modal = styled.div`
	width: 90%;
	background: white;
	box-shadow: ${Shadows.lg};
	position: fixed;
	top: 6vh;
	left: 5%;
	z-index: 16;
	padding: 1rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 0.8fr 1.4fr;
	grid-template-rows: 1fr;
`;

const Stats = styled.li`
	align-items: center;
	justify-content: center;
	font-size: 2.5rem;
`;

const I = styled.i`
	padding: 0.5rem;
`;

const Image = styled.img`
	border-radius: 50%;
	width: 20rem;
	padding: 1rem;
`;

const Title = styled.h1`
	font-size: 2.5rem;
	margin: 1rem;
`;

const ArtistsModal = ({artist}) => {

	const { name, artistID, fav_total, like_total, imageURL, score, followers } = artist;

	const context = useContext(ArtistContext);
	const { followArtists, getArtistAlbums } = context;

	const [artistAlbums, setAlbums] = useState();
	// const [isFollowing,setFollowing] = useState()

	useEffect(() => {
		const fetchData = async () => {
			let res = await getArtistAlbums({ artistID });
			res = res.data

			console.log(res)

			res.map((album)=>{
				album.rating = Math.floor(album.avg)
			})

			// check to see if user has followed
			// const result2 = await checkIfFollowing({ artistID });

				
			setAlbums(res);
		};

		fetchData();
	}, []);

	const handleFollow = () => {
		followArtists({ artistID });
	};
	return (
		<Modal>
			<Grid>
				<Image src={imageURL}></Image>

				<ul style={{ marginLeft: "1rem" }}>
					
					{artistAlbums && (
					<Collection>
					<Title>Average Ratings 🏴</Title>
					{artistAlbums.map((album) => (
						<RatingCollectionChild data={album} key={album.id} />
					))}
				</Collection>
					)}

{like_total && (
						<Stats>
							<I style={{ color: "red" }} className="fa fa-heart fa-2x"></I>
							{like_total}
						</Stats>
					)}
					{fav_total && (
						<Stats>
							<I style={{ color: "orange" }} className="fa fa-star fa-2x"></I>
							{fav_total}
						</Stats>
					)}
					{score && (
						<Stats>
							<I
								style={{ color: "black" }}
								className="fa fa-flag-checkered fa-2x"></I>
							{convertArtistScoreToGrade(score)}
						</Stats>
					)}
					{followers && (
						<Stats>
							<I style={{ color: "black" }} className="fas fa-users fa-2x"></I>
							{followers}
						</Stats>
					)}


				</ul>
			</Grid>
			<PrimaryButton onClick={handleFollow}>Follow {name}</PrimaryButton>

		
		</Modal>
	);
};

export default ArtistsModal;
