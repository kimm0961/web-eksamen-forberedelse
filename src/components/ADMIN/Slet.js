// import React, { useState, useEffect } from "react";
// import { hentOevelse, sletOevelse } from "../../shared/API/OevelseAPI";
// import { useParams, useHistory, Link } from "react-router-dom";

// function Slet() {

//   // State
//   const [oevelse, setOevelse] = useState();

//   // History

//   const history = useHistory();

//   // Params

//   const { oevelse_id } = useParams();

//   // useEffect

//   useEffect(() => {
//     (async () => {
//       setOevelse(await hentOevelse(oevelse_id));
//     })();
//   }, [oevelse_id]);

//   // Submit

//   const handleSubmit = e => {
//     e.preventDefault();
//     (async () => {
//       setOevelse(await sletOevelse(oevelse_id));
//       // redirect
//       history.push("/admin");
//     })();
//   };

//   // Metode 1 - if

//   let oevelsen = "";

//   if (oevelse !== undefined) {
//     oevelsen = (
//       <div className="container">
//         <h1 className="text-center mt-5">Slet øvelse</h1>
//         <div className="card text-white mx-auto mb-5" style={{maxWidth: '18rem'}}>
//         <div className="card-header text-danger font-weight-bold">Er du sikker på, at du vil slette?</div>
//           <div className="card-body bg-dark text-center">
//             <h5  className="card-title">{oevelse.navn}</h5>
//             <p className="card-text">{oevelse.beskrivelse}</p>
//           </div>
//         </div>
//         <div className="text-center">
//         <Link className="btn btn-secondary mr-3" to="/admin" role="button">
//               Fortryd
//             </Link>
//             <Link
//               className="btn btn-warning"
//               to="/admin"
//               role="button"
//               onClick={handleSubmit}
//             >
//               Slet
//             </Link>
//             </div>
//       </div>
//     );
//   }

//   // Udskriv

//   return <div>{oevelsen}</div>;
// }

// export default Slet;
