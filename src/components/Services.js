import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: "lorem ipsum dolor sit umet consectetur adipiscing elit"
            },
            {
                icon: <FaHiking />,
                title: "Hiking",
                info: "lorem ipsum dolor sit umet consectetur adipiscing elit"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free ride",
                info: "lorem ipsum dolor sit umet consectetur adipiscing elit"
            },
            {
                icon: <FaBeer />,
                title: "Free drinks",
                info: "lorem ipsum dolor sit umet consectetur adipiscing elit"
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title="Services"/>
                <div className='services-center'>
                    {this.state.services.map((el, index) => {
                        return <article key={index} className='service'>
                            <span>{el.icon}</span>
                            <h6>{el.title}</h6>
                            <p>{el.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )        
    }
}

export default Services;