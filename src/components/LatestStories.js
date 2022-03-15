import React, { Component } from 'react'
import Heading from './Heading'
import '../styles/latestStories.css'
import eastRedArrow from '../photos/east_red_24dp.svg'
import Story from './Story'

export default class LatestStories extends Component {
  render() {
    return (
      <>
        <div className='latestStories'>
            <Heading heading="Latest Stories"/>
                
            <div className='story-container'>
                <Story category="TECH " date="/ TODAY AT 11:45" main={"Russia pounds Ukraine as fourth round of talks are suspended for a day"} about={"Russian President Vladimir Putin's forces pummeled Kyiv and other cities across Ukraine on Monday as representatives from both countries met for a fourth round of talks since the invasion started nearly three weeks ago."}/>
                    <div className='verticleHR'> </div>
                <Story category="STYLE " date="/ AUGUST 27, 2022" main={"Former President Barack Obama says he has tested positive for Covid-19"} about={`"I just tested positive for COVID," Obama wrote on Twitter. "I’ve had a scratchy throat for a couple days, but am feeling fine otherwise. Michelle and I are grateful to be vaccinated and boosted, and she has tested negative.`}/>
                    <div className='verticleHR'> </div>
                <Story category="TECH " date="/ AUGUST 25, 2022"main={"Have survived Russia of 90s, want war to stop, say citizens of Russia and Ukraine staying in Goa"} about={`Denis and Victoria, citizens of Ukraine and Russia respectively are against the ongoing war. Both of them have been in Goa and expressed concern over their countries engaging in a full-scale war.`}/>
            </div>
            <div className='view-more'> 
                VIEW MORE <img src={eastRedArrow} alt='redArrow'/>
            </div>
        </div>
      </>
    )
  }
}