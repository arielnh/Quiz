import {Start} from './Start'
import './App.css'
import {Typography, Stack} from '@mui/material'
import { JavaScriptLogo } from './JavaScriptLogo'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'


function App() {
  const question = useQuestionsStore(state => state.question)
  
  return (
   <main>
      
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>

      <JavaScriptLogo/>
      <Typography variant='h4' component='h1'>
          JavaScript Quiz
      </Typography>
      </Stack>
    
 
          {question.length == 0 && <Start/>}
          {question.length > 0 && <Game/>}
      


      
   </main>
  )
}

export default App
