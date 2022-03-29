import React from 'react'
import { useEffect, useState } from 'react'
import { questions } from './Questions'

let counter = 0
let quizOrder = []
const questionNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]


const Quiz = (props) => {

    

    const [isLoading, setIsLoading] = useState(true)
    const [triggerChange, setTriggerChange] = useState(false)
    const [testCompleted, setTestCompleted] = useState(false)
    const [currentChoice, setCurrentChoice] = useState('')


    var choiceA = document.getElementById('choiceA')
    var choiceB = document.getElementById('choiceB')
    var choiceC = document.getElementById('choiceC')
    var choiceD = document.getElementById('choiceD')

    function shuffleArray() {
        for (var i = questionNumbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = questionNumbers[i];
            questionNumbers[i] = questionNumbers[j];
            questionNumbers[j] = temp;
        }

        for (let i = 0; i < 30; i++){
            quizOrder.push(questionNumbers[i])
        }

        
    }



    useEffect(() => {
        

        shuffleArray();
        setIsLoading(false)
        
    },[])

    const handleQuestionChange = () => {
        
        if (currentChoice === questions[quizOrder[counter]].correctChoice) {
            
            props.setPoints(prevActiveStep => prevActiveStep + 1)
            setCurrentChoice('')
        } else if (currentChoice !== questions[quizOrder[counter]].correctChoice) {
            props.setWrongQuestions([...props.wrongQuestions, questions[quizOrder[counter]].question])
            setCurrentChoice('')
            
        } else {
            setCurrentChoice('')
        }

        if (currentChoice != '' && counter != 30) {
            
                counter += 1
                
                setTriggerChange(!triggerChange)
            
            
            
        }
        

        if (counter == 29) {
            setTestCompleted(true)
        }

        


    }

    const letsConvert = () => {
        if (currentChoice == 'choiceA') {
            return questions[quizOrder[counter]].choiceA + ' Frames'
        } else if (currentChoice == 'choiceB') {
            return questions[quizOrder[counter]].choiceB + ' Frames'
        } else if (currentChoice == 'choiceC') {
            return questions[quizOrder[counter]].choiceC + ' Frames'
        } else if (currentChoice == 'choiceD') {
            return questions[quizOrder[counter]].choiceD + ' Frames'
        } else {
            return 'Nothing Selected!'
        }
    }



  return (
    <div className='quiz-question-container'>

<div className='big-header'>
          <a href='https://mykeb96.github.io/mykael-barnes'>Developed By</a>
          <a href='https://mykeb96.github.io/mykael-barnes/'>Myke B</a>
        </div>
        <h5 className='currently-selected '>{counter + 1}/30</h5>

        <h2 className='question-title'>{isLoading || props.isGameFinished ? 'loading question...' : questions[quizOrder[counter]].question}</h2>
        <p id='choiceA' className='question-button' onClick={() => setCurrentChoice(choiceA.id)} style={currentChoice == 'choiceA' ? {background: 'linear-gradient(-225deg, #e66465 0%, #9198e5 100%)', color: 'white', mixBlendMode: 'hard-light'} : {background: 'transparent'}}>{isLoading || props.isGameFinished ? 'loading choice...' : questions[quizOrder[counter]].choiceA}</p>
        <p id='choiceB' className='question-button' onClick={() => setCurrentChoice(choiceB.id)} style={currentChoice == 'choiceB' ? {background: 'linear-gradient(-225deg, #e66465 0%, #9198e5 100%)', color: 'white', mixBlendMode: 'hard-light'} : {background: 'transparent'}}>{isLoading || props.isGameFinished ? 'loading choice...' : questions[quizOrder[counter]].choiceB}</p>
        <p id='choiceC' className='question-button' onClick={() => setCurrentChoice(choiceC.id)} style={currentChoice == 'choiceC' ? {background: 'linear-gradient(-225deg, #e66465 0%, #9198e5 100%)', color: 'white', mixBlendMode: 'hard-light'} : {background: 'transparent'}}>{isLoading || props.isGameFinished ? 'loading choice...' : questions[quizOrder[counter]].choiceC}</p>
        <p id='choiceD' className='question-button' onClick={() => setCurrentChoice(choiceD.id)} style={currentChoice == 'choiceD' ? {background: 'linear-gradient(-225deg, #e66465 0%, #9198e5 100%)', color: 'white', mixBlendMode: 'hard-light'} : {background: 'transparent'}}>{isLoading || props.isGameFinished ? 'loading choice...' : questions[quizOrder[counter]].choiceD}</p>

        {testCompleted ? <p className='bottom-button' onClick={() => {
            handleQuestionChange()

            if (currentChoice != '') {
                props.setIsGameFinished(true)
                setIsLoading(true)
                
                
                
            }
            

            

        }}>Finish Quiz</p> : <p className='bottom-button' onClick={handleQuestionChange}>Next Question</p>}

        
        

    </div>
  )
}

export default Quiz