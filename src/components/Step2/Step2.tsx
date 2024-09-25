import React from "react";
import { Field } from "react-final-form";
import { StepWrapper } from "../../commonStyles/styles";

const Step2 = () => {
  return (
    <StepWrapper>
      <label>Сколько Вам лет?</label>
      <Field
        name="age"
        component="input"
        type="integer"
        placeholder="возраст"
        required
      />
    </StepWrapper>
  );
};

export default Step2;
