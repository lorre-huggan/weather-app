const form = document.querySelector('.change-location');
const cityValue = document.querySelector('.change-location input');
const cityName = document.querySelector('.details h5');
const card = document.querySelector('.card-body');
const dayNight = document.querySelector('.time img');
const cardWrapper = document.querySelector('.card-wrapper');

const kelCon = (kelvin) => {
  celcius = Math.round(kelvin - 273.15);
  return celcius;
};

const isDay = (icon) => {
  if (icon.includes('d')) {
    return true;
  } else {
    return false;
  }
};

const updateWeatherApp = (city) => {
  // console.log(city);
  cityName.textContent = city.name;
  const imageName = city.weather[0].icon;
  const iconSrc = `http://openweathermap.org/img/w/${imageName}.png`;
  card.innerHTML = ` 
  
     
        </div>
        <div class="icon"><img src="" alt=""/></div>
        <div class="details">
          <h5>${city.name}</h5>
          <div class="weather">${city.weather[0].description}</div>
          <div>
            <span>${kelCon(city.main.temp)}</span>
            <span>&deg;C</span>
          </div>
        </div>`;

  if (isDay(imageName)) {
    // console.log('day');
    dayNight.setAttribute('src', 'img/sun.svg');
  } else {
    // console.log('night');
    dayNight.setAttribute('src', 'img/moon.svg');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const citySearched = cityValue.value.trim();

  form.reset();

  cardWrapper.classList.remove('card-wrapper');

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((err) => {
      console.log(err);
    });

  //set local storage
  localStorage.setItem('place', citySearched);
});

if (localStorage.getItem('place')) {
  requestCity(localStorage.getItem('place'))
    .then((data) => updateWeatherApp(data))
    .catch((err) => console.log(err));
}
