import product from "../product.js";
import { CardImg } from "react-bootstrap";


function Image() {
  return <CardImg variant="top" src={product.pathImage} alt={product.name} />;
}

export default Image;
