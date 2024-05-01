import React, { useState } from "react";
import CounterModal from "./CounterModal";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [counterObj, setCounterObj] = useState({
        intervalRef: null,
        timerRunning: false,
    });
    const startCounter = () => {
        const intervalRef = setInterval(() => {
            setCount((prevCounter) => prevCounter + 1);
        }, 1000);
        setCounterObj({ intervalRef, timerRunning: true });
    };
    const stopCounter = () => {
        clearInterval(counterObj.intervalRef);
        setCounterObj({ intervalRef: null, timerRunning: false });
    };

    return (
        <div className=" text-center ">
            <button
                className=" btn btn-outline-success btn-lg btn-light m-5"
                onClick={() => setOpenModal(!openModal)}>
                Open Counter
            </button>
            <CounterModal
                count={count}
                openModal={openModal}
                setOpenModal={setOpenModal}
                counterObj={counterObj}
                stopCounter={stopCounter}
                startCounter={startCounter}
            />
        </div>
    );
};

export default CounterApp;