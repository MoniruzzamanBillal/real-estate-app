export const baseUrl = "https://bayut.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3627135bedmsh574d5d205a73f75p18b6a7jsn901b74b435f7",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await fetch(url, options);
  const data = await response.json();
  let responseData = data.hits;

  return responseData;
};
