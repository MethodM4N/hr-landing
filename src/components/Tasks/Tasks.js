/* eslint-disable react/prop-types */
import React from 'react';
import chair from './images/mentor.png';
import glasses from './images/reviewer.png';

function Tasks({ onRedirectButton, componentRef, vacancies }) {
  return (
    <section className="tasks" ref={componentRef}>
      <div className="section-wrapper section-wrapper__tasks">
        <div className="tasks__container tasks__container_first">
          <h2 className="tasks__title">Задачи наставника</h2>
          <ul className="tasks__list list">
            <li className="tasks__item">Помогать студентам ставить цели</li>
            <li className="tasks__item">Рефлексировать и делать выводы</li>
            <li className="tasks__item">Отвечать на их вопросы в чате</li>
            <li className="tasks__item">Проводить вебинары 2 раза в месяц</li>
            <li className="tasks__item">Давать обратную связь</li>
            <li className="tasks__item">Делиться опытом и мотивировать</li>
          </ul>
          <img
            className="tasks__image tasks__image_first"
            src={chair}
            alt="Изображение кресла режиссера"
          ></img>
          <button
            type="button"
            className="tasks__button button"
            onClick={() => onRedirectButton(vacancies)}
          >
            <a className="tasks__link">Смотреть предложения</a>
          </button>
        </div>
        <div className="tasks__container tasks__container_second">
          <h2 className="tasks__title">Задачи ревьюера</h2>
          <ul className="tasks__list list">
            <li className="tasks__item">Проверять код и проекты студентов</li>
            <li className="tasks__item">Простыми словами объяснять ошибки</li>
            <li className="tasks__item">
              Давать корректирующую обратную связь
            </li>
            <li className="tasks__item">Оценивать работы - зачёт/незачёт</li>
          </ul>
          <img
            className="tasks__image tasks__image_second"
            src={glasses}
            alt="Очки"
          ></img>
          <button
            type="button"
            className="tasks__button button"
            onClick={() => onRedirectButton(vacancies)}
          >
            <a className="tasks__link">Смотреть предложения</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
