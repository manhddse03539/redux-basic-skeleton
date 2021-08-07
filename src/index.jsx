import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { authService } from 'service/AuthService';
import routes from 'routes';
import { Router, View } from 'react-navi';

const App = () => {
  const [currentUser, setCurrentUser] = useState(() =>
    authService.getCurrentUser()
  );

  // Subscribe that state to the value emitted by the auth service
  useEffect(() => authService.subscribe(setCurrentUser), []);

  return (
    <Router routes={routes} context={{ authService, currentUser }}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
