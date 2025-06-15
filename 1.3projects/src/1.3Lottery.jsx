import { useState } from "react"
import "./1.4lottery.css"
import {genTicket,sum} from "./1.4Helper"


export default function Lottery (){
    let [ticket,setTicket]= useState(genTicket(3));
    let isWinning = sum(ticket)===15;
    let buyTicket =()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
            <button onClick={buyTicket}>Buy new ticket</button>
        </div>
    )
}


// changes- make the lottery of n digit number
// lifting state up- when we want to share a state 