import React from 'react';
import {Line} from 'react-chartjs-2'

const LineChart = () => {

    return(
        <div>
            <Line
            data={{
                labels: [ 'Feb 07 19:26:46 -05', 'Feb 07 19:27:25 -05', 'Feb 07 19:27:33 -05', 'Feb 08 02:23:30 -05', 'Feb 08 02:23:43 -05', 'Feb 08 02:37:21 -05'],
                datasets:[
                    {
                        label:'Lowest Price',
                        data: [367, 360, 365, 368, 368, 367],
                        backgroundColor: 'rgba(35,104,155,0.4)',
                        borderColor: '23689b',
                        borderWidth:1
                    },
                    {
                        label: 'StockX Lowest Price',
                        data:[360,362,367,368,360,350],
                        backgroundColor:'rgba(81,194,213,0.4)',
                        borderColor: '#bbf1fa'
                    },
                    {
                        label: 'Goat Lowest Price',
                        data:[379,379,379,370,360,368],
                        backgroundColor:'rgba(81,194,213,0.4)',
                        borderColor: '51c2d5'
                    },
                    {
                        label: 'Flight Lowest Price',
                        data:[370,370,370,370,368,368],
                        backgroundColor:'rgba(236,70,70,0.4)',
                        borderColor: 'ec4646'
                    },
                    {
                        label: 'StadiumGoods Lowest Price',
                        data:[367, 360, 365, 368, 368, 367],
                        backgroundColor:'rgba(102,63,63,0.4)',
                        borderColor: '663f3f'
                    },
                ]
            }}
            height={20}
            width={40}
            />
        </div>
    )
}

export default LineChart
