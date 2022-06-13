import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Button, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

export default function QuotesDetails() {
  const [quoteDetails, setQuoteDetails] = useState({});

  let params = useParams();

  // const config = {
  //   headers: { 'Authorization': "Bearer 20f63fed3e1e7cca24224174cffb0a2d" }
  // };

  useEffect(() => {
    axios
      .get(`https://favqs.com/api/quotes/${params.id}`, { headers:{"Authorization" : `Bearer 20f63fed3e1e7cca24224174cffb0a2d`} })
      .then((res) => {
        console.log(res);
        setQuoteDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);

  const handleAddToFavourite = (e) => {
    const quotes =
      localStorage.getItem("quotes") !== null
        ? JSON.parse(localStorage.getItem("quotes"))
        : [];

    let isQuoteInList = quotes.findIndex(
      (element) => element.id === quoteDetails?.id
    );
    if (isQuoteInList == -1) {
      toast.success("Quote was added to your favourite list");
      localStorage.setItem("quotes", JSON.stringify([...quotes, quoteDetails]));
    } else {
      toast.warning("Quote already exists");
    }
  };

  return (
    <Container className="mt-5">
      <div>
        <div className="jumbotron">
          <h3 className="display-6">Author: {quoteDetails?.author}</h3>
          <p className="lead my-5">{quoteDetails?.body}</p>
          <p>Tags: {quoteDetails?.tags}</p>
          <hr className="my-4" />
          <Row>
            <Col xs="6">
              <h5>Qoute: #{quoteDetails?.id}</h5>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
              <Button onClick={() => handleAddToFavourite(quoteDetails?.id)}>
                Add To Favourites
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
}
