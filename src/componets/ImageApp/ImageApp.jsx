import React, { useState } from "react";
import axios from "axios";
import ImageGallery from "./ImageGallery";
import { MDBCol } from "mdbreact";

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

function ImageApp() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((Response) => setData(Response.data.photos.photo));

    // .then((Response=>console.log(Response)))
  };
  return (
    <>
      <center className="mainimage pt-0">
        <form className="justify-content-center " onSubmit={submitHandeler}>
          <h2
            className="pt-5 pb-1"
            style={{ color: "#0090f7", fontSize: "40px", fontWeight: "600" }}
          >
            IMAGE-GALARY
          </h2>
          <p
            className="pt-2 pb-3"
            style={{ color: "#7873ba", fontSize: "22px", fontWeight: "500" }}
          >
            Getting Different Images From API By Your Serach Using "Axios"{" "}
          </p>
          <MDBCol md="6">
            <div className="active-pink-3 active-pink-4 mb-4 ">
              <input
                className="form-control"
                type="text"
                placeholder="For Example: Animals"
                aria-label="Search"
                value={search}
                onChange={changeHandler}
              />
            </div>
          </MDBCol>
          <br />
          <br />
          <input
            type="submit"
            value="Search Your Favorate image"
            className="btn btn-danger mb-5"
            name="search"
           
          />
        </form>
      </center>
      <br />
      {data.length > 1 ? (
        <ImageGallery data={data} />
      ) : (
        <h4 className="text-center mb-5 pt-5 ">No Data Loaded</h4>
      )}
    </>
  );
}

export default ImageApp;
