"use client";
import React, { useState } from "react";
import "./page.css";
export default function LoginForm(props) {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setApiSuccess("Login successful!");
        localStorage.setItem("token", data.token);

        // router.push("/profil");
      } else {
        setApiError(data.message || "An error occurred");
        setApiSuccess("");
      }
    } catch (error) {
      setApiError("An error occurred. Please try again.");
      setApiSuccess("");
    }
  };

  return (
    <form onSubmit={signInSubmit}>
      <label htmlFor="email">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        value={username}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Se connecter</button>
    </form>
  );
}
