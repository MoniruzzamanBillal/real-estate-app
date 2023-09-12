import { BiMenuAltRight } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="searchContainer bg-green-100 my-8 ">
        <div className="searchWrapper bg-red-400  w-[95%] sm:w-[90%] md:w-[85%] m-auto ">
          {/* search menu container starts  */}
          <div className="searchMenuContainer p-2 bg-teal-300 mb-4 ">
            {/* search top  */}
            <div className="searchTop bg-violet-400 flex items-center justify-center cursor-pointer py-1 border-b border-gray-800 ">
              <h1 className=" bg-lime-300 text-xl mr-1  ">
                Search properties by filters
              </h1>
              <BiMenuAltRight className=" text-3xl " />
            </div>
            {/* search top  */}

            {/* search bottom starts  */}

            <div className="searchBottom pt-1 bg-amber-200 flex flex-wrap justify-center gap-x-3 gap-y-4 ">
              {/* purpose select type starts  */}
              <div className="purpose">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* purpose select type ends  */}

              {/* rent frequency type starts  */}
              <div className="rentFrequency">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* rent frequency type ends  */}

              {/* Minimum price type starts  */}
              <div className="minimumPrice">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* Minimum price  type ends  */}

              {/* maximum price type starts  */}
              <div className="maximumPrice">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* maximum price  type ends  */}

              {/* sort price type starts  */}
              <div className="sortPrice">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* sort price  type ends  */}

              {/* max area starts  */}
              <div className="maxArea">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* max area  type ends  */}

              {/*rooms starts  */}
              <div className="roomsContainer">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* rooms ends  */}

              {/*bath starts  */}
              <div className="bathContainer">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* bath ends  */}

              {/*furnish type starts  */}
              <div className="furnishedContainer">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* furnish type ends  */}

              {/*property type starts  */}
              <div className="propertyContainer">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5  outline-none "
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              {/* property type ends  */}

              {/*  */}
            </div>

            {/* search bottom ends */}
          </div>
          {/* search menu container ends  */}

          {/* property show container starts  */}

          <div className="propertyShow bg-cyan-300 ">
            <h1>property show </h1>
          </div>

          {/* property show container ends */}
        </div>
      </div>
    </>
  );
};

export default Search;
