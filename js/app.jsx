import React from 'react';
import ReactDOM from 'react-dom';

import 'css/app.css';
import Logo from './components/Logo';

ReactDOM.render(
  <h1>
    <Logo /> Welcome to The App!
  </h1>,
  document.getElementById('app')
);
