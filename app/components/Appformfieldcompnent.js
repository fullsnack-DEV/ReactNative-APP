import React from "react";

import AppTextinput from "./AppTextinput";
import Errormessage from "./Errormessage";
import { useFormikContext } from "formik";
export default function Appformfieldcompnent({ name, ...otherprops }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextinput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherprops}
      />
      <Errormessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
