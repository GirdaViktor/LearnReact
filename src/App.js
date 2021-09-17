import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Header />

      <div className="wrapper content-wrapper">
        <Navigation />

        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
