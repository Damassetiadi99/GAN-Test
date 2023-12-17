import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "./component/Navbar/index";
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from "./component/Footer/index";
import Sponsor from "./component/Sponsor/Carousel";
import { Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("id");
  const [page, setPage] = useState(1);

  const limit = 20;

  const getProduct = () => {
    // const offset = (page - 1) * limit;
    axios
      .get(
        `http://localhost:3000/products?_page=${page}&_limit=${limit}&_sort=${sort}`
      )
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const changeSort = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    getProduct();
  }, [page, sort]);

  useEffect(() => {
    AOS.init({
      duration: 4000, 
    offset: 100,  
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <Navigation/>
      <div className=" atas text-center">
        <h1 className="fw-bold">List Our Products</h1>
        <p >
          Here you're sure to find a bargain on some of the finest ASCII
          available to purchase. <br /> Be sure to peruse our selection of ASCII faces
          in an exciting range of sizes and prices.
        </p>
      </div>

      <div className="sortsView ">
        <div className="drop">
      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Size</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Id</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
       
        {/* </div> */}
      </div>
      <div data-aos="fade-up" >
      <div className="test d-flex gap-5 justify-content-center my-3">
        {data &&
          data.map((product) => (
            <div key={product.id} className="card d-flex justify-content-end align-item-center my-4 shadow p-3 mb-5 bg-body rounded-4">
              <div
                className="face mt-2"
                style={{ fontSize: `${product.size}px` }}
              >
                {product.face}
              </div>

              <div>
                <div className="cover text-white rounded-4">
                <div className="size"> {product.size}</div>
               
                <div className="price"> ${product.price / 100}</div>
                <div className="time">{product.date}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
      <div data-aos="fade-up">
        <div className="d-flex justify-content-center">
      <Sponsor/>
      </div>
      </div>
      <div className="gap-5 my-4 d-flex justify-content-center" data-aos="fade-up">
        <Button variant="primary" size="lg" onClick={handlePrev}>
          previos
        </Button>
        <span className="fw-bold">{page}</span>
        <Button variant="primary" size="lg" onClick={handleNext}>
          Next
        </Button>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
