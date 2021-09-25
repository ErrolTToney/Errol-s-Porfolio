import React from 'react'

//Assests
import classes from './HomeScreen.module.css'
import owlQuote from '../../assets/owlQuote.jpg'
import aliRooster from '../../assets/aliRooster.jpg'

const HomeScreen = () => {
    return (
        <div className={classes.screen_container}>
            <div className={classes.slide}>
                <div className={classes.greySquare}>
                    <h1 className={classes.title}>Errol Toney</h1>
                    <h1 className={classes.title}>Software Developer</h1>
                </div>
                <img className={classes.slide_image} src={owlQuote} alt='owlQuote'/>
            </div>
            
        </div>
    )
}

export default HomeScreen
