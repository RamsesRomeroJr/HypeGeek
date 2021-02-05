import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

//   function createData(size, size3, size35 ) {
//     return { name, calories, fat, carbs, protein };
//   }

function Pricing ({sneakerInfo}){
    let lowestPrices = sneakerInfo.lowestResellPrice
    const resellPrices = sneakerInfo.resellPrices

    const priceArrayCreator = (priceObj) =>{
        let key = 4;
        let objLength= Object.keys(priceObj).length
        let prices = [];

        for(let i=4; i<15; i+=0.5){
            prices.push(priceObj[i])
        }
        return prices;
    }


    let stockXPrices = priceArrayCreator(resellPrices.stockX)
    let goatPrices = priceArrayCreator(resellPrices.goat)
    let flightClubPrices = priceArrayCreator(resellPrices.flightClub)
    let stadiumGoodsPrices = priceArrayCreator(resellPrices.stadiumGoods)

    priceArrayCreator(resellPrices.stockX)
    const classes = useStyles()

    return(
        // <div>
        //     {Object.keys(lowestPrices).map((keyName, i) => (
        //         <div>
        //             <h3> ${lowestPrices[keyName]} from {keyName} </h3>
        //         </div>
        //     ))}
        // </div>
        <TableContainer component={Paper}>
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
                        <TableCell align="left">StockX</TableCell>
                        {stockXPrices.map((price, i)=>{
                            return <TableCell key={i}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Goat</TableCell>
                        {goatPrices.map((price, i)=>{
                            return <TableCell key={i}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">flightClub</TableCell>
                        {flightClubPrices.map((price, i)=>{
                            return <TableCell key={i}>${price}</TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">stadiumGood</TableCell>
                        {stadiumGoodsPrices.map((price, i)=>{
                            return <TableCell key={i}>${price}</TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Pricing;
