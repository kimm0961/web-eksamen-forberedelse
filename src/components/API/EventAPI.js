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
  try {
    let res = await axios.get(eventAPI.baseUrl);
    OmskrivDato(res);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Fejl:", error);
  }
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
