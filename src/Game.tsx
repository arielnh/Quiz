import { type Question as QuestionType } from './types'
import { useQuestionsStore } from './store/questions'
import { Score } from './Score'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {solarizedLight} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Paper, Box, Card, CardContent,Button, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'



const getBackgroundColor=(info: QuestionType, index: number)=> {
  const {userSelectedAnswer, correctAnswer} = info

  if(userSelectedAnswer == null) return 'transparent'
  if(index!==correctAnswer && index !== userSelectedAnswer) return 'transparent'
  if(index == correctAnswer) return '#04aa6d'
  if(index == userSelectedAnswer) return '#f44336'
  
  return 'transparent'

}

const Question = ({info}: {info:QuestionType}) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)

    const createHandleClick = (answerIndex:number)=> () => {
        selectAnswer(info.id, answerIndex)
    }

    
  
return (


  
<Card elevation={8}  sx={{p: 2, textAlign: 'left', marginTop: 4, maxWidth: '100%'}} >
    
    <CardContent>
      <Typography variant='subtitle1'>
        {info.question}
      </Typography>
    </CardContent>
   
      <SyntaxHighlighter  language='javascript' style={solarizedLight} wrapLines>
        {info.code}
      </SyntaxHighlighter>
    
      <List disablePadding>

            {info.answers.map((answer, index) => (
              <ListItem key={index} disablePadding divider > 

                <ListItemButton 
                  disabled={info.userSelectedAnswer != null}
                  onClick={createHandleClick(index)}
                  style={{
                    backgroundColor: getBackgroundColor(info, index),
                  }
                  
                }
                  >
                  
                  <Typography variant="body2" color="text.secondary">
                    {answer}
                  </Typography>
                </ListItemButton>

              </ListItem>
            ))}

          </List>

  </Card>

  
)}

export const Game =() =>{
    const question = useQuestionsStore (state => state.question)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state=> state.goNextQuestion)
    const goPreviousQuestion= useQuestionsStore(state => state.goPreviousQuestion)

    const questionInfo = question[currentQuestion]

    return(
       <>
          <Score/>
          <Stack direction='row' gap={2} alignItems='center' justifyContent='center' sx={{m:2}} >
            <Button size="small" onClick={goPreviousQuestion} disabled = {currentQuestion==0} variant="contained" >
                Anterior
            </Button>
            <Typography variant='body1'>
              {currentQuestion +1}/{question.length}
            </Typography>
            <Button size="small" onClick={goNextQuestion} disabled = {currentQuestion>=question.length-1} variant="contained">
               Siguiente
            </Button>
          </Stack>
          

            <Question info={questionInfo}  />
          
       </>
    )
}



