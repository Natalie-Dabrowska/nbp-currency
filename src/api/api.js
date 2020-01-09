const API_URL = "http://api.nbp.pl/api/exchangerates/tables/a";

const getCurrency = () =>
  new Promise(resolve => {
    fetch(`${API_URL}`, { method: "GET" }).then(response =>
      resolve(response.json())
    );
  });

  export default {
      getCurrency
  };