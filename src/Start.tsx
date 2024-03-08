import {Button} from '@mui/material'
import { useQuestionsStore } from './store/questions'

const LIMIT_QUESTIONS = 10

export const Start = () => {
    const fetchQuestion = useQuestionsStore(state => state.fetchQuestion)

    const handleClick = () => {
        fetchQuestion(LIMIT_QUESTIONS)
    }
    return (
        <div style={{ marginTop: '16px'}}>
        <Button onClick={handleClick} variant='contained' sx={{m:2}}>
            Empezar
        </Button>
        </div>
    )
}