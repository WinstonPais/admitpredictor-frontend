import ReactEcharts from "echarts-for-react";
import classes from './BarGraph.module.css';

const Radar = (props) => {
    
    const option = {
        xAxis: {
            type: 'category',
            data: props.getSelectedUnisList()
        },
        yAxis: {
            type: 'value'
        },
        toolbox: {
            show: true,
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            data: props.getBarGData(),
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }]
    };
    // console.log(props.getSelectedUnisList())
    // console.log(props.getBarGData());

    return (
        <div style={{marginBottom:'35vh'}}>
        <select style={{marginBottom:'5vh'}} className={["form-control", classes.darkmodeDropdown].join(' ')} onChange={(e) => {
            // debugger;
            props.setBarGDropDownValue(e.target.value);
            props.callBarGraphSet(e.target.value);
        }}>
            <option>Rating</option>
            <option>AcceptanceRate</option>
            <option>GraduationRate</option>
            <option>ApplicationFee</option>
            <option>NetPrice</option>
            <option>TotalAidAwardedPerYear</option>
            <option>Total Faculty</option>
            <option>Student/Faculty Ratio</option>
        </select>
            <ReactEcharts  option={option} theme={"dark"} opts={{height:"500"}}/>
        </div>
    )
}

export default Radar
