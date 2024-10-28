import React from 'react';
import { useNavigate } from 'react-router-dom';



const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <h2>Упс! страница не нейдена</h2>
            <button onClick={() => navigate('/products')}>Вернуться к продуктам</button>
        </div>
    );
};

export default NotFoundPage;
