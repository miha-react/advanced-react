import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import conferences from './mocks/conferences';
import firebase from 'firebase';

export function saveEventsToFB() {
  const eventsRef = firebase.database().ref('/events');
  conferences.forEach(conference => eventsRef.push(conference))
}
window.runMigration = function () {
  firebase.database().ref('/events').once('value', data => {
    if (!data.val()) saveEventsToFB()
  })
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
