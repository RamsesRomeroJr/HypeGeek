import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2'
import styled from 'styled-components'


const LineGraphContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
`

const LineChart = () => {
    const dataInfo = useSelector((state)=> state.data.data)

    const dates = []
    const lowestPrice = [];
    const stockXLowest = [];
    const goatLowest = [];
    const flightClubLowest = [];
    const stadiumGoodsLowest = [];
    let change = 0;

    if(dataInfo != null){
        dataInfo.map( data => {
            if(change > data.lowestPrice || change < data.lowestPrice){
                const dateString = `${data.createdAt}`

                const formatDate = (dateString) =>{
                    const options = {year: "numeric", month: "numeric", day: "numeric"}
                    return new Date(dateString).toLocaleDateString(undefined, options)
                }
                dates.push(formatDate(dateString))

                lowestPrice.push(data.lowestPrice)
                stockXLowest.push(data.stockxLow)
                goatLowest.push(data.goatLow)
                flightClubLowest.push(data.flightClubLow)
                stadiumGoodsLowest.push(data.stadiumGoodsLow)
            }


            change = data.lowestPrice
        })
    }

    return(
        <LineGraphContainer>
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
            height={450}
            width={900}
            options={
                {
                maintainAspectRatio:false
            },
            {
                scales:{
                    xAxes: [{

                    }]
                }
            }
        }
            />
        </LineGraphContainer>
    )
}

export default LineChart
