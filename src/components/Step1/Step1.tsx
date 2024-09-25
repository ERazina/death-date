import React from "react";
import { Field } from "react-final-form";
import { StepWrapper } from "../../commonStyles/styles";

export const Step1 = () => {
  return (
    <StepWrapper>
      <label>Как вас зовут?</label>
      <Field
        name="name"
        component="input"
        type="text"
        placeholder="Имя"
        required
      />
    </StepWrapper>
  );
};
