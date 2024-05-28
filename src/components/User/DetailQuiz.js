import { useEffect } from "react"
import { useParams } from "react-router-dom"

const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id

    useEffect(() => {

    }, [quizId])

    return (
        <div className="detail-quiz-container">
            egg
        </div>
    )
}

export default DetailQuiz