import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../components/Jumbotron'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import CustomJumbotron from '../components/StyledJumbotron'

function Home() {
    return (
        <>
            <Jumbotron>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className='btn-primary'>
                        Our rooms
                    </Link>
                </Banner>
            </Jumbotron>
            <Services />
            <FeaturedRooms />
            <CustomJumbotron />
        </>
    )
}

export default Home;