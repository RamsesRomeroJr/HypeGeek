import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './pricing.css'
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

function Pricing ({sneakerInfo}){
    let lowestPrices = sneakerInfo.lowestResellPrice
    const resellPrices = sneakerInfo.resellPrices
    let stockXPrices=[];
    let goatPrices = []
    let flightClubPrices = []
    let stadiumGoodsPrices = []

    const priceArrayCreator = (priceObj) =>{
        // let key = 4;
        // let objLength= Object.keys(priceObj).length
        let prices = [];

        for(let i=4; i<15; i+=0.5){
            prices.push(priceObj[i])
        }
        return prices;
    }

    if(resellPrices.stockX) {stockXPrices = priceArrayCreator(resellPrices.stockX)};
    if(!resellPrices.stockX) {
        for(let i=4; i<15; i+=0.5){
            stockXPrices.push(0)
        }

    };

    if(resellPrices.goat) {goatPrices = priceArrayCreator(resellPrices.goat)};
    if(!resellPrices.goat) {
        for(let i=4; i<15; i+=0.5){
            goatPrices.push(0)
        }

    };

    if(resellPrices.flightClub) {flightClubPrices = priceArrayCreator(resellPrices.flightClub)};
    if(!resellPrices.flightClub) {
        for(let i=4; i<15; i+=0.5){
            flightClubPrices.push(0)
        }

    };

    if(resellPrices.stadiumGoods) {stadiumGoodsPrices = priceArrayCreator(resellPrices.stadiumGoods)};
    if(!resellPrices.stadiumGoods) {
        for(let i=4; i<15; i+=0.5){
            stadiumGoodsPrices.push(0)
        }

    };

    const classes = useStyles()

    return(
        // <div>
        //     {Object.keys(lowestPrices).map((keyName, i) => (
        //         <div>
        //             <h3> ${lowestPrices[keyName]} from {keyName} </h3>
        //         </div>
        //     ))}
        // </div>
        <TableContainer component={Paper} className='tableContainer'>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>US Sizes: </TableCell>
                        <TableCell> 4 </TableCell>
                        <TableCell> 4.5 </TableCell>
                        <TableCell> 5 </TableCell>
                        <TableCell> 5.5 </TableCell>
                        <TableCell> 6 </TableCell>
                        <TableCell> 6.5 </TableCell>
                        <TableCell> 7 </TableCell>
                        <TableCell> 7.5 </TableCell>
                        <TableCell> 8 </TableCell>
                        <TableCell> 8.5 </TableCell>
                        <TableCell> 9 </TableCell>
                        <TableCell> 9.5 </TableCell>
                        <TableCell> 10 </TableCell>
                        <TableCell> 10.5 </TableCell>
                        <TableCell> 11 </TableCell>
                        <TableCell> 11.5 </TableCell>
                        <TableCell> 12 </TableCell>
                        <TableCell> 12.5 </TableCell>
                        <TableCell> 13 </TableCell>
                        <TableCell> 13.5 </TableCell>
                        <TableCell> 14 </TableCell>
                        <TableCell> 14.5 </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">
                            <a href={sneakerInfo.resellLinks.stockX} target="_blank">
                            <Logo src={stockXLogo}/>
                            </a>
                        </TableCell>
                        {stockXPrices.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i}>$-</TableCell>
                            }
                            return <TableCell key={i} >${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={sneakerInfo.resellLinks.goat} target="_blank">
                                <Logo src={goatLogo}/>
                            </a>
                        </TableCell>
                        {goatPrices.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i} style={{color:'green'}}>$-</TableCell>
                            }
                            return <TableCell key={i} style={{color:'green'}}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={sneakerInfo.resellLinks.flightClub} target="_blank">
                                <FlightLogo src={flightClubLogo}/>
                            </a>
                        </TableCell>
                        {flightClubPrices.map((price, i)=>{
                            if(!price){
                                return <TableCell key={i}>$-</TableCell>
                            }
                            return <TableCell key={i} >${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">
                            <a href={sneakerInfo.resellLinks.stadiumGoods} target="_blank">
                                <Logo src={stadiumGoodsLogo}/>
                            </a>
                        </TableCell>
                        {stadiumGoodsPrices.map((price, i)=>{
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

export default Pricing;
