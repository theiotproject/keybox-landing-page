import React from "react";

import { useRef } from "react";
import "./App.css";
import Keybox3 from "./assets/keybox3.png";
import Keybox2 from "./assets/keybox2.png";
import Keybox1 from "./assets/keybox1.png";
import Logo from "./assets/keybox.png";
import { Squeeze as Hamburger } from "hamburger-react";

function App() {
  const [open, setOpen] = React.useState(false);

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  const goOne = () => {
    one.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goTwo = () => {
    two.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goThree = () => {
    three.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goFour = () => {
    four.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-mobile">
      <div className="header-mobile">
        <header className="header">
          <img className="logo" alt="Keybox" src={Logo} />

          <Hamburger
            toggled={open}
            toggle={setOpen}
            color="rgb(58, 155, 141)"
          />
        </header>
        {open && (
          <div>
            <table>
              <tr>
                <td onClick={goOne}>Strona Główna</td>
              </tr>
              <tr>
                <td onClick={goTwo}>Dlaczego KeyBox System?</td>
              </tr>
              <tr>
                <td onClick={goThree}>Opis Produktu</td>
              </tr>
              <tr>
                <td onClick={goFour}>Kontakt</td>
              </tr>
            </table>
          </div>
        )}
      </div>
      <div className="header-desktop">
        <header className="header">
          <img className="logo" alt="Keybox" src={Logo} />
          <div className="navbar">
            <button onClick={goTwo} className="nav-button">
              Dlaczego KeyBox System?
            </button>
            <button onClick={goThree} className="nav-button">
              Opis Produktu
            </button>
            <button onClick={goFour} className="nav-button">
              Kontakt
            </button>
          </div>
        </header>
      </div>
      <div className="one" ref={one}>
        <div className="renders">
          <img className="render" alt="Keybox" src={Keybox2} />
          <img className="render" id="three" alt="Keybox" src={Keybox3} />
          <img className="render" alt="Keybox" src={Keybox1} />
        </div>
        <div className="main-text">
          <h1>KeyBox System</h1>
          <p>zarządzanie kluczami jeszcze nigdy nie było tak łatwe!</p>
          <button onClick={goFour} className="button">
            NAPISZ DO NAS!
          </button>
        </div>
      </div>
      <div className="two" ref={two}>
        <div className="h2">dlaczego KeyBox System?</div>
        <div className="teksty">
          <div className="frame-2">
            <p className="text-wrapper-2">
              ważne klucze zawsze w jednym miejscu
            </p>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2">proste zarządzanie dostępem</div>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">
              monitorowanie pobierań kluczy w czasie rzeczywistym
            </p>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">
              przyjazna dla użytkownika aplikacja mobilna oraz internetowa
            </p>
          </div>
          <div className="frame-2">
            <p className="text-wrapper-2">
              pełne wsparcie ekspertów <br />
              na każdym etapie
            </p>
          </div>
        </div>
      </div>
      <div className="three" ref={three}>
        <div className="KeyboxSystem">
          <span className="h3">
            KeyBox System
            <br />
          </span>
          <span className="text2">
            to innowacyjne rozwiązanie stworzone specjalnie po to, by ułatwić Ci
            życie. Już nie musisz martwić się, gdzie zostały schowane ważne
            klucze lub kto je zabrał. Nasza inteligentna skrzynka zapewnia
            doskonałe zarządzanie kluczami!
          </span>
        </div>
      </div>
      <div className="four" ref={four}>
        <form className="formularz-kontaktowy">
          <h3>FORMULARZ KONTAKTOWY</h3>
          <label htmlFor="e-mail">e-mail</label>
          <input
            name="e-mail"
            type="text"
            placeholder="jkowalski@gmail.com"
            label="E-mail"
          />
          <label htmlFor="message">wiadomość</label>
          <textarea name="message" placeholder="Napisz coś.."></textarea>
          <div className="submit">
            <button className="button" type="submit">
              wyślij
            </button>
          </div>
        </form>
      </div>

      <div className="footer">
        <div className="icons"></div>
        Copyright © 2023 KeyBox System <br />| Powered by TheIoTProject
      </div>
    </div>
  );
}

export default App;
