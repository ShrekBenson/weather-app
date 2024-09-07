export default async function weatherDataFetch(city, range, format) {
  try {    
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${format}&include=${range}&key=UQ2J9DAYLJ8UC4CY9DD4SDWDH&contentType=json`, { mode: 'cors' })

    const data = await response.json();
    
    return data;
  } catch {
    alert('The city does not exist or cannot be found');    
  }  
}