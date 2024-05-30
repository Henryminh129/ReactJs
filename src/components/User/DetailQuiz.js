import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash';

const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id

    useEffect(() => {
        fetchQuestions()
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId)
        console.log(res)
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw)
                .groupBy('id')
                .map((value, key) => {
                    let answers = []
                    value.forEach((item) => {
                        answers.push(item.answers)
                    })
                    return { questionId: key, answers }
                })
                .value()
        }
    }

    return (
        <div className="detail-quiz-container">
            egg
        </div>
    )
}

export default DetailQuiz