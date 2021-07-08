import { useLocation } from 'react-router-dom';

const ResultPage = () => {
    const location = useLocation()
    const resultData = location.state
    console.log(resultData)
    return (
        <div>
            <h1>Helloooo</h1>
        </div>
    )
}

export default ResultPage
