import {create} from 'zustand'
import {type Question } from '../types'
import {persist} from 'zustand/middleware'

interface State {
    question: Question[],
    currentQuestion: number,
    fetchQuestion: (limit: number) => Promise<void>
    selectAnswer:(questionId: number, answerIndex: number)=> void
    goNextQuestion : () => void
    goPreviousQuestion: () => void
    reset : () => void
}

const API_URL = import.meta.env.PROD ? 'https://grand-lebkuchen-080005.netlify.app/' : 'http://localhost:5173/'

export const useQuestionsStore = create<State>()(persist((set, get) => {
    return {
       
        question: [],
        currentQuestion: 0,
        
        fetchQuestion: async (limit : number) => {
           const res = await fetch (`${API_URL}/data.json`)
           const json = await res.json()
           
           const question = json.sort(() => Math.random() - 0.5).slice (0,limit)
            set({question})
        },

        selectAnswer: (questionId: number, answerIndex: number)=> {
            const {question} = get()
            const newQuestions = structuredClone(question)

            const questionIndex= newQuestions.findIndex(q=> q.id == questionId)
            const questionInfo = newQuestions[questionIndex]
            const isCorrectUserAnswer = questionInfo.correctAnswer == answerIndex
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectedAnswer : answerIndex
            }

            set({question: newQuestions})

        },

        goNextQuestion: () => {
            const {currentQuestion, question} = get()
            const nextQuestion = currentQuestion +1

            if (nextQuestion < question.length){
                set({currentQuestion: nextQuestion})
            }
        },

        goPreviousQuestion: () => {
            const {currentQuestion} = get()
            const previousQuestion = currentQuestion -1

            if (previousQuestion >=0){
                set({ currentQuestion: previousQuestion})
            }
        },

        reset: () =>{
            set({currentQuestion:0, question: [] })
        }
    }

}, {
name : 'questions'
}))