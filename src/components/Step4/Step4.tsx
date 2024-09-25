import React from "react";
import { Field } from "react-final-form";
import { StepWrapper } from "../../commonStyles/styles";

export const Step4 = () => {
  return (
    <StepWrapper>
      <label>Страна проживания</label>
      <Field
        name="country"
        component="input"
        type="text"
        placeholder="country"
        required
      />
    </StepWrapper>
  );
};
