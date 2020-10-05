// import React, { useState, useEffect } from "react";
// import ImageUploader from 'react-images-upload';
// import { hentAlleKategorier } from "../../shared/API/KategoriAPI";
// import { hentOevelse, retOevelse } from "../../shared/API/OevelseAPI";
// import { useParams, useHistory, Link } from "react-router-dom";

// function Ret() {
//   // State
//   const [kategorier, setKategorier] = useState({});
//   const [oevelseData, setOevelseData] = useState("");
//   const [oevelseBillede, setOevelseBillede] = useState();

//   // History

//   const history = useHistory();

//   // Params

//   const { oevelse_id } = useParams();

//   // useEffect
//   useEffect(() => {
//     (async () => {
//       setOevelseData(await hentOevelse(oevelse_id));
//     })();

//     hentAlleKategorier().then(kat => {
//       // console.log(kat)
//       setKategorier(kat);
//     });
//   }, [ oevelse_id]);

//   // console.log(oevelseData)
//   // Submit

//   const handleSubmit = e => {
//     e.preventDefault();

//     (async () => {
//       setOevelseData(await retOevelse(oevelse_id, oevelseData, oevelseBillede));
//       history.push("/admin");
//     })();

//   };

//   // Metode 1 - map

//   let KategoriList = "";

//   if (kategorier.length > 0) {
//     KategoriList = kategorier.map(kategori => {
//       return (
//         <option key={kategori._id} value={kategori._id}>
//           {kategori.kategorinavn}
//         </option>
//       );
//     });
//   } else {
//     return <div>Ingen kategorier endnu.</div>;
//   }

//   // Metode 1 - if

//   let oevelsen = "";

//   if (oevelseData) {
//     oevelsen = (
//       <div className="container">
//         <h1 className="text-center mt-5">Ret øvelse</h1>
//         <p className="text-center mb-5">{oevelseData.kategori.kategorinavn}</p>
//         <div className="container" style={{ maxWidth: "40rem" }}>
//           <form className="text-left">
//             <select
//               className="custom-select mb-4 bg-light"
//               onChange={(e) => setOevelseData({ ...oevelseData, kategori: e.target.value })}
//               defaultValue={"DEFAULT"}
//             >
//               <option value="DEFAULT" disabled>
//                 Vælg en kategori ...
//               </option>
//               {KategoriList}
//             </select>
//             <label htmlFor="navn" className="font-weight-bold">
//               Navn:
//             </label>
//             <input
//               id="navn"
//               type="text"
//               className="form-control mb-3 bg-light"
//               onChange={(e) => setOevelseData({ ...oevelseData, navn: e.target.value })}
//               value={oevelseData.navn}
//             />
//             <label htmlFor="muskler" className="font-weight-bold">
//             Primære muskler:
//           </label>
//           <input
//             id="muskler"
//             type="text"
//             className="form-control mb-3 bg-light"
//             onChange={(e) =>
//               setOevelseData({ ...oevelseData, primaere_muskler: e.target.value.split(",") })
//             }
//             value={oevelseData.primaere_muskler}
//           />
//             <label htmlFor="tekst" className="font-weight-bold">
//               Beskrivelse:
//             </label>
//             <textarea
//               id="tekst"
//               type="text"
//               className="form-control mb-3 bg-light"
//               rows="3"
//               onChange={(e) => setOevelseData({ ...oevelseData, beskrivelse: e.target.value })}
//               value={oevelseData.beskrivelse}
//             ></textarea>
//             <label htmlFor="skaber" className="font-weight-bold">
//               Skaber:
//             </label>
//             <input
//               id="skaber"
//               type="text"
//               className="form-control mb-3 bg-light"
//               required
//               name="name"
//               onChange={(e) =>
//                 setOevelseData({ ...oevelseData, skaber: e.target.value })
//               }
//               value={oevelseData.skaber}
//             />
//             <img className="img-fluid" style={{width:200}} src={"http://localhost:3032/images/" + oevelseData.coverbillede.filnavn} alt={oevelseData.overskrift} />
//           <ImageUploader
//                 withIcon={true}
//                 buttonText='Vælg et billede'
//                 onChange={(billede) => {setOevelseBillede(billede[0])}} // Send kun 1 fil, ikke et array med 1 fil
//                 imgExtension={['.jpg', '.gif', '.png']}
//                 maxFileSize={5242880}
//                 withPreview={true}
//             />
//           </form>
//           <Link className="btn btn-secondary mr-3" to="/admin" role="button">
//             Fortryd
//           </Link>
//           <Link
//             className="btn btn-warning"
//             to="/admin"
//             role="button"
//             onClick={handleSubmit}
//           >
//             Gem
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Udskriv her

//   return <div>{oevelsen}</div>;
// }

// export default Ret;
