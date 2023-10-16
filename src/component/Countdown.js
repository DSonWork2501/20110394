import { useState, useEffect } from "react";
const Countdown = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) {
            props.onTimesup();
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [count]);

    return (
        <div>{count} seconds</div>
    )

}

export default Countdown;