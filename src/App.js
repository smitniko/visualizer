import React, { Component } from 'react';
import './App.css';
import './data/data.js';
import { chartData } from './data/data.js';
import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Column2D from "fusioncharts/fusioncharts.charts";


ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
      subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
      xAxisName: "Country",           //Set the x-axis name
      yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
      numberSuffix: "K",
      theme: "fusion"                 //Set the theme for your chart
    },
    // Chart Data - from step 2
    data:  chartData 
  }
};


class Chart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Visualizer Application</h1>
        <div className="background-img">
          <img src= "/assets/images/bg.jpg" className="img-1" alt="main_img" />


        </div>
        <p>
          Lets Get That Data! 
          <Chart/>
        </p>
      </header>
      
    </div>
  );
}

export default App;
