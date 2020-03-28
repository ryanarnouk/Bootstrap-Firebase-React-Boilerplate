import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Providers extends Component {
  constructor (props)  {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    )
  }
}

ReactDOM.render(<Providers />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
