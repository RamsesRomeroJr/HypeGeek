import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2'

const LineChart = () => {
    const dataInfo = useSelector((state)=> state.data.data)

    const dates = []
    const lowestPrice = [];
    const stockXLowest = [];
    const goatLowest = [];
    const flightClubLowest = [];
    const stadiumGoodsLowest = [];

    if(dataInfo.length){
        dataInfo.map( data => {
            dates.push(data.createdAt)

            lowestPrice.push(data.lowestPrice)
            stockXLowest.push(data.stockxLow)
            goatLowest.push(data.goatLow)
            flightClubLowest.push(data.flightClubLow)
            stadiumGoodsLowest.push(data.stadiumGoodsLow)
        })
    }

    return(
        <div>
            <Line
            data={{
                labels: [ ...dates],
                datasets:[
                    {
                        label:'Lowest Price',
                        data: [...lowestPrice],
                        backgroundColor: 'rgba(35,104,155,0.4)',
                        borderColor: '23689b',
                        borderWidth:1
                    },
                    {
                        label: 'StockX Lowest Price',
                        data:[...stockXLowest],
                        backgroundColor:'rgba(81,194,213,0.4)',
                        borderColor: '#bbf1fa'
                    },
                    {
                        label: 'Goat Lowest Price',
                        data:[...goatLowest],
                        backgroundColor:'rgba(81,194,213,0.4)',
                        borderColor: '51c2d5'
                    },
                    {
                        label: 'Flight Lowest Price',
                        data:[...flightClubLowest],
                        backgroundColor:'rgba(236,70,70,0.4)',
                        borderColor: 'ec4646'
                    },
                    {
                        label: 'StadiumGoods Lowest Price',
                        data:[...stadiumGoodsLowest],
                        backgroundColor:'rgba(102,63,63,0.4)',
                        borderColor: '663f3f'
                    },
                ]
            }}
            height={350}
            width={500}
            options={{
                maintainAspectRatio:false
            }}
            />
        </div>
    )
}

export default LineChart
