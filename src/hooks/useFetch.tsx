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
        if (type === "get") {
          const res = await fetch(url);
          const data = await res.json();
          data && setData(data);
        } else if (type === "post") {
          const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          if (!res.ok) throw Error("Error al consumir la api");
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
  }, [url, trigger, type]);
  return {
    data,
    error,
  };
};

export default useFetch;
