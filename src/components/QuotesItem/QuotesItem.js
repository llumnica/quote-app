import React from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardFooter,
  CardBody,
  CardHeader,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Quotes.css";

const QuotesItem = (props) => {
  let navigate = useNavigate();

  const { data } = props;

  const handleGoToDetails = (id) => {
    navigate(`/quote/${id}`);
  };

  return (
    <Container>
      <Row>
        {data.length > 0 &&
          data.map((element) => {
            return (
              <Col sm="5" md="3" key={element.id} style={{padding: 10}}>
                <Card>
                  <CardHeader tag="h3">#{element.id}</CardHeader>
                  <CardBody>
                    <CardTitle>{element.body.slice(0, 70)} ...</CardTitle>
                    <CardText>{element.author}</CardText>
                    <Button className="btn_details"
                      color="dark"
                      onClick={() => handleGoToDetails(element.id)}
                    >
                     Show Details
                    </Button>
                  </CardBody>

                  <CardFooter className="text-muted">
                    <p>Tags: 
                    {element.tags.map((e) => {
                        return <span> {e}, </span>;
                    })}
                    </p>
                  </CardFooter>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default QuotesItem;
