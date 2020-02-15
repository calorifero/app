import Smartconfig from "react-native-smartconfig-3";

export const connect = ({ ssid, password }) => {
  Smartconfig.start({
    type: "esptouch",
    ssid: ssid,
    password: password,
    timeout: 50000, //now support (default 30000)
    taskCount: 1 // now support (default 1)
  })
    .then(results => {
      //Array of device success do smartconfig
      console.log(results);
    })
    .catch(error => {});
};
