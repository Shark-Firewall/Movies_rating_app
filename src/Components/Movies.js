import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movies() {
  const [Current, setCurrent] = useState(1);
  const [data, setData] = useState([]);

  const inc = () => {
    setCurrent(Current + 1);
  };

  const dec = () => {
    setCurrent(Current - 1);
  };

  useEffect(() => {
    fetchData();
  }, [Current]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f5d9e597201b63fbe86867b16ee95908&language=en-US&page=${Current}`
    );
    setData(response.data.results);
  };

  return (
    <>
      <h2 className="text-center p-2">
        <strong>Trending</strong>
      </h2>
      <div className="fluid-container">
        <div className="row">
          {data.map((value) => (
            <div className="col-sm-4">
              <div key={value.id} className="card card-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`}
                  className="card-img-top"
                  alt={value.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <a href="#" className="btn btn-primary">
                    Add Favourite
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav className="pagenav" aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={dec}>
              Prev
            </a>
          </li>
          {
            <li className="page-item">
              <a className="page-link" href="#">
                {Current}
              </a>
            </li>
          }
          <li className="page-item">
            <a className="page-link" onClick={inc}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
