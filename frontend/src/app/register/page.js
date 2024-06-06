"use client";
import React, { useState, useEffect } from "react";
import "./page.css";

export default function FormulaireInscription(props) {
  const [nom, setNom] = useState("");
  const [prénom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setMotDePasse] = useState("");
  const [numero_de_téléphone, setNumero_de_téléphone] = useState("");
  const [message, setMessage] = useState("");

  async function appelerApi() {
    let roles = ["ROLE_USER"];
    try {
      const bodyData = {
        roles,
        email,
        password,
        prénom,
        nom,
        numero_de_téléphone,
        adresse,
      };

      console.log("Request body :", bodyData);

      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify(bodyData),
      });

      console.log("Response status :", response.status);
    } finally {
      // router.push("/signin");
    }
  }

  useEffect(() => {
    if (nom || prénom || email || prénom || adresse || numero_de_téléphone) {
      setMessage("");
    }
  }, [nom, prénom, email, password, adresse, numero_de_téléphone]);

  const gérerSoumission = (e) => {
    e.preventDefault();

    if (
      !nom ||
      !prénom ||
      !email ||
      !password ||
      !adresse ||
      !numero_de_téléphone
    ) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    appelerApi();
    setMessage("Votre inscription a été envoyée avec succès !");
  };

  return (
    <form onSubmit={gérerSoumission}>
      <label htmlFor="nom">Nom</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <label htmlFor="prenom">Prénom</label>
      <input
        type="text"
        id="prenom"
        value={prénom}
        onChange={(e) => setPrenom(e.target.value)}
      />

      <label htmlFor="adresse">Adresse</label>
      <input
        type="text"
        id="adresse"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
      />

      <label htmlFor="email">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="numéroDeTéléphone">Numéro de téléphone</label>
      <input
        type="text"
        id="numéroDeTéléphone"
        value={numero_de_téléphone}
        onChange={(e) => setNumero_de_téléphone(e.target.value)}
      />

      <label htmlFor="motDePasse">Mot de passe</label>
      <input
        type="password"
        id="motDePasse"
        value={password}
        onChange={(e) => setMotDePasse(e.target.value)}
      />

      {message && <p>{message}</p>}

      <button type="submit">S'inscrire</button>
    </form>
  );
}
