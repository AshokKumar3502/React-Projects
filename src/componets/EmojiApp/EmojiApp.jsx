import { MDBCol } from "mdbreact";
import React, { useEffect, useState } from "react";
import "./EmojiApp.css";
import EmojiData from "./emoji.json";

const EmojiApp = () => {
  const [search, setSearch] = useState("man");
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const newData = EmojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <> 
    <div className="row">
      <div className="col-md-12 justify-content-center mainemoji">
        <h1
          className="pt-3 pb-3 text-center"
          style={{
            color: " rgba(25, 189, 211, 1)",
            fontFamily: "inherit",
            fontSize: "40px",
            fontWeight: "500",
          }}
        >
          Emoji Search
        </h1>
        <p
          className=" text-center"
          style={{
            color: "green",
            fontFamily: "inherit",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Getting Emoji Data From Localfile By Using UseEffect & And You Can
          Copy To Your Clipboard
        </p>
        <MDBCol md="12">
          <div className="active-pink-3 active-pink-4 mb-4 d-flex justify-content-center">
            <input
              className="form-control mt-5 w-50"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={changeHandler}
            />
          </div>
        </MDBCol>
              <div className="row ">
        {data.map((emoji) => (
          <div className="col-md-1  col-3 col-sm-2 justify-content-center mainemojipic no-gutters gx-0 d-flex pt-5 ">
            <div className="emoji" key={emoji.title}>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(emoji.symbol);
                  alert("Emoji Copied");
                }}
              >
                <span style={{ fontSize: "40px",display:"flex" }}>{emoji.symbol}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
};

export default EmojiApp;
