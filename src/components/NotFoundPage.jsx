import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1)

    return (
        <div>
            <button onClick={() => goBack()}> Вернуться назад </button>
            <Link to='/'> На главную </Link>
          <div> Страница не найдена, проверьте правильность пути </div>
        </div>
    );
};

export default NotFoundPage;