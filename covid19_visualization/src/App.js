import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import covid19Image from './images/covid19_image2.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import MapDisplay from './components/MapDisplay/MapDisplay.js';

class App extends React.Component {

    state = {
        data: {},
        country: '',
        graphType: '',
    }

    // with componentDidMount, the async goes before it instead of after like usual functions
    async componentDidMount() {
        const fetchedData = await fetchData(); // fetchData is an asyncronous function so it needs an await
        console.log(fetchedData);
        this.setState({ data: fetchedData, graphType: "barGraph"});
    }

    handleCountryChange = async (country) => {
        // get the data
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // set the state
        this.setState({ data: fetchedData, graphType: "barGraph", country: country});
    }

    handleGraphPickerL() {
        console.log("Clicked line button");
        this.setState({
            graphType: "lineGraph"
        })
    }

    handleGraphPickerB() {
        console.log("Clicked bar button");
        this.setState({
            graphType: "barGraph"
        })
    }


    render() {
        let message = "Note: There is no daily data available for recovered cases.";
        const { data, country, graphType} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid19Image} alt="COVID-19"/>
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <ButtonGroup toggle className="mb-2">
                    <Button variant="light" size="sm" active>
                            <a onClick={() => this.handleGraphPickerL()}>Line Graph</a>
                            {/* <a> "Note: There is no daily data available for recovered cases."</a> */}
                        </Button>
                    <Button variant="light" size="sm" active>
                            <a onClick={() => this.handleGraphPickerB()}>Bar Graph</a>
                    </Button>
                </ButtonGroup>
                <Chart data = {data} country = {country} graphType = {graphType}/>
                {/* <h1>Here goes the map</h1> */}
                <a>{graphType=="lineGraph" ? message : null}</a>
            </div>
        )
    }
}

export default App;