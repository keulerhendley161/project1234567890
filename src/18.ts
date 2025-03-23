import { useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState({
    count: 0,
  });

  const handleChange = (e) => {
    setData({ ...data, count: e.target.value });
  };

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
