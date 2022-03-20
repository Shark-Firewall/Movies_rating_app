import React from "react";

export default function Movies() {
  return (
    <>
      <h2 className="text-center p-2">Trending</h2>

      <div className="card" style={{ width: "18rem" }}>
        <img src="#" className="card-img-top" alt="card_img" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary">
            Add Favourite
          </a>
        </div>
      </div>
    </>
  );
}
