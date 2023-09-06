import Image from "next/image";
import Link from "next/link";
import Banner from "./Component/Banner";
import buyImage from "../assets/images/buy.jpg";
import rentImage from "../assets/images/rent.jpg";

const Home = () => (
  <>
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
          linkName="/search?purpose-for-rent"
        />
      </div>
      {/* banner section ends  */}

      {/* rent content starts  */}

      <div className="rentComponent">
        <h1>rent component</h1>
      </div>

      {/* rent content ends  */}
    </div>
    {/* rent container ends  */}

    {/*  */}

    {/* buy container starts  */}

    <div className="buyContainer  ">
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
          linkName="/search?purpose-for-buy"
        />
      </div>
      {/* banner section ends  */}

      {/* buy content starts  */}

      <div className="buyComponent">
        <h1>buy component</h1>
      </div>

      {/* buy content ends  */}
    </div>

    {/* buy container ends */}
  </>
);

export default Home;
