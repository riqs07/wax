import React,{Fragment} from 'react'
import styled from "styled-components";
import { Row50 } from "../layout/Grids";
import Review from "../albums/albumReview";
import Form from "../albums/albumAddForm"
import AlbumScoreCard from "../albums/albumScoreCard"

 const About = () => {
    return (
        <Fragment>

        <Review/>
				<AlbumScoreCard/>
                <Form/>
        </Fragment>
    )
}

export default About