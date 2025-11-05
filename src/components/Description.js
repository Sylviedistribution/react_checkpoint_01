import product from '../product.js'
import { CardText } from "react-bootstrap";

function Description() {
    return <CardText>{product.description}</CardText>;

}
export default Description;
