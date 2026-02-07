import React, { useState } from 'react';

const TablaMultiplicar = () => {
    const [number, setNumber] = useState('');
    const [table, setTable] = useState([]);

    const generateTable = () => {
        const num = parseInt(number);
        if (isNaN(num)) return;

        const newTable = [];
        for (let i = 1; i <= 13; i++) {
            newTable.push({ multiplier: i, result: num * i });
        }
        setTable(newTable);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Tabla de Multiplicar</h2>

            <div className="flex space-x-2 mb-6">
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    placeholder="Ingrese un número"
                />
                <button
                    onClick={generateTable}
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                    Generar
                </button>
            </div>

            {table.length > 0 && (
                <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                    <ul className="space-y-2">
                        {table.map((row) => (
                            <li key={row.multiplier} className="flex justify-between border-b last:border-0 pb-1 last:pb-0 border-gray-200">
                                <span className="text-gray-600">{number} x {row.multiplier}</span>
                                <span className="font-bold text-gray-800">= {row.result}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TablaMultiplicar;
