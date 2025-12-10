"use client";
import styles from "./form.css";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const handleSend = () => {
    setEmail("");
    alert("Done!");
  };
  return (
    <form
      className="subscribe__content"
      onSubmit={(e) => {
        e.preventDefault();
        handleSend();
      }}
    >
      <h3 className="subscribe__title">SUBSCRIBE TO NEWS & SALES</h3>
      <input
        type="email"
        placeholder="YOUR E-MAIL*"
        className="subscribe__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <p className="subscribe__policy">
        *I GIVE MY CONSENT FOR A&nbsp;
        <a href="#" className="subscribe__policy--link">
          PRIVACY SETTINGS.
        </a>
      </p>
      <button type="submit" className="subscribe__policy--btn">
        SEND
      </button>
    </form>
  );
}
