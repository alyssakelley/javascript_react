import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(initialDailyData);
        fetchAPI();
    }, []); // this will only happen once 

    const lineChart = (
        dailyData[0] ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: 
                    [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, 
                    {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5',
                        fill: true,
                    },
                    ],
                }}
            />
            ) : null
    );

    const barChart = (
        data.confirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: 
                    [{
                        label: 'People',
                        backgroundColor: 
                        [
                            'rgba(0, 0, 255, 0.5', // infected = blue
                            'rgba(255, 0, 0, 0.5', // recovered = green
                            'rgba(0, 255, 0, 0.5', // deaths = red
                        ], 
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options=
                {{
                    legend: { display: false},
                    title: { display: true, text:`Current state in ${country}`}
                }}
            />
        ) : null
    );

    // if there is a country chosen, then we display a bar chart for that country
    // otherwise display the line chart for the global values
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart} 
        </div>
    )
}

export default Chart;