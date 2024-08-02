import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p>
            This project has been coded by Ariba Siddiqi, open sourced on{" "}
            <a href="https://github.com/asiddiqi16/dictionary-app"> GitHub </a>{" "}
            and hosted on{" "}
            <a href="https://dictionary-as.netlify.app/">Netlify</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
