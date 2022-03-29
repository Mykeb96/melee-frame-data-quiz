import React from 'react'
import { BsFillPlayBtnFill } from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className='homepage-container'>

        <div className='big-header'>
          <a href='https://mykeb96.github.io/mykael-barnes'>Developed By</a>
          <a href='https://mykeb96.github.io/mykael-barnes/'>Myke B</a>
        </div>

        <h1 className='homepage-title'>Official Melee Frame Data Quiz</h1>
        <div className='tooltip'> <a href='/quiz' className='homepage-button'><BsFillPlayBtnFill /></a>
        <span className='tooltiptext'>^</span>
          <span className='tooltiptext'>What frame does the move come out on?</span>
          </div>
          
    </div>
    
  )
}

export default HomePage
