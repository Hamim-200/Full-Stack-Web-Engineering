import { useState } from "react"

export default function Counter() {


    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
    }

    return(
        <div>
            <h3>Counter</h3>
            <p>Current Value: {count} </p>
            <button className="btn" onClick={handleIncrease}>Increase</button>
        </div>
    )
}
