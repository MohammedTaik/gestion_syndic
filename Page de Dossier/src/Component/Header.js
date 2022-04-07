import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src="../Media/logo.png" alt="" />
        <div id="logo-name">Syndic</div>
      </div>
      <div className="User">
        <img src="../Media/user.png" alt="" />
        <h2>Syndic</h2>
        <h3>Résidence tamssena</h3>
      </div>
    </div>
  );
}
