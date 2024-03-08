
import {Button, Stack} from '@mui/material'
import {useQuestionData} from './hooks/useQuestionData'
import { useQuestionsStore } from './store/questions'
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export const Score = () => {
    const {correct, incorrect, unanswered} = useQuestionData ()
    const reset = useQuestionsStore(state =>state.reset)

    return (
        <Stack alignContent='flex' justifyContent='center'>
            <div>
        <Button onClick={() => reset()} variant='outlined' color="error" 
       sx={{m:2}} 
        startIcon={<RestartAltIcon />}>Reiniciar</Button>
            </div>
         {correct} correctas ✔ {incorrect} erróneo ✘ {unanswered} pendientes
            
        
        </Stack>
    )
}