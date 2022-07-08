import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Shweta{" "}
            <a
              href="https://github.com/Shwetakotak/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
