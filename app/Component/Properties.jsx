import Image from "next/image";
import Link from "next/link";

import { FaBed, FaBath } from "react-icons/fa";

import { BiSolidGridAlt } from "react-icons/bi";
import cardImg from "../../assets/images/card/rent-card.jpg";
import cardLogo from "../../assets/images/card/rent-card logo.jpg";

const Properties = () => {
  return (
    <>
      <div class="max-w-sm bg-gray-300 border border-gray-200 rounded-lg shadow overflow-auto ">
        {/* card top starts  */}
        <div className="cardTop bg-red-500 ">
          <Image src={cardImg} />
        </div>
        {/* card top ends  */}

        {/*  */}

        {/* card bottom starts  */}

        <div className="cardBottom bg-blue-400 px-2 py-4 ">
          {/* left side of card starts  */}
          <div className="peopertyLeft bg-amber-300 ">
            <h1>left side of card </h1>
          </div>
          {/* left side of card ends */}

          {/* right side of card starts  */}

          <div className="peopertyRight bg-emerald-400 ">
            <h1>right side of acrd </h1>
          </div>

          {/* right side of card ends */}
        </div>

        {/* card bottom ends */}
      </div>
    </>
  );
};

export default Properties;
