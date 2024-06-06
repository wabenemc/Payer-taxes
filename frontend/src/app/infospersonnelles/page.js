// import React, { useState } from "react";

// function InfractionForm(props) {
//   const [nom, setNom] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [email, setEmail] = useState("");
//   const [motDePasse, setMotDePasse] = useState("");
//   const [adresse, setAdresse] = useState("");
//   const [numeroContravention, setNumeroContravention] = useState("");
//   const [motif, setMotif] = useState("");
//   const [dateInfraction, setDateInfraction] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Traitez les données du formulaire ici
//     console.log({
//       nom,
//       prenom,
//       email,
//       motDePasse,
//       adresse,
//       numeroContravention,
//       motif,
//       dateInfraction,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nom :
//         <input
//           type="text"
//           value={nom}
//           onChange={(event) => setNom(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Prénom :
//         <input
//           type="text"
//           value={prenom}
//           onChange={(event) => setPrenom(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Email :
//         <input
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Mot de passe :
//         <input
//           type="password"
//           value={motDePasse}
//           onChange={(event) => setMotDePasse(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Adresse :
//         <input
//           type="text"
//           value={adresse}
//           onChange={(event) => setAdresse(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Numéro de contravention :
//         <input
//           type="text"
//           value={numeroContravention}
//           onChange={(event) => setNumeroContravention(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Motif :
//         <input
//           type="text"
//           value={motif}
//           onChange={(event) => setMotif(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Date de l'infraction :
//         <input
//           type="date"
//           value={dateInfraction}
//           onChange={(event) => setDateInfraction(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Envoyer</button>
//     </form>
//   );
// }

// export default InfractionForm;
