import React, { useContext, useState, useEffect } from "react";
import ArtistContext from "../../contex/artists/ArtistContext";
import styled from "styled-components";
import { Colors, Shadows } from "../layout/Palette";
import { PrimaryButton, DangerButton } from "../layout/Buttons";

const Modal = styled.div`
	width: 90%;
	background: white;
	box-shadow: ${Shadows.lg};
	position: fixed;
	top: 6vh;
	left: 5%;
	z-index: 10;
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

const ArtistsModal = () => {
	const artist = {
		name: "Kane West",
		artistID: 1,
		favs: 10,
		likes: 20,
		grade: "a",
		imageURL:
			"https://waxhades123.s3.us-east-2.amazonaws.com/artists/kanye_west.jpg",
		followers: 10,
	};

	const { name, artistID, favs, likes, imageURL, grade, followers } = artist;

	const context = useContext(ArtistContext);
	const { followArtists, getArtistAlbums } = context;

	const [albums, setAlbums] = useState([]);
	// const [isFollowing,setFollowing] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const res = await getArtistAlbums({ artistID });

			// check to see if user has followed
			// const result2 = await checkIfFollowing({ artistID });

			setAlbums(res.data);
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
					{likes && (
						<Stats>
							<I style={{ color: "red" }} className="fa fa-heart fa-2x"></I>
							{likes}
						</Stats>
					)}
					{favs && (
						<Stats>
							<I style={{ color: "orange" }} className="fa fa-star fa-2x"></I>
							{favs}
						</Stats>
					)}
					{grade && (
						<Stats>
							<I
								style={{ color: "black" }}
								className="fa fa-flag-checkered fa-2x"></I>
							{grade}
						</Stats>
					)}
					{followers && (
						<Stats>
							<I style={{ color: "black" }} className="fas fa-users fa-2x"></I>
							{grade}
						</Stats>
					)}
				</ul>
			</Grid>
			<PrimaryButton onClick={handleFollow}>Follow {name}</PrimaryButton>
			<PrimaryButton onClick={handleFollow}>Show Albums {name}</PrimaryButton>

			{/* {albums !== null &&  (
			
					{albums.map((album) => (
						<img src = {album.imageURL}></img>
					))}
				
			)} */}
		</Modal>
	);
};

export default ArtistsModal;
