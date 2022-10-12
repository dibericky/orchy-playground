import logo from './logo.svg';
import './App.css';
import '@orchy-mfe/web-component'

function App() {
  return (
    <div className="App">
      <h2>CIAO</h2>
      <orchy-wc></orchy-wc>
      <div id="my-mf" />
    </div>
  );
}

export default App;
