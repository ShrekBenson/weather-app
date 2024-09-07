import weatherDataFetch from "../utils/data-fetch";
import setConditionIcon from "../utils/set-icon";
import moment from "moment";

const cityName = document.getElementById('cityName');
const cityTemperature = document.getElementById('cityTemperature');
const citySensation = document.getElementById('thermalSensation');
const probPrecipitation = document.getElementById('probPrecipitation');
const humidity = document.getElementById('humidity');
const weatherConditionIcon = document.getElementById('weatherConditionIcon');

const weatherCondition = document.getElementById('weatherCondition');
const dateTime = document.getElementById('dateTime');

const htmlElementsDay = document.querySelectorAll('.weather-day');
const htmlTableDays = document.querySelectorAll('tr.info-day');

export default async function setData(city = 'guadalajara', range = 'current', format = 'metric') {
  try {
    const data = await weatherDataFetch(city, range, format);
    const currentDayData = data.days[0];
    console.log(data);

    cityName.textContent = data.resolvedAddress;
    cityTemperature.textContent = data.currentConditions.temp;
    citySensation.textContent = `${data.currentConditions.feelslike}°`;
    probPrecipitation.textContent = `${data.currentConditions.precipprob}%`;
    humidity.textContent = `${data.currentConditions.humidity}%`;
    setConditionIcon(weatherConditionIcon, data.currentConditions);    

    weatherCondition.textContent = data.currentConditions.conditions;
    dateTime.textContent = moment(currentDayData.datetime).format('MMMM Do YYYY');    

    htmlElementsDay.forEach((day, index) => {
      const dayData = data.days[index];

      const dayName = day.querySelector('.weather-day__name');
      const dayIcon = day.querySelector('.weather-day__icon');
      const dayTemp = day.querySelector('.weather-day__temp');      

      dayName.textContent = moment(dayData.datetime).format('ddd[.]');
      setConditionIcon(dayIcon, dayData);
      dayTemp.textContent = `${dayData.feelslikemax}°. ${dayData.feelslikemin}°`;
    });
    
    htmlTableDays.forEach((day, index) => {
      const dayData = data.days[index];      

      const dayName = day.querySelector('.info-day__name');
      const dayPreciProb = day.querySelector(".info-day__preprob");
      const dayTempMax = day.querySelector(".info-day__tempmax");
      const dayTempMin = day.querySelector(".info-day__tempmin");
      const dayDescription = day.querySelector(".info-day__description");      

      dayName.textContent = dayData.datetime;
      dayPreciProb.textContent = `${dayData.precipprob}%`;
      dayTempMax.textContent = `${dayData.tempmax}°`;
      dayTempMin.textContent = `${dayData.tempmin}°`;
      dayDescription.textContent = dayData.description;
    });
  } catch {
    return;
  }
}