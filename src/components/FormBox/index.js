import React, { useState, useEffect } from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CREDENTIALS } from "./actions";
import WifiManager from "react-native-wifi";

const getSSID = () => {
  WifiManager.getCurrentWifiSSID().then(
    ssid => {
      console.log("Your current connected wifi SSID is " + ssid);
    },
    () => {
      console.log("Cannot get current SSID!");
    }
  );
};

export const FormBox = props => {
  const credentials = useSelector(state => state.credentials);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <TextInput
        type="username"
        placeholder="SSID"
        onChangeText={handleChange("ssid")}
        onBlur={handleBlur("ssid")}
        value={values.ssid}
      />
      <TextInput
        type="password"
        placeholder="Password"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
      />
      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};
