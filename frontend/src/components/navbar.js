"use client";
import React, { useState } from "react";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="payer-amandes">
          <h1>Payer-Amandes</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/login">Connexion</a>
          </li>
          <li>
            <a href="/register">Inscription</a>
          </li>
          <li>
            <a href="/less_category"></a>
          </li>
          <li>
            <a href="/upcoming_category"></a>
          </li>
        </ul>
        <div className="user">
          <img
            src="https://scontent-cdg4-3.xx.fbcdn.net/v/t1.6435-9/193847403_270942651488037_3706223732416404172_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5TliDhl6YRgQ7kNvgEQVWvL&_nc_ht=scontent-cdg4-3.xx&oh=00_AYArlphjk9ZL4-G3fGXXNaDkd7nV-4bX2_Ps4fDIBXMG9g&oe=668147E9"
            alt="Utilisateur"
          />
        </div>
      </nav>
    </div>
  );
}
