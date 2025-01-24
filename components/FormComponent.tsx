"use client";

import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from "@/public/lottie/success.json"; 
import useCreateDBs from '@/hooks/useCreateDBs'; // Подтверждайте, что этот импорт указывает на правильный путь

// Определите типы пропсов
interface FormComponentProps {
    onClose: () => void;
}

// Компонент формы
const FormComponent: React.FC<FormComponentProps> = ({ onClose }) => {
    const [telegram, setTelegram] = useState('');
    const [email, setEmail] = useState('');

    // Функция отправки формы
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Вызов функции базы данных
            await useCreateDBs(telegram, email); // Убедитесь, что useCreateDBs — это функция
            onClose(); // Закрыть форму после успешной отправки
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
            <div className="flex flex-col top-0 absolute z-100 w-full justify-center items-center">
                <Lottie
                    animationData={animationData}
                    className="flex justify-center items-center"
                    loop={false}
                />
            </div>
            <form 
                onSubmit={handleSubmit} 
                className="p-6 rounded shadow-md w-96 relative"
            >
                <button 
                    type="button" 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-white hover:text-gray-400"
                >
                    &times;
                </button>
                <h2 className="text-lg font-bold mb-4">Fill out the form to download a track WAV</h2>
                
                <div className="mb-4">
                    <label 
                        htmlFor="telegram" 
                        className="block text-sm font-medium text-gray-700"
                    >
                        @YourTelegramAccount
                    </label>
                    <input 
                        type="text" 
                        id="telegram" 
                        value={telegram} 
                        onChange={(e) => setTelegram(e.target.value)} 
                        className="mt-1 block w-full bg-black text-white border border-gray-300 rounded-2xl p-2 placeholder-gray-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700"
                    >
                        Your Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="mt-1 block w-full bg-black text-white border border-gray-300 rounded-2xl p-2 placeholder-gray-400"
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-pink-500 text-white font-bold py-3 rounded-2xl hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
