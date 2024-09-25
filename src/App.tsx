import React from "react";
import { Form, Field } from "react-final-form";
import { Wizard } from "./components/Wizard";
import "./App.css";

const Step1 = () => {
  return (
    <div>
      <div>
        <label>Как вас зовут?</label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Имя"
          required
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div>
      <div>
        <label>Как вас зовут?</label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Имя"
          required
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      {/* <h1>Ваша дата смерти</h1>
      <div>
        <p>
          Ваша дата смерти рассчитывается исходя из статичтических параметров:
        </p>
        <ul>
          <li>Возраст</li>
          <li>Пол</li>
          <li>Место проживания</li>
          <li>Образ жизни</li>
          <li>Стресс</li>
          <li>Болезни</li>
          <li>Вредные привычки</li>
          <li>Питание</li>
          <li>Риск</li>
        </ul>
        <p>
          Приложение не учитывает возможные форс-мажорные обстоятельства и
          несчастные случаи. Данные рассчитаны на основе статистики, реальная
          дата может отличаться.
        </p>
      </div> */}
      <Wizard />
    </div>
  );
}

export default App;
