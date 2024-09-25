import React, { useState } from "react";
import { Form } from "react-final-form";
import { Step1 } from "../Step1";
import { Step2 } from "../Step2";
import { Step3 } from "../Step3";
// import { Step4 } from "../Step4";

export const Wizard = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  // Массив шагов формы
  const steps = [<Step1 />, <Step2 />, <Step3 />];

  const nextStep = (values: any) => {
    setFormData({ ...formData, ...values });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values: any) => {
    const finalData = { ...formData, ...values };
    console.log(finalData);
    calculateLE(finalData.age, finalData.gender);
  };

  function calculateLE(
    age: number,
    gender: string
    // lifestyle,
    // habits,
    // diet,
    // region,
    // sport,
    // stress,
    // diseases,
    // obesity
  ) {
    const BASE_LIFE_EXPECTANCY = 73; // Базовая продолжительность жизни (для России)

    // 1. Возраст
    let remainingLife = BASE_LIFE_EXPECTANCY - age;

    // 2. Пол
    if (gender === "male") {
      remainingLife -= 5;
    } else if (gender === "female") {
      remainingLife += 2;
    }

    // 3. Образ жизни
    // switch (lifestyle) {
    //   case "unhealthy":
    //     remainingLife *= 0.9; // -10%
    //     break;
    //   case "healthy":
    //     remainingLife *= 1.05; // +5%
    //     break;
    //   default:
    //     break; // нейтральный образ жизни
    // }

    // 4. Вредные привычки (курение, алкоголь, наркотики, сахар)
    // if (habits.includes("smoking")) {
    //   remainingLife -= 7; // курение
    // }
    // if (habits.includes("alcohol")) {
    //   remainingLife -= 5; // алкоголь
    // }
    // if (habits.includes("drugs")) {
    //   remainingLife -= 15; // наркотики
    // }
    // if (habits.includes("sugar")) {
    //   remainingLife -= 3; // избыток сахара
    // }

    // 5. Питание
    // switch (diet) {
    //   case "unhealthy":
    //     remainingLife -= 5;
    //     break;
    //   case "healthy":
    //     remainingLife += 3;
    //     break;
    //   default:
    //     break; // среднее питание
    // }

    // 6. Регион проживания
    // switch (region) {
    //   case "polluted":
    //     remainingLife -= 3;
    //     break;
    //   case "clean":
    //     remainingLife += 2;
    //     break;
    //   default:
    //     break; // средний регион
    // }

    // 7. Спорт
    // switch (sport) {
    //   case "none":
    //     remainingLife -= 3;
    //     break;
    //   case "moderate":
    //     remainingLife += 2;
    //     break;
    //   case "high":
    //     remainingLife += 4;
    //     break;
    //   default:
    //     break; // без изменений
    // }

    // 8. Уровень стресса
    // switch (stress) {
    //   case "high":
    //     remainingLife -= 5;
    //     break;
    //   case "low":
    //     remainingLife += 3;
    //     break;
    //   default:
    //     break; // средний уровень стресса
    // }

    // 9. Заболевания
    // if (diseases.includes("heart")) {
    //   remainingLife -= 10; // сердечно-сосудистые заболевания
    // } else if (diseases.includes("heart_family")) {
    //   remainingLife -= 5; // предрасположенность
    // }

    // if (diseases.includes("diabetes")) {
    //   remainingLife -= 8; // диабет
    // } else if (diseases.includes("diabetes_family")) {
    //   remainingLife -= 3; // предрасположенность
    // }

    // if (diseases.includes("cancer")) {
    //   remainingLife -= 10; // онкология
    // } else if (diseases.includes("cancer_family")) {
    //   remainingLife -= 3; // предрасположенность
    // }

    // if (diseases.includes("asthma")) {
    //   remainingLife -= 5; // астма
    // }

    // if (diseases.includes("mental")) {
    //   remainingLife -= 7; // психические расстройства
    // }

    // 10. Ожирение
    // switch (obesity) {
    //   case "overweight":
    //     remainingLife -= 3;
    //     break;
    //   case "obesity_1":
    //     remainingLife -= 5;
    //     break;
    //   case "obesity_2":
    //     remainingLife -= 7;
    //     break;
    //   case "obesity_3":
    //     remainingLife -= 10;
    //     break;
    //   default:
    //     break; // нормальный вес
    // }
    console.log(remainingLife, 0);
    return Math.max(remainingLife, 0); // LE не может быть меньше 0
  }

  return (
    <Form
      onSubmit={step === steps.length - 1 ? handleSubmit : nextStep}
      initialValues={formData}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {steps[step]}

          <div style={{ marginTop: "20px" }}>
            {step > 0 && (
              <button type="button" onClick={prevStep}>
                Назад
              </button>
            )}
            <button type="submit">
              {step === steps.length - 1 ? "Отправить" : "Далее"}
            </button>
          </div>
        </form>
      )}
    />
  );
};
