import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
