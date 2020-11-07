import './App.css';
import Link from './components/link.js';
import Footer from './components/footer.js';

const checkIn = () => {
  var pass = prompt("パスワードを入力して下さい:","");
  if (pass != null) window.location.href = "https://yu-sei-m.github.io/" + pass;
}

function App() {
  const logo = '/images/logo.png';  
  const illust = '/images/color39.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={illust} className="App-logo" alt="logo" />
        <p>
          <b>フィットネス・エンジニアの勉強会</b>
        </p>
        <Link text="はじめて学ぶReact" onClick={()=>checkIn()}/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
