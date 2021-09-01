window.onload = () => {
  const fetchButton = document.getElementById("fetch");
  fetchButton.addEventListener("click", () => {
    const countryName = document.getElementById("country-name").value;
    // use dom to get user input
    console.log(countryName);
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

    axios.get(url).then((responseFromAPI) => {
      console.log(responseFromAPI, responseFromAPI.data[0].flag);
      document.getElementById("flag").src = responseFromAPI.data[0].flag;
    });
  });
};
