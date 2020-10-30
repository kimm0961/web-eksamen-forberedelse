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

export const hentAlleEvents = () => {
  let response = axios
    .get(eventAPI.baseUrl)
    .then((response) => {
      // OmskrivDato(response);
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};

// GET - ud fra id
export const hentEvent = (eventID) => {
  let response = axios
    .get(eventAPI.baseUrl + "/" + eventID)
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
export const eventSoegSimple = (soegeord) => {
  let response = axios
    .get(eventAPI.baseUrl + "/soeg/" + soegeord)
    .then((response) => {
      OmskrivDato(response);
      return response.data;
    })
    .catch((error) => {
      return "error";
    });

  return response;
};
