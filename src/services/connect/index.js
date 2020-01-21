import Smartconfig from "react-native-smartconfig-3";

const connect = ({ ssid, password }) => {
  Smartconfig.start({
    type: "esptouch",
    ssid: ssid,
    bssid: "filter-device", //"" if not need to filter (don't use null)
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
