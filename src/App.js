import './App.css';
// imported Weather Component from the apis folder 
import Weather from './apis/WeatherAPI';
// Default bootstrap styles by adding this line
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
