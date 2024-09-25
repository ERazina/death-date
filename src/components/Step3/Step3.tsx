import React from "react";
import { Field } from "react-final-form";
import { StepWrapper } from "../../commonStyles/styles";

export const Step3 = () => {
  return (
    <StepWrapper>
         <div>
            <label>Ваш пол</label>
            <div>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="male"
                />{' '}
                Мужской
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="feemale"
                />{' '}
                Женский
              </label>
            </div>
          </div>
    </StepWrapper>
  );
};
