export const fetchLocation = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let currentWeather = data.weather[0].id;
      const weatherEmoji = document.createElement("p");
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector(
        "#weather span:first-child"
      );
      const weatherImg = () => {
        if (currentWeather >= 801)
          return (weatherEmoji.InnerText = "âī¸");
        if (currentWeather === 800)
          return (weatherEmoji.InnerText = "âī¸");
        if (currentWeather >= 200 && currentWeather < 233)
          return (weatherEmoji.InnerText = "đŠī¸");
        if (currentWeather >= 300 && currentWeather < 322)
          return (weatherEmoji.InnerText = "đ§ī¸");
        if (currentWeather >= 500 && currentWeather < 532)
          return (weatherEmoji.InnerText = "đ§ī¸");
        if (currentWeather >= 600 && currentWeather < 623)
          return (weatherEmoji.InnerText = "âī¸");
        if (currentWeather >= 701 && currentWeather < 782)
          return (weatherEmoji.InnerText = "đĢī¸");
        if ((currentWeather = 781))
          return (weatherEmoji.InnerText = "đĒī¸");
        else return "";
      };

      city.innerText = ` / ${data.name}`;
      weather.innerText = `${
        data.weather[0].main
      } ${weatherImg()} / ${data.main.temp}Â°C`;
    });
};
