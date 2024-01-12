import { useState, useEffect } from "react";

const useFetch = (
  url: string,
  type: string,
  trigger: boolean,
  body: any
): any => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (trigger) {
      try {
        if ((type = "get")) {
          const res = await fetch(url);
          const data = await res.json();
          data && setData(data);
        } else if ((type = "post")) {
          await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        }
      } catch (error: any) {
        if (error) {
          setError(error);
        }
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  console.log(data);
  return {
    data,
    error,
  };
};

export default useFetch;
