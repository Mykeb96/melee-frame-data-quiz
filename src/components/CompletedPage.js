import React from 'react'
import { VscDebugRestart } from 'react-icons/vsc'
import { AiFillQuestionCircle } from 'react-icons/ai'
import MicroModal from 'react-micro-modal';
import questions from './Questions'

const CompletedPage = (props) => {
  
  

  return (
    <div className='completed-container'>
      <div className='big-header'>
          <a href='https://mykeb96.github.io/mykael-barnes'>Developed By</a>
          <a href='https://mykeb96.github.io/mykael-barnes/'>Myke B</a>
        </div>
        <h1>You've Completed the Test!</h1>
        <h2>You Guessed {props.points} Questions <br /> of the 30 Correctly!</h2>

        <a className='restart-button' onClick={() => {
          props.setPoints(0)
          
        }} href='/'><VscDebugRestart /></a>

        <div className='tooltip2'><MicroModal overrides={{
      Dialog: {
        style: {
          background: 'linear-gradient(#e66465, #9198e5)',
          maxWidth: '100%',
          maxHeight: '70%',
          borderRadius: '8px',
          border: '2px solid #e66465',
        },
      },
    }} trigger={(open) => <div onClick={open}><AiFillQuestionCircle /></div>}>{(close) => <div className='modal-container'>{questions.questions.map((element, index) => <p className='list-of-questions' style={props.wrongQuestions.includes(element.question) ? {color: 'red', background: 'rgba(255, 255, 255, 0.151)', padding: '5px', borderRadius: '8px', fontSize: '20px'} : {color: 'lime', background: 'rgba(255, 255, 255, 0.151)', padding: '5px', borderRadius: '8px', fontSize: '20px'}}>{questions.questions[index].question}</p>)} <p className='x-button' style={{cursor: 'pointer', fontSize: '45px', fontWeight: 'bold'}} onClick={close}>X</p></div>}</MicroModal>
          <span className='tooltiptext'>^</span>
          <span className='tooltiptext' id='test'>*Wrong Questions*</span>


        </div>
    </div>
  )
}

export default CompletedPage