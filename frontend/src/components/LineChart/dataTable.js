import React from "react";
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './dataTable.css'
import stockXLogo from './stockx-vector-logo.png'
import goatLogo from "./goat-sneaker-logo.png"
import flightClubLogo from "./flightClub-Logo.jpg"
import stadiumGoodsLogo from "./Stadium-goods.png"

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Logo = styled.img`
    height:25px;
`

const FlightLogo = styled.img`
    height:15px;
`

const LowestTitle = styled.h3`
    font-family: 'Staatliches', cursive;
    font-size:15px;
    margin:0%;
`

function DataTable(){
    const dataInfo = useSelector((state)=> state.data.data)
    const links = useSelector((state)=> state.sneaker.sneakerInfo.resellLinks);

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

    const classes = useStyles()

    return(
        <TableContainer component={Paper} className='tableContainer'>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dates:</TableCell>
                        {dates.map((date, i)=>{
                            if(!date){
                                return <TableCell key={i}>Not Enough Data</TableCell>
                            }
                            return <TableCell key={i}>{date}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left'>
                            <LowestTitle>Lowest Price</LowestTitle>
                        </TableCell>
                        {lowestPrice.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i} style={{color:'green'}}>$-</TableCell>
                            }
                            return <TableCell key={i} style={{color:'green'}}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={links.stockX} target="_blank">
                            <Logo src={stockXLogo}/>
                            </a>
                        </TableCell>
                        {stockXLowest.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i}>$-</TableCell>
                            }
                            return <TableCell key={i} >${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={links.goat} target="_blank">
                                <Logo src={goatLogo}/>
                            </a>
                        </TableCell>
                        {goatLowest.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i} style={{color:'green'}}>$-</TableCell>
                            }
                            return <TableCell key={i} style={{color:'green'}}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={links.flightClub} target="_blank">
                                <FlightLogo src={flightClubLogo}/>
                            </a>
                        </TableCell>
                        {flightClubLowest.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i}>$-</TableCell>
                            }
                            return <TableCell key={i} >${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={links.stadiumGoods} target="_blank">
                                <Logo src={stadiumGoodsLogo}/>
                            </a>
                        </TableCell>
                        {stadiumGoodsLowest.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i} style={{color:'green'}}>$-</TableCell>
                            }
                            return <TableCell key={i} style={{color:'green'}}>${price}</TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default DataTable;
