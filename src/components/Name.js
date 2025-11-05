import product from "../product.js";
import { CardTitle } from "react-bootstrap";

function Name() {
  return <CardTitle>{product.name}</CardTitle>;
}

export default Name;
