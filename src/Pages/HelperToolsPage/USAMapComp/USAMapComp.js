import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const USAMapComp = () => {

    useEffect(() => {
        
        var dom = document.getElementById("main");
        var myChart = echarts.init(dom, "dark", {height:"500"});
        var option;

        function a (usaJson) {

            echarts.registerMap('USA', usaJson, {
                Alaska: {
                    left: -131,
                    top: 25,
                    width: 15
                },
                Hawaii: {
                    left: -110,
                    top: 28,
                    width: 5
                },
                'Puerto Rico': {
                    left: -76,
                    top: 26,
                    width: 2
                }
            });
            option = {
                title: {
                    text: 'USA Population Estimates (2012)',
                    left: 'right'
                },
                tooltip: {
                    trigger: 'item',
                    showDelay: 0,
                    transitionDuration: 0.2,
                    formatter: function (params) {
                        var value = (params.value + '').split('.');
                        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                        return params.seriesName + '<br/>' + params.name + ': ' + value;
                    }
                },
                visualMap: {
                    left: 'right',
                    min: 70,
                    max: 200,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
                    text: ['High', 'Low'],
                    calculable: true
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
                series: [
                    {
                        name: 'USA PopEstimates',
                        type: 'map',
                        roam: true,
                        map: 'USA',
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        textFixed: {
                            Alaska: [20, -20]
                        },
                        data: require('./LivingCost.json')
                    }
                ]
            };

            myChart.setOption(option);
        }
        a(require('./data.json'))

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    },[])

    return (
        <div style={{marginTop:'15vh', marginBottom:'8vh'}} id="main">
            
        </div>
    )
}

export default USAMapComp
