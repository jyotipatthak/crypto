import React, { useState } from "react";
import Searchbar from "./Searchbar";
import CryptoSidebar from "./Sidebar";
import CryptoExchangeComparison from "./CryptoExchangeComparison";
import PieChart from "./Piechart";
import CryptoChart from "./Cryptochart";
import CurrencyDropdown from "./CurrencySelector";

function Main() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      {/* Header with blue background */}
      <header className="bg-blue-500 py-3 text-white text-center">
        <h1 className="text-2xl font-semibold">Crypto Dashboard</h1>
      </header>

      {/* Main content */}
      <div className="bg-slate-100 flex flex-col m-4 pt-2 md:m-6 px-2 h-full rounded md:flex-row overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 xl:grid-cols-4 gap-2">
            <div className="md:col-span-3">
              <div className="md:3/4 mx-auto">
                <div className="flex flex-row">
                  <CurrencyDropdown
                    selectedCurrency={selectedCurrency}
                    handleCurrencyChange={handleCurrencyChange}
                  />
                  <Searchbar />
                </div>
                <CryptoChart />
              </div>
              <div className="md:flex mt-2 gap-1">
                <PieChart />
                <CryptoExchangeComparison />
              </div>
            </div>
            <div className="mb-4 rounded-md bg-white shadow-md mt-3">
              <CryptoSidebar selectedCurrency={selectedCurrency} className="md:mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer with blue background */}
      <footer className="bg-blue-500 py-3 text-white text-center">
        <p className="text-sm">&copy; 2023 Crypto Dashboard</p>
      </footer>
    </>
  );
}

export default Main;
