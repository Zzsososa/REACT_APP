import React, { useState } from 'react';

const Traductor = () => {
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');

    const numberToWords = (n) => {
        const num = parseInt(n);
        if (isNaN(num)) return 'Por favor ingrese un número válido';
        if (num < 1 || num > 1000) return 'El número debe estar entre 1 y 1000';

        if (num === 1000) return 'mil';

        const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
        const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

        let words = '';

        // Centenas
        if (Math.floor(num / 100) > 0) {
            if (num === 100) return 'cien';
            words += centenas[Math.floor(num / 100)] + ' ';
        }

        const resto = num % 100;

        // Decenas y Unidades
        if (resto > 0) {
            if (resto < 10) {
                words += unidades[resto];
            } else if (resto >= 10 && resto < 20) {
                words += especiales[resto - 10];
            } else {
                // 20-99
                const tenIndex = Math.floor(resto / 10);
                const unitIndex = resto % 10;

                if (tenIndex === 2) {
                    if (unitIndex === 0) words += 'veinte';
                    else words += 'veinti' + unidades[unitIndex];
                } else {
                    words += decenas[tenIndex];
                    if (unitIndex > 0) {
                        words += ' y ' + unidades[unitIndex];
                    }
                }
            }
        }

        return words.trim();
    };

    const handleTranslate = () => {
        setText(numberToWords(number));
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Traductor a Letras</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Número (1-1000)</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        placeholder="Ej: 123"
                        min="1"
                        max="1000"
                    />
                </div>

                <button
                    onClick={handleTranslate}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                    Traducir
                </button>

                {text && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
                        <span className="text-gray-600 font-medium">En letras:</span>
                        <div className="text-xl font-bold text-blue-600 capitalize">{text}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Traductor;
