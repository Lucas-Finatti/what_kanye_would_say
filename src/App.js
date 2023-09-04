import './styles/App.css';
import kanyewestlogo from "./Assests/kanyeWestLogo.png";
import ButtonComponente from "./services/kanyeWestSaid"

function App() {
  return (
    <div className="App">
      
      <header className="header">
        <img src={kanyewestlogo} alt="Kanye West Logo" className="image" />
        <p className="text">What kanye West Wold Say</p>
      </header>
      <ButtonComponente />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6275431882699677" crossorigin="anonymous"></script>
    </div> 
  );
}

export default App;
