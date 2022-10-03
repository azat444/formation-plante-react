import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention sans arobase ton mail ne marchera pas ^^");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les gens qui kiffent les plantes
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail : on vous offre une plante
      </div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
