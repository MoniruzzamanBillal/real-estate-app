import { useState, useEffect } from "react";

import "./App.css";

import Banner from "./Component/Banner";
import Properties from "./Component/Properties";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";

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

    // fetchDataRent();
    // fetchDataSale();
  }, []);

  // console.log(propertyForRent);
  // console.log(propertyForSale);

  return (
    <>
      {/* nav component starts  */}
      <div className="navComponent ">
        <Nav />
      </div>

      {/* nav component ends  */}

      {/* rent container starts  */}
      <div className="rentContainer mb-6 ">
        {/* banner section  */}
        <div className="bannerComponent mb-4 ">
          <Banner
            imageUrl="../assets/images/rent.jpg"
            purpose="RENT A HOME"
            title="  Rental Homes in Affordable Prices"
            description="Explore apartments, villas and more and more"
            buttonText="Explore Renting "
            linkName="/search?purpose=for-rent"
          />
        </div>
        {/* banner section ends  */}

        {/* rent content starts  */}
        <div className="rentComponent w-[90%] m-auto ">
          {/*  */}
          <div className="propertyContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-4 gap-y-4 ">
            {propertyForRent.map((property, ind) => (
              <>
                <Properties property={property} key={ind} />
              </>
            ))}
          </div>
          {/*  */}
        </div>

        {/* rent content ends  */}
      </div>
      {/* rent container ends  */}

      {/*  */}

      {/* buy container starts  */}
      <div className="buyContainer mb-6 ">
        {/* banner section  */}
        <div className="bannerComponent mb-4 ">
          <Banner
            imageUrl="../assets/images/buy.jpg"
            purpose="BUY A HOME"
            title="Find, Buy & Own
          Your Dream Home!"
            description="Explore apartments, villas and more
          and more"
            buttonText="Explore Buying "
            linkName="/search?purpose=for-buy"
          />
        </div>
        {/* banner section ends  */}

        {/* buy content starts  */}

        <div className="buyComponent w-[90%] m-auto ">
          {/*  */}
          <div className="propertyContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-4 gap-y-4  ">
            {propertyForSale.map((property, ind) => (
              <>
                <Properties property={property} key={ind} />
              </>
            ))}
          </div>
          {/*  */}
        </div>

        {/* buy content ends  */}
      </div>

      {/* buy container ends */}

      <div className="footerComponent">
        <Footer />
      </div>
    </>
  );
}

export default App;
