import './App.css';

import MainContainer  from './components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <Header />
      <MainContainer />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
