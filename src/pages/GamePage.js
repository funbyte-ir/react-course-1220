
import React, { useState } from "react";

function GamePage() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = (index) => {
        // اگر خانه‌ای قبلاً پر شده یا بازی تمام شده باشه، کاری نکن
        if (board[index]) return;
        if (winner) return;

        // نسخه جدید صفحه بازی رو بساز
        // let updatedBoard = board.slice();
        // const updatedBoard = Array.from(board);
        const updatedBoard = [...board];
        if (isXTurn) {
            updatedBoard[index] = "X";
        } else {
            updatedBoard[index] = "O";
        }

        // ذخیره کن و نوبت رو تغییر بده
        setBoard(updatedBoard);
        setIsXTurn(!isXTurn);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans p-4">
            <h1 className="text-3xl font-bold mb-6 text-indigo-700">بازی XO</h1>

            <div className="grid grid-cols-3 gap-4 mb-6">
                {board.map((value, index) => (
                    <button
                        key={index}
                        className="w-24 h-24 bg-white border-2 border-indigo-500 rounded-md text-3xl font-bold text-gray-700 hover:bg-indigo-100 transition-colors duration-200"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>

            <div className="text-xl mb-4">
                {winner ? (
                    <span className="text-green-600 font-semibold">بازیکن {winner} برد!</span>
                ) : (
                    <span>نوبت: {isXTurn ? "X" : "O"}</span>
                )}
            </div>

            <button
                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
                onClick={resetGame}
            >
                شروع دوباره
            </button>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

export default GamePage;