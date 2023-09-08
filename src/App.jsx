import { useState, useEffect } from "react";

import "./App.css";

// import Banner from "./Component/Banner";
// import Properties from "./Component/Properties";
import Nav from "./Component/Nav";
// import Footer from "./Component/Footer";

// import buyImage from "./assets/images/buy.jpg";
// import rentImage from "./assets/images/rent.jpg";
import { baseUrl, fetchApi } from "../utilities/fetchApi";

function App() {
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [propertyForRent, setPropertyForRent] = useState([]);

  useEffect(() => {
    const fetchDataSale = async () => {
      const salePropertyData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
      );

      setPropertyForSale(salePropertyData);
    };

    const fetchDataRent = async () => {
      const rentPropertyData = await fetchApi(
        `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
      );

      setPropertyForRent(rentPropertyData);
    };

    // fetchDataSale();
    // fetchDataRent();
  }, []);

  // console.log(propertyForSale);
  // console.log(propertyForRent);

  return (
    <>
      <div className="navComponent ">
        <Nav />
      </div>
    </>
  );
}

export default App;
