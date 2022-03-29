import React from 'react'

import CompletedPage from './CompletedPage'
import { useEffect } from 'react'
import Quiz from './Quiz'

const QuizPage = (props) => {

    

  return (
    <div className='quiz-container'>
        {props.isGameFinished ? <CompletedPage points={props.points} wrongQuestions={props.wrongQuestions} setPoints={props.setPoints}/> : <Quiz isGameFinished={props.isGameFinished} setIsGameFinished={props.setIsGameFinished} points={props.points} setPoints={props.setPoints} wrongQuestions={props.wrongQuestions} setWrongQuestions={props.setWrongQuestions}/>}
        
    </div>
  )
}

export default QuizPage