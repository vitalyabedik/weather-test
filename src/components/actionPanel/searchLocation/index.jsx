import { Input } from "antd";

const { Search } = Input;

// const onSearch = (value) => console.log(value);

const SearchLocation = () => (
  <div>
    {" "}
    <Search
      placeholder="Enter a city..."
      allowClear
      //   onSearch={onSearch}
      style={{
        width: 250,
      }}
    />
  </div>
);

export default SearchLocation;
