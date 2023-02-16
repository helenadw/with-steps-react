import { Button, Input, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

const SavingTimeline = () => {
    let [purchasePrice, setPurchasePrice] = useState(0);
    console.log("purchasePrice: ", purchasePrice)
    let deposit = purchasePrice * 0.1;
    let mortgage = purchasePrice - deposit;
    let mortgageTerm = 35;
    let interestRate = 4.78;
    let monthlyPayment = mortgage * (interestRate / 100) / 12;
    let totalInterest = monthlyPayment * mortgageTerm * 12;
    let totalCost = mortgage + totalInterest;

    const handleChange = (event) => {
        setPurchasePrice(event.target.value);
        console.log("purchasePrice: ", purchasePrice)
    };

    return (
        <div>
            <Input />
            {/* <OutlinedInput size="md" /> */}
            {/* input that updates setPurchasePrice with the input value */}
            <Input placeholder="Type in here…" variant="outlined" onInput={(value) => setPurchasePrice(value)}/>
            <Input type="number" placeholder="Type in here…" variant="outlined" onChange={(value) => setPurchasePrice(value)}/>

            <h1>Saving Timeline</h1>
            <p>purchasePrice: {purchasePrice}</p>
            <p>deposit: {deposit}</p>
            <p>mortgage: {mortgage}</p>
            <p>mortgageTerm: {mortgageTerm}</p>
            <p>interestRate: {interestRate}</p>
            <p>monthlyPayment: {monthlyPayment}</p>
            <p>totalInterest: {totalInterest}</p>
            <p>totalCost: {totalCost}</p>
        </div>
    );

};

export default SavingTimeline;
