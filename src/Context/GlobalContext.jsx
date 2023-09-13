import React, { createContext, useContext, useState } from "react";
// import { baseUrl, fetchApi } from "../utilities/fetchApi";
import { baseUrl, fetchApi } from "../../utilities/fetchApi";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loadingSale, setLoadingSale] = useState(true);
  const [loadingRent, setLoadingRent] = useState(true);

  const [propertyForSale, setPropertyForSale] = useState([]);
  const [propertyForRent, setPropertyForRent] = useState([]);

  const [propertyAllSale, setPropertyAllSale] = useState([]);
  const [propertyAllRent, setPropertyAllRent] = useState([]);

  // getting sale data from api
  const fetchDataSale = async () => {
    setLoadingSale(true);
    const salePropertyData = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    setLoadingSale(false);
    setPropertyForSale(salePropertyData);
  };

  // getting rent data from api
  const fetchDataRent = async () => {
    setLoadingRent(true);
    const rentPropertyData = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );
    setLoadingRent(false);
    setPropertyForRent(rentPropertyData);
  };

  // getting all sale data
  const fetchSaleDataAll = async () => {
    setLoadingSale(true);
    const salePropertyData = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale`
    );
    setLoadingSale(false);
    setPropertyAllSale(salePropertyData);
  };

  // getting all rent data
  const fetchRentDataAll = async () => {
    setLoadingRent(true);
    const rentPropertyData = await fetchApi(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent`
    );
    setLoadingRent(false);
    setPropertyAllRent(rentPropertyData);
  };

  return (
    <AppContext.Provider
      value={{
        loadingSale,
        propertyForSale,
        fetchDataSale,
        loadingRent,
        propertyForRent,
        fetchDataRent,
        fetchSaleDataAll,
        fetchRentDataAll,
        propertyAllSale,
        propertyAllRent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function GlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, GlobalContext };
