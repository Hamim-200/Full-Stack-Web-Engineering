import { useState } from "react"


export default function Batter() {

    const [score, setScore] = useState(0)

    const handleAddThree = () =>{
        setScore(score + 3)
    }
    

    return (
        <div>
            <h3>Batter : Mashrafi</h3>
            <p>Score: {score}</p>
            <button className="btn" onClick={() => setScore(score + 1)}>1</button>
            <button className="btn" onClick={() => setScore(score + 2)}>2</button>
            <button className="btn" onClick={handleAddThree}>3</button>
            <button className="btn" onClick={() => setScore(score + 4)}>4</button>
            <button className="btn" onClick={() => setScore(score + 6)}>6</button>
        </div>
    )
}
