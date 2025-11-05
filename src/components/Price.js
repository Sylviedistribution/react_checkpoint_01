import product from "../product.js";
import { CardFooter } from "react-bootstrap";

function Price() {
  return (
    <CardFooter>
      <strong>Prix :</strong> {product.price}
    </CardFooter>
  );
}

export default Price;
