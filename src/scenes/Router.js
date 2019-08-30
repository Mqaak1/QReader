import React from 'react';
import { Router, Scene, ActionConst } from "react-native-router-flux";
import Scanner from "./Scanner/Scanner";
import BarcodeInfo from "./History/BarcodeInfo";
import Profile from "./Profile/Profile";

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene
        key="BarcodeInfo"          
        component={BarcodeInfo}
      /> 
      <Scene
        type={ActionConst.RESET}
        key="Scanner"          
        component={Scanner}
      />  


          
      <Scene
        type={ActionConst.RESET}
        key="Profile"          
        component={Profile}
      /> 
    </Scene>
  </Router>
);
export default RouterComponent;