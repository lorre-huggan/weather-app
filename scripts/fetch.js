const key = '55f468381d80edb97962f1d77945ab85';

// const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}`;

// fetch(baseURL)
//   .then((data) => {
//     console.log(data.json());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const requestCity = async (city) => {
  const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&appid=${key}`;
  const response = await fetch(baseURL + query);
  const data = await response.json();
  return data;
};
