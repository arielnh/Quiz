import {Start} from './Start'
import './App.css'
import {Typography} from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'


function App() {
  const question = useQuestionsStore(state => state.question)
  
  return (
   <main>
    <div>

      <JavaScriptLogo/>
      <Typography variant='h4' component='h1'>
          JavaScript Quiz
      </Typography>
    
 
          {question.length == 0 && <Start/>}
          {question.length > 0 && <Game/>}
    </div>
      
   </main>
  )
}

export default App
