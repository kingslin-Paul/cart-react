import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
