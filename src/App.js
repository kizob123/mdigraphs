import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';
import Footer from './components/Footer';
import ChartScreen from './components/ChartScreen';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ChartScreen></ChartScreen>
      <Footer></Footer>
    </div>
  );
}

export default App;
