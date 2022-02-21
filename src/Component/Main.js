import React from "react";
import "./Main.css";
import { Container, Row, Col } from 'reactstrap';
import BlogCard from "./BlogCard";

class Main extends React.Component{
    render(){
        return(
            <Container fluid="md"  className="Main pt-3 pb-4">
                 <Row>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                 </Row>
                 <Row>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                 </Row>
                 <Row>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                 </Row>
                 <Row>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                     <Col sm="6" className="post my-4"><BlogCard/></Col>
                 </Row>
                 
            </Container>
        )
    }
}
export default Main;