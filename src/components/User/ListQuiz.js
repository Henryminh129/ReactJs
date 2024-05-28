import { useEffect, useState } from "react";
import { getQuizByUser } from '../../services/apiService'
import './ListQuiz.scss'


const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([])
    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser()
        console.log(res)
        if (res && res.EC === 0) {
            setArrQuiz(res.DT)

        }
    }
    return (
        <div className="list-quiz-container">
            {arrQuiz && arrQuiz.length > 0 && arrQuiz.map((quiz, index) => {
                return (
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={`data:image/jpeg;base64,${quiz.image}`} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title"> Quiz {index + 1}</h5>
                            <p className="card-text">{quiz.description}</p>
                            <a href="#" className="btn btn-primary">Start now</a>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ListQuiz;