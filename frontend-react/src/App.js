import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header title="Toy Factory" searchBar={true}/>
      <Dashboard/>
      <Footer/>
    </>
  );
}

export default App;
