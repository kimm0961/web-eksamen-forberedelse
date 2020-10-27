import axios from "axios";

const eventAPI = {
  baseUrl: "http://localhost:5021/event",
};

//* Funktioner */

// Funktion Omskriv dato
const OmskrivDato = (res) => {
  if (res.data.length !== undefined) {
var i;
for (i = 0; i < res.data.length; i++) {
  let dato = res.data[i].dato;
  let d = new Date(dato);
  let n = d.toLocaleDateString();
  res.data[i].dato = n;
  // console.log("Dato omskrevet", n);
}
  } else if (res.data.length === undefined) {
    let dato = res.data.dato;
    let d = new Date(dato);
    let n = d.toLocaleDateString();
    res.data.dato = n;
    // console.log("Dato omskrevet", n);
  }

}

//* Kald til API */

// GET - alle
export const hentAlleEvents = async () => {
  // Min kode
  try {
    let res = await axios.get(eventAPI.baseUrl);
    OmskrivDato(res);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }

  // // Mariannes kode
  // let response = await axios.get(eventAPI.baseUrl).then(response => {return response.data}).catch(error => {return "error"})
  // return response;
};

// GET - ud fra id
export const hentEvent = async (eventData_id) => {
  try {
    let res = await axios.get(eventAPI.baseUrl + "/" + eventData_id);
    OmskrivDato(res);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};



// POST - opret
export const opretEvent = async (eventData) => {
  let formdata = new FormData(eventData);

  let response = axios
    .post(eventAPI.baseUrl + "/admin", formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};



// GET - søg
export const eventSoegSimple = async (soegeord) => {
  try {
    let res = await axios.get(eventAPI.baseUrl + "/soeg/" + soegeord);
    OmskrivDato(res);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
};


// // PATCH - ret
// export const retOevelse = async (oevelse_id, oevelseData, oevelseBillede) => {
//   try {
//      const formdata = new FormData();
//      formdata.append('oevelse', JSON.stringify(oevelseData)) // Lav json til string og send med
//      formdata.append('billede', oevelseBillede);

//     let res = await axios.patch(OevelseAPI.baseUrl + "/admin/" + oevelse_id, formdata);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };

// // DELETE - slet
// export const sletOevelse = async oevelse_id => {
//   try {
//     let res = await axios.delete(OevelseAPI.baseUrl + "/admin/" + oevelse_id);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };
