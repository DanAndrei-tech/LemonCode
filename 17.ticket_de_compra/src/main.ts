import "./style.css";

import { calculaTicket } from "./ticket-compra";
import { productos } from "./datos";

const ticketFinal = calculaTicket(productos);
console.log(ticketFinal);
