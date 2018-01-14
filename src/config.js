import fireBase from 'firebase';


export const appName = "advreact-13-01";
export const fireBaseConfig = {
  apiKey: "AIzaSyCoyLExE5JU-bz0i8M-BJXC50dUxeDdA64",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "223157054138"
};

fireBase.initializeApp(fireBaseConfig);