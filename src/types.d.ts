export interface Question{
    id: number
    question: string
    code: string
    answers: string []
    correctAnswer: number
    details : string
    userSelectedAnswer?: number
    isCorrectUserAnswer?: boolean
}