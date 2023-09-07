"use client";

import Image from "next/image";
import Link from "next/link";
import Banner from "./Component/Banner";
import Properties from "./Component/Properties";

import buyImage from "../assets/images/buy.jpg";
import rentImage from "../assets/images/rent.jpg";
import { baseUrl, fetchApi } from "@/utilities/fetchApi";
import { useEffect, useState } from "react";
import Nav from "./Component/Nav";

const Home = () => {
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

      {/* rent container starts  */}
      <div className="rentContainer mb-6 ">
        {/* banner section  */}
        <div className="bannerComponent mb-4 ">
          <Banner
            imageUrl={rentImage}
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
          {/* <Properties /> */}

          {/*  */}
          <div className="propertyContainer grid grid-cols-3 gap-x-3 gap-y-6 ">
            {propertyForRent.map((property, ind) => (
              <>
                <Properties property={property} />
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
            imageUrl={buyImage}
            purpose="BUY A HOME"
            title="Find, Buy & Own
          Your Dream Home!"
            description="Explore apartments, villas and more
          and more"
            buttonText="Explore Buying "
            linkName="/ search?purpose=for-buy"
          />
        </div>
        {/* banner section ends  */}

        {/* buy content starts  */}

        <div className="buyComponent w-[90%] m-auto ">
          {/*  */}
          <div className="propertyContainer grid grid-cols-3 gap-x-3 gap-y-6 ">
            {propertyForSale.map((property, ind) => (
              <>
                <Properties property={property} />
              </>
            ))}
          </div>

          {/*  */}
        </div>

        {/* buy content ends  */}
      </div>

      {/* buy container ends */}
    </>
  );
};

export default Home;
