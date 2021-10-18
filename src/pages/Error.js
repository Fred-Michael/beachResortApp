import React from 'react'
import Jumbotron from '../components/Jumbotron';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <Jumbotron>
            <Banner title="404" subtitle="Page not found">
                <Link to="/" className='btn-primary'>
                    Home Page
                </Link>
            </Banner>
        </Jumbotron>
    )
}

export default Error;