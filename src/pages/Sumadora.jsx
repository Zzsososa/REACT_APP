import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const Sumadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleSum = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult('Por favor ingrese números válidos');
        } else {
            setResult(n1 + n2);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sumadora</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Número 1</label>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        placeholder="0"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Número 2</label>
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        placeholder="0"
                    />
                </div>

                <button
                    onClick={handleSum}
                    className="w-full flex justify-center items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                    <Plus size={20} className="mr-2" />
                    Sumar
                </button>

                {result !== null && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
                        <span className="text-gray-600 font-medium">Resultado:</span>
                        <div className="text-3xl font-bold text-blue-600">{result}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sumadora;
