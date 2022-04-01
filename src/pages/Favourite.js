import React, { useState, useEffect } from "react";
import { Button, Table, Container } from "reactstrap";

const getFavouritesFromLocalStorage = () => {
  return localStorage.getItem("quotes") !== null
    ? JSON.parse(localStorage.getItem("quotes"))
    : [];
};

export default function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(getFavouritesFromLocalStorage());
  }, []);

  const handleDeleteFromFavourite = (id) => {
    const filtered_favourites = favourites.filter((quote) => quote.id !== id);
    setFavourites(filtered_favourites);
    localStorage.setItem("quotes", JSON.stringify(filtered_favourites));
  };

  return (
    <div>
      <Container className="mt-5">
        <h3 className="my-5">Favourites List:</h3>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Body</th>
              <th>Author</th>
              <th>Link</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favourites.length
              ? favourites.map((element) => (
                  // <div>
                  //   <h1>{element.body}</h1>
                  //   <Button onClick={() => handleDeleteFromFavourite(element?.id)}>
                  //     Delete from Favourites
                  //   </Button>

                  // </div>
                  <tr>
                    <th scope="row">{element.id}</th>
                    <td className="w-50">{element.body}</td>
                    <td>{element.author}</td>
                    <td>Table cell</td>
                    <td className="float-right">
                      <Button
                        onClick={() => handleDeleteFromFavourite(element?.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              : "Your favourite list is empty"}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
