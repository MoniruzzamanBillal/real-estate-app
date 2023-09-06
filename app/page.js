import Image from "next/image";
import Link from "next/link";
import Banner from "./Component/Banner";
import buyImage from "../assets/images/buy.jpg";

const Home = () => (
  <>
    <Banner
      imageUrl={buyImage}
      purpose="RENT A HOME"
      title="  Rental Homes in Affordable Prices"
      description="Explore apartments, villas and more and more"
      buttonText="Explore Renting "
      linkName="/search?purpose-for-rent"
    />
  </>
);

export default Home;
