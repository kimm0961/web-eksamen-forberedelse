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
export const hentEvent = (eventID) => {
  let response = axios
    .get(eventAPI.baseUrl + "/" + eventID) // http://localhost:5021/event/5f3fd2207e525a19cce3b687
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// PUT - ret
export const retEvent = (event_id, eventData) => {
  let formdata = new FormData(eventData);

  let response = axios
    .put(eventAPI.baseUrl + "/admin/" + event_id, formdata, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// DELETE - slet
export const sletEvent = async (event_id) => {
  try {
    let res = await axios.delete(eventAPI.baseUrl + "/admin/" + event_id, { withCredentials: true });
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




// // DELETE - slet
// export const sletOevelse = async oevelse_id => {
//   try {
//     let res = await axios.delete(OevelseAPI.baseUrl + "/admin/" + oevelse_id);
//     return res.data;
//   } catch (error) {
//     console.log("Fejl:", error);
//   }
// };
