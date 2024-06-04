"use client";
import React, { useState, useEffect } from "react";
import "./page.css";

export default function InscriptionForm(props) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setadresse] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState("");
  const [numéroDetéléphone, setNuméroDeTéléphone] = useState("");
  const [message, setMessage] = useState("");

  async function CollApi() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // router.push("/profil");
    } catch (error) {
      ("");
    }
  }

  useEffect(() => {
    if (nom || prenom || email || motDePasse || confirmationMotDePasse) {
      setMessage("");
    }
  }, [nom, prenom, email, motDePasse, confirmationMotDePasse]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nom ||
      !prenom ||
      !email ||
      !motDePasse ||
      !confirmationMotDePasse ||
      !adresse ||
      !numéroDetéléphone
    ) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (motDePasse !== confirmationMotDePasse) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }
    CollApi();

    setMessage("Votre inscription a été envoyée avec succès !");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />

      <label htmlFor="adresse">adresse</label>
      <input
        type="text"
        id="adresse"
        value={adresse}
        onChange={(e) => setadresse(e.target.value)}
      />

      <label htmlFor="email">Adresse e-mail</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="numéroDetéléphone">Numéro de téléphone</label>
      <input
        type="number"
        id="numéroDetéléphone"
        onChange={(e) => setNuméroDeTéléphone(e.target.value)}
      />

      <label htmlFor="motDePasse">Mot de passe</label>
      <input
        type="password"
        id="motDePasse"
        value={motDePasse}
        onChange={(e) => setMotDePasse(e.target.value)}
      />

      <label htmlFor="confirmationMotDePasse">
        Confirmation du mot de passe
      </label>
      <input
        type="password"
        id="confirmationMotDePasse"
        value={confirmationMotDePasse}
        onChange={(e) => setConfirmationMotDePasse(e.target.value)}
      />

      {message && <p>{message}</p>}

      <button type="submit">S'inscrire</button>
    </form>
  );
}
