import { useState } from "react";

export default function Home() {
    
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [timerId, setTimerId] = useState(null);
    
    const handleStart = () => {
        if (!isRunning) {
            const now = Date.now();
            setIsRunning(true);
            const id = setInterval(
                () => {

                setTime(
                    Date.now() - (now - time)
                );
                },
             10);
            setTimerId(id);
        }
    };

    const handleStop = () => {
        if (isRunning && timerId) {
            setIsRunning(false);
            clearInterval(timerId);
        }
    };

    const handleReset = () => {
        setTime(0);

    };

    const formatTime = (milliseconds) => {
        const ms = Math.floor(milliseconds % 1000 / 10).toString().padStart(2, '0');
        const seconds = Math.floor((milliseconds / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((milliseconds / (1000 * 60)) % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}.${ms}`;
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="text-4xl font-bold">{formatTime(time)}</h1>
            <div className="flex gap-4">
                <button
                    onClick={handleStart}
                    disabled={isRunning}
                    className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                >
                    شروع
                </button>
                <button
                    onClick={handleStop}
                    disabled={!isRunning}
                    className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                >
                    توقف
                </button>

                <button
                    onClick={handleReset}
                    disabled={time === 0 && !isRunning}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    ریست
                </button>
            </div>



        </div>
    );
}
