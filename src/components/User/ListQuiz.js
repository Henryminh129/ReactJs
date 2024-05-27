import { useEffect, useState } from "react";
import { getQuizByUser } from '../../services/apiService'



const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([])
    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser()
        console.log(res)
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title"> Card title</h5>
                    <p className="card-text">Some quick example text to build</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default ListQuiz;