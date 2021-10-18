import React from 'react'
import Jumbotron from '../components/Jumbotron';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
import { Link } from 'react-router-dom'

function Rooms() {
    return (
        <>
            <Jumbotron hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className='btn-primary'>
                        Home Page
                    </Link>
                </Banner>
            </Jumbotron>
            <RoomsContainer />
        </>
    )
}

export default Rooms;