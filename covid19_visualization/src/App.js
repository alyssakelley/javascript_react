import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19Image from './images/covid19_image2.png';
// import MapDisplay from './components/MapDisplay/MapDisplay.js';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    // with componentDidMount, the async goes before it instead of after like usual functions
    async componentDidMount() {
        const fetchedData = await fetchData(); // fetchData is an asyncronous function so it needs an await
        console.log(fetchedData);
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        // get the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // set the state
        this.setState({ data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid19Image} alt="COVID-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = {data} country = {country} />
                <h1>Here goes the map</h1>
            </div>
        )
    }
}

export default App;