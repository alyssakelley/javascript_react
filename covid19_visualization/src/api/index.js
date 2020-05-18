import axios from 'axios';
const url = 'https://covid19.mathdro.id/api'; // link to the api

export const fetchData = async (country) => {
    let changeableURL = url; // initially setting the URL to the basic API URL because no country has been selected yet 
    if(country)
    {
        // this is indicating that a country has been selected, so we want to build a new URL to the API for that country
        changeableURL = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        //console.log(response);

        // creating a javascript object to hold all of the useful data from the api
        // the api contains a lot of random data that does not have as revelant information
        // so we pull out the most import pieces: confirmed, recovered, deaths, and when it 
        // was last updated. This could also be done when creating the data var as so:
        // const { data: { confirmed, recovered, daths, lastUpdate} } = await axios.get(url);
        // const modifiedData = {
        //     confirmed: data.confirmed,
        //     recovered: data.recovered,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        return { confirmed, recovered, deaths, lastUpdate };
    } catch(error) {
        return error;
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        console.log(data);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);
        // console.log(response);
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}