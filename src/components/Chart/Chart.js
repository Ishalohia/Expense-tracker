import React from 'react';
import './Chart.css'
import  ChartBar from './ChartBar';
const Chart = props =>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className='chart'>
        { props.dataPoints.map(dataPoint => 
            <ChartBar
            key={dataPoint.label}  // every chartbar has its own unique label therefore we can use label as a unique id
             value={dataPoint.value}
             maxValue={totalMax} 
             label={dataPoint.label}
             />
        )}
        </div>
    )
}
export default Chart;