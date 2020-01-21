import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CREDENTIALS } from "./actions";

export const FormBox = props => {
  const credentials = useSelector(state => state.credentials);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ ssid: "", password: "" }}
      onSubmit={values => dispatch(ADD_CREDENTIALS({ values }))}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("ssid")}
            onBlur={handleBlur("ssid")}
            value={values.ssid}
          />
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
