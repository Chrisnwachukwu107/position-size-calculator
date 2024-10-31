import React, { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Option from "./components/Opation/Option";

const tradingPairs: string[] = [
  'XAU/USD', 'EUR/USD','USD/JPY','GBP/USD','USD/CHF','USD/CAD','AUD/USD','NZD/USD', 'EUR/GBP', 'EUR/AUD', 'EUR/NZD', 'EUR/CAD', 'EUR/CHF', 'GBP/JPY', 'GBP/AUD', 'GBP/CAD', 'GBP/CHF', 'GBP/NZD', 'AUD/JPY', 'AUD/NZD', 'AUD/CAD', 'AUD/CHF', 'NZD/JPY', 'NZD/CAD', 'NZD/CHF', 'CAD/JPY', 'CAD/CHF', 'CHF/JPY'
];

const App: React.FC = () => {
  const [ accountCurrency, setAccountCurrency ] = useState("USD");
  const [ currencyPair, setCurrencyPair ] = useState("EUR/USD");
  const [ accountBalance, setAccountBalance ] = useState(100);
  const [ riskPercentage, setRiskPercentage ] = useState<number>(0);
  const [ entryPrice, setEntryPrice ] = useState<number>(0);
  const [ slPrice, setSlPrice ] = useState<number>(0);
  const [ tpPrice, setTpPrice ] = useState<number>(0);

  const [ pipsToSl, setPipsToSl ] = useState(0);
  const [ pipsToTp, setPipsToTp ] = useState(0);
  const [ showResults, setShowResults ] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(false);

  const handleCurrencyPairChange = (event: React.ChangeEvent<HTMLSelectElement>) => setCurrencyPair(event.target.value);
  const handleAccountCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => setAccountCurrency(event.target.value);
  const handleAccountBalanceChange = (event:React.ChangeEvent<HTMLInputElement>) => setAccountBalance(Number(event.target.value));
  const handleRiskPercentageChange = (event:React.ChangeEvent<HTMLInputElement>) => setRiskPercentage(Number(event.target.value));
  const handleEntryPriceChange = (event:React.ChangeEvent<HTMLInputElement>) => setEntryPrice(Number(event.target.value));
  const handleSlPriceChange = (event:React.ChangeEvent<HTMLInputElement>) => setSlPrice(Number(event.target.value));
  const handleTpPriceChange = (event:React.ChangeEvent<HTMLInputElement>) => setTpPrice(Number(event.target.value));
  const validateInputs = () => accountBalance > 0 && riskPercentage > 0 && entryPrice > 0 && slPrice > 0 && tpPrice > 0;

  useEffect(() => {
    const calculatePips = () => {
      let pipValue = 0.0001;

      if (currencyPair.toLowerCase().includes("jpy")) {
        pipValue = 0.01;
      }
      else if (currencyPair.toLowerCase().includes("xau")) {
        pipValue = 0.1;
      }

      if ((entryPrice > 0) && (slPrice > 0)) {
        const slDifference = Math.abs(entryPrice - slPrice);
        setPipsToSl(parseFloat((slDifference / pipValue).toFixed(1)));
      } else {
        setPipsToSl(0);
      };

      if ((entryPrice > 0) && (tpPrice > 0)) {
        const tpDifference = Math.abs(entryPrice - tpPrice);
        setPipsToTp(parseFloat((tpDifference / pipValue).toFixed(1)));
      } else {
        setPipsToTp(0);
      };
    };

    calculatePips();
  }, [ entryPrice, slPrice, tpPrice, currencyPair ]);

  useEffect(() => {
    setIsDisabled(!validateInputs());
  }, [accountBalance, riskPercentage, entryPrice, slPrice, tpPrice]);


  return (
    <div className="min-h-[100vh] items-center bg-gray-50 shadow-lg ">
      <div className="pt-10">
        <h1 className="text-3xl font-bold mb-10 text-center">
          Position Size Calculator
        </h1>
      </div>
      <div className="mx-auto p-6 md:px-12 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Input Section */}
        <div className="w-[100%] mx-auto">
          <div className="">
            <h2 className="text-xl font-bold mb-4">Account Currency</h2>
            <select
              className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300 text-gray-700"
              value={accountCurrency}
              onChange={ handleAccountCurrencyChange }
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>NGN</option>
            </select>
          </div>

          <label className="block text-gray-700 font-bold mb-2">
            Account Balance
          </label>
          <input
            type="number"
            placeholder={ accountBalance.toString() }
            onChange={ handleAccountBalanceChange }
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">
            Risk Percentage
          </label>
          <input
            type="number"
            placeholder={ riskPercentage.toString() }
            onChange={ handleRiskPercentageChange }
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">
            Entry Price
          </label>
          <input
            type="number"
            placeholder={ entryPrice.toString() }
            onChange={ handleEntryPriceChange }
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">SL Price</label>
          <input
            type="number"
            placeholder={ slPrice.toString() }
            onChange={ handleSlPriceChange }
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <label className="block text-gray-700 font-bold mb-2">TP Price</label>
          <input
            type="number"
            placeholder={ tpPrice.toString() }
            onChange={ handleTpPriceChange }
            className="w-full p-3 mb-6 rounded-lg border-2 border-gray-300"
          />

          <h2 className="text-xl font-bold mb-4">Currency Pair</h2>
          <select
            className="w-full p-3 rounded-lg border-2 border-gray-300 text-gray-700"
            value={ currencyPair }
            onChange={ handleCurrencyPairChange }
          >
            { tradingPairs.map((pair, idx) => <Option key={ idx } value={ pair }>{ pair }</Option>) }
          </select>

          <div className="border-red-500 mt-10">
            <Button
              className={`bg-green-500 text-white w-full py-4 text-xl font-semibold rounded-3xl ${isDisabled ? 'opacity-70' : 'opacity-100'}`}
              onClick={ () => setShowResults(!showResults) }
              disabled={ isDisabled }
            >
              Calculate
            </Button>
          </div>
        </div>

        {/* Right Side - Results Section */}

        { showResults && <div className="grid grid-rows-1 md:grid-rows-2 items-end">
          <div className="hidden md:block"></div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <div className="text-gray-700 space-y-4 ">
              <div className="flex justify-between">
                <span>Amount at Risk</span>
                <span className="font-semibold">{ (riskPercentage * accountBalance) / 100 } {accountCurrency}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of pips at risk</span>
                <span className="font-semibold">{ pipsToSl.toFixed(1) }</span>
              </div>
              <div className="flex justify-between">
                <span>Number of pips to target</span>
                <span className="font-semibold">{ pipsToTp.toFixed(1) }</span>
              </div>
              <div className="flex justify-between">
                <span>Risk-to-Reward</span>
                <span className="font-semibold">{ pipsToSl > 0 ? (pipsToTp / pipsToSl).toFixed(2): "N/A" }</span>
              </div>
              <div className="flex justify-between">
                <span>Position Size (units)</span>
                <span className="font-semibold">{ (((riskPercentage * accountBalance) / 1000) / pipsToSl).toFixed(2) }</span>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4 text-center mt-6">
                  Goodluck💙
                </h2>
              </div>
            </div>
          </div>
        </div> }
      </div>
    </div>
  );
};

export default App;
