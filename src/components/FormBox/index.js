import React, { useState, useEffect } from "react";
import { Button, TextInput, View } from "react-native";
import { mapStateToProps } from "../../redux/mapStateToProps";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CREDENTIALS } from "./actions";
import { Container, Box } from "./style";
import { connect } from "../../services/connect/index";

export const FormBox = props => {
  const credentials = useSelector(state => state.credentials);
  const dispatch = useDispatch();
  const [SSID, setSSID] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Box type="SSID" placeholder="SSID" />
      <Box type="password" placeholder="Password" />
      <Button
        title="Submit"
        onPress={() => connect({ ssid: SSID, password: password })}
      />
    </Container>
  );
};
