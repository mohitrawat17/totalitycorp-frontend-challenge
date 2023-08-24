import React, { useEffect, useState } from "react";
import Card from "./Card";
import SearchIcon from '@mui/icons-material/Search';

const filterProd = (stateVar, products) => {
  return products.filter(
    (item) =>
      item?.title?.toLowerCase()?.includes(stateVar.toLowerCase())
  );
};

const filterCategory = (val, products) => {
  return val === 'all' ? products : products.filter(
    (item) =>
      item?.category?.toLowerCase() === val.toLowerCase()
  );
};

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [stateVar, setStateVar] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    setFilterProducts(json);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const data = filterProd(stateVar, products);
      setFilterProducts(data);
    }
  };

  const options = [
    { value: 'all', label: 'All Category' },
    { value: `Men's Clothing`, label: `Men's Clothing` },
    { value: `Women's Clothing`, label: `Women's Clothing` },
    { value: 'Jewelery', label: 'Jewelery' },
    { value: 'Electronics', label: 'Electronics' },
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFilter = (val) => {
    const data = filterCategory(val, products);
    setFilterProducts(data);
  };

  const changingFunctions = (e) => {
    const val = e.target.value;
    handleOptionChange(e);
    handleFilter(val);
  };

  return (
    <>
      <div className="max-sm:flex-col flex flex-row justify-between my-5 mx-8">
        {/* drop down */}
        <select
          value={selectedOption}
          onChange={changingFunctions}
          className="py-1 rounded-md outline-none cursor-pointer mb-3 sm:mb-0"
        >
          {options.map((option) => (
            <option  key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* search */}
        <div className="max-sm:mx-auto border-b-2 bg-white">
          <input
            onKeyDown={handleKeyPress}
            className="rounded-md pl-2 outline-none font-normal py-1 pr-3"
            type="text"
            placeholder="Search Items"
            value={stateVar}
            onChange={(e) => {
              setStateVar(e.target.value);
            }}
          />
          <SearchIcon
            className=" cursor-pointer hover:text-orange-500"
            style={{ fontSize: "33px" }}
            onClick={() => {
              const data = filterProd(stateVar, products);
              setFilterProducts(data);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filterProducts.map((item) => {
          return <Card product={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
