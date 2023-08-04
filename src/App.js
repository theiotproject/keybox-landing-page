import React from "react";

import { useRef } from "react";
import "./App.css";
import Keybox3 from "./assets/keybox3.png";
import Keybox2 from "./assets/keybox2.png";
import Keybox1 from "./assets/keybox1.png";
import Logo from "./assets/keybox.png";
import { Squeeze as Hamburger } from "hamburger-react";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {
  BsKey,
  BsShieldCheck,
  BsCameraVideo,
  BsEmojiSmile,
  BsGear,
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsGithub,
} from "react-icons/bs";

function App() {
  const [open, setOpen] = React.useState(false);

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  const goOne = () => {
    one.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goTwo = () => {
    two.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goThree = () => {
    three.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goFour = () => {
    four.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
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
          <div className="header-logo">
            <img className="logo" alt="Keybox" src={Logo} />
            <h1>KeyBox System</h1>
          </div>
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
          <h1 className="mobile">KeyBox System</h1>
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
            <BsShieldCheck color="white" fontSize="2rem" />
            <p className="text-wrapper-2">
              ważne klucze zawsze w jednym miejscu
            </p>
          </div>
          <div className="frame-2">
            <BsKey color="white" fontSize="2.5rem" />
            <div className="text-wrapper-2">proste zarządzanie dostępem</div>
          </div>
          <div className="frame-2">
            <BsCameraVideo color="white" fontSize="2rem" />
            <p className="text-wrapper-2">
              monitorowanie pobierań kluczy w czasie rzeczywistym
            </p>
          </div>
          <div className="frame-2">
            <BsEmojiSmile color="white" fontSize="2rem" />
            <p className="text-wrapper-2">
              przyjazna dla użytkownika aplikacja mobilna oraz internetowa
            </p>
          </div>
          <div className="frame-2">
            <BsGear color="white" fontSize="2rem" />
            <p className="text-wrapper-2">
              pełne wsparcie ekspertów <br />
              na każdym etapie
            </p>
          </div>
        </div>
      </div>
      <div className="three" ref={three}>
        <div className="KeyboxSystem">
          <span className="text2">
            Nasz produkt jest zaawansowanym rozwiązaniem do zarządzania kluczami
            oraz dostępem do różnych pomieszczeń lub pojazdów.
            <br />
            <br />
            Składa się z dwóch głównych komponentów: centrali głównej KeyBox
            oraz modułowych pojemników na klucze - Key Slotów. <br />
            <br />
            Dzięki funkcji skanowania kart RFID, który umieściliśmy w centrali
            KeyBoxa użytkownicy mogą cieszyć się wygodnym i efektywnym sposobem
            zarządzania dostępem do kluczy i zasobów. <br />
            <br />
            Zarządzanie systemem jest możliwe za pomocą dedykowanej aplikacji
            mobilnej na smartfony lub aplikacji internetowej.
          </span>
          <div className="opis">Opis produktu</div>
        </div>
      </div>
      <div className="four" ref={four}>
        <div className="kontakt">
          <span className="h2">
            <b>KeyBox System</b> to innowacyjne rozwiązanie tworzone przez
            kilkuosobowy zespół młodych ludzi pasjonujących się IoT. <br />
            <br /> Jesteśmy na etapie tworzenia pierwszych prototypów, oraz
            intensywnej współpracy z beta testerami. <br />
            <br />
            Jesteśmy otwarci na współpracę, dlatego jeśli chciałbyś przetestować
            nasz produkt lub zgłosić jakiekolwiek uwagi, skontaktuj się z nami -
            chętnie z Tobą porozmawiamy!
          </span>
          <div className="contact">
            <div className="email">
              <MdOutlineEmail color="white" fontSize="3rem" />
              <h3>napisz do nas</h3>
              <p>a.kocaj@theiotproject.com</p>
            </div>
            <div className="phone">
              <BiPhoneCall color="white" fontSize="3rem" />
              <h3>zadzwoń do nas</h3>
              <p>+48 500 618 881</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="icons">
          <a
            href="https://discord.gg/ZGCCmEsH"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsDiscord className="icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100084064302556"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://www.instagram.com/theiotproject/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsInstagram className="icon" />
          </a>
          <a
            href="https://www.tiktok.com/@theiotproject"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsTiktok className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/theiotproject"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/theiotproject"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="icon" />
          </a>
        </div>
        Copyright © 2023 KeyBox System <br />| Powered by TheIoTProject
      </div>
    </div>
  );
}

export default App;
