import React, { useState } from "react";

import Productcard from "./Card";
import { MDBCol } from "mdbreact";

function Food() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  // const[loading,setLoading]=useState(true)
  const YOUR_APP_ID = "24d9adf2";
  const YOUR_APP_KEY = "a68fcd64c00b757f73ea4fb4606825da";
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandeler = (e) => {
    // setLoading(true)
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
  return (
    <>
      <div className="mainfood pt-0">
        <center className="foodheader">
          <form onSubmit={submitHandeler}>
            <h2
              className="pt-0 pb-0 p-0"
              style={{
                color: " rgba(25, 189, 211, 1)",
                fontFamily: "inherit",
                fontSize: "40px",
                fontWeight: "500",
              }}
            >
              ORDER YOUR FOOD
            </h2>
            <p
              style={{
                color: "green",
                fontFamily: "inherit",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Getting Data From API By Using Fetch
            </p>
            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="For Example: Fried rice"
                  aria-label="Search"
                  value={search}
                  onChange={changeHandler}
                />
              </div>
            </MDBCol>

            <input
              type="submit"
              value="Search Your Food"
              className="btn btn-primary"
              name="search"
            />
          </form>
        </center>


        {data.length >= 1 ? (
          <Productcard fooddata={data} />
        ) : (
          <h4 className="text-center">No Data Loaded</h4>
        )}
      </div>
    </>
  );
}

export default Food;
