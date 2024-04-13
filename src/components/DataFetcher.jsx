import { useState, useEffect } from 'react';

const DataFetcher = ({ children, url, requestBody }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Token", "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ");

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(requestBody),
          redirect: "follow"
        };

        const response = await fetch(url, requestOptions);
        const result = await response.json();

        if (result.data && result.data.products) {
          setData(result.data.products);
        } else {
          console.error('Data or products not found in the response:', result);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <>{children(data)}</>;
};

export default DataFetcher;