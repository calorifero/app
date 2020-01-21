import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

const FormBox = props => (
  <Formik
    initialValues={{ ssid: '', password: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('ssid')}
          onBlur={handleBlur('ssid')}
          value={values.ssid}
        />        
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
)