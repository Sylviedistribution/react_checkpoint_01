import "./App.css";
import { Card, CardBody } from "react-bootstrap";
import Name from "./components/Name";
import Image from "./components/Image";
import Description from "./components/Description";
import Price from "./components/Price";
import Greetings from "./components/Greetings";
import Header from "./components/Header";
import Footer from "./components/Footer";

var firstname = prompt("Please enter your first name:");
//var firstname = "Test"

function App() {
  return (
    <>
      <Header firstname={firstname || ""} />
      <div className="d-flex justify-content-center mt-5 gap-5">
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <Name />
            <Image />
            <Description />
            <Price />
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <Name />
            <Image />
            <Description />
            <Price />
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <Name />
            <Image />
            <Description />
            <Price />
          </CardBody>
        </Card>
        <br />
      </div>
      <Greetings firstname={firstname || ""} />
      <Footer />
    </>
  );
}

export default App;
