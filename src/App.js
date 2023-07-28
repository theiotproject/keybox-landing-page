import React from "react";

import { useRef } from "react";
import "./App.css";
import Keybox3 from "./assets/keybox3.png";
import Keybox2 from "./assets/keybox2.png";
import Keybox1 from "./assets/keybox1.png";
import Logo from "./assets/keybox.png";
import { Squeeze as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [open, setOpen] = React.useState(false);

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  const goOne = () => {
    one.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(!open);
  };

  const goTwo = () => {
    two.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(!open);
  };

  const goThree = () => {
    three.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(!open);
  };

  const goFour = () => {
    four.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(!open);
  };

  return (
    <div className="home-mobile">
      <header className="header">
        <img className="logo" alt="Keybox" src={Logo} />

        <Hamburger toggled={open} toggle={setOpen} color="rgb(58, 155, 141)" />
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
      <div className="one" ref={one}>
        <img className="render" alt="Keybox" src={Keybox2} />
        <img className="render" alt="Keybox" src={Keybox1} />
        <div className="main-text">
          <h1>KeyBox System</h1>
          <p>zarządzanie kluczami jeszcze nigdy nie było tak łatwe!</p>
          <button onClick={goFour} className="button">
            NAPISZ DO NAS!
          </button>
        </div>
      </div>
      <div className="two" ref={two}>
        <div className="teksty">
          <div className="h2">dlaczego KeyBox System?</div>
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
        <div className="KeyboxSystem" style={{ width: 315, height: 567 }}>
          <span className="h2">
            KeyBox System
            <br />
          </span>
          <span className="text2">
            {" "}
            <br />
            to innowacyjne rozwiązanie stworzone specjalnie po to, by ułatwić Ci
            życie. <br />
            <br />
            Już nie musisz martwić się, gdzie zostały schowane ważne klucze lub
            kto je zabrał. Nasza inteligentna skrzynka zapewnia doskonałe
            zarządzanie kluczami!
            <br />
          </span>
          <span className="text2">
            <br />
            <br />
          </span>
          <span className="h2">
            Jak wygląda to w praktyce? <br />
          </span>
          <span className="text2">
            <br />
          </span>
          <span className="text2">
            Key Box jest zamontowany <br />w jednym miejscu i rejestruje, <br />
            kto i kiedy pobiera klucz. <br />
            <br />
            Masz dostęp do tych informacji <br />
            dzięki naszym aplikacjom <br />
            internetowym i mobilnym, <br />a to wszystko w czasie rzeczywistym!
          </span>
        </div>
        <img className="keybox-3" alt="Keybox" src={Keybox3} />
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
        <p>dołącz do naszej społeczności!</p>
        <div className="icons">
          <FontAwesomeIcon
            icon="faTwitter"
            bounce
            style={{ color: "#424242" }}
          />
        </div>
        <p>
          Copyright © 2023 KeyBox System <br />| Powered by TheIoTProject
        </p>
      </div>
    </div>
  );
}

export default App;
