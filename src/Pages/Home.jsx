import { useState, useEffect } from "react";

import Banner from "../Component/Banner";

import Properties from "../Component/Properties";

import { baseUrl, fetchApi } from "../../utilities/fetchApi";
import LoadingSkleton from "../Component/LoadingSkleton";
import { GlobalContext } from "../Context/GlobalContext";

const Home = () => {
  const {
    loadingSale,
    propertyForSale,
    fetchDataSale,
    loadingRent,
    propertyForRent,
    fetchDataRent,
  } = GlobalContext();

  useEffect(() => {
    // fetchDataRent();
    // fetchDataSale();
  }, []);

  //   console.log(propertyForRent);
  //   console.log(propertyForSale);
  return (
    <>
      {/* rent container starts  */}
      <div className="rentContainer mb-6 ">
        {/* banner section  */}
        <div className="bannerComponent mb-4 ">
          <Banner
            imageUrl="/images/rent.jpg"
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
          {/* loading component starts  */}

          <div
            className={` m-auto ${
              loadingRent ? "grid" : "hidden"
            }  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5`}
          >
            {Array.from({ length: 3 }).map((ele, index) => (
              <div key={index}>
                <LoadingSkleton />
              </div>
            ))}
          </div>

          {/* loading component ends */}

          {/*  */}
          <div
            className={` propertyContainer ${
              loadingRent ? "hidden" : "grid"
            } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 `}
          >
            {propertyForRent.map((property, ind) => (
              <Properties property={property} key={ind} />
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
            imageUrl="/images/buy.jpg"
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
          {/* loading component starts  */}

          <div
            className={` m-auto ${
              loadingSale ? "grid" : "hidden"
            }  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5`}
          >
            {Array.from({ length: 3 }).map((ele, index) => (
              <div key={index}>
                <LoadingSkleton />
              </div>
            ))}
          </div>

          {/* loading component ends */}

          {/*  */}
          <div
            className={`propertyContainer ${
              loadingSale ? "hidden" : "grid"
            } grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4`}
          >
            {propertyForSale.map((property, ind) => (
              <Properties property={property} key={ind} />
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
