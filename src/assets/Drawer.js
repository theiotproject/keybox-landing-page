import React from "react";
import "../App.css";
import { goOne, goTwo, goThree, goFour } from "../App";

function Drawer() {
  return (
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
  );
}

export default Drawer;
