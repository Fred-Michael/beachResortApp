import React from 'react'

function Jumbotron({ children, hero }) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Jumbotron.defaultProps = {
    hero: 'defaultHero'
}

export default Jumbotron;