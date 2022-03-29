import './App.css';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { useState } from 'react'



function App() {
  const [points, setPoints] = useState(0)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [wrongQuestions, setWrongQuestions] = useState([])

  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/quiz' element={<QuizPage points={points} setPoints={setPoints} isGameFinished={isGameFinished} setIsGameFinished={setIsGameFinished} wrongQuestions={wrongQuestions} setWrongQuestions={setWrongQuestions}/>} />
          
          
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;
