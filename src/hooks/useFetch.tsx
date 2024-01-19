import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const useFetch = (
  url: string,
  type: string,
  trigger: boolean,
  body: any = null
): any => {
  const { data: session, status } = useSession();

  console.log("esta es la data de las session");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (trigger) {
      try {
        if (type === "get") {
          const res = await fetch(url);

          if (!res.ok) {
            const errorData = await res.json();
            setError(errorData);
            console.error(`Error en la solicitud (${res.status}):`, errorData);
            throw new Error(`Error en la solicitud: ${res.status}`);
          }
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

          if (!res.ok) {
            const errorData = await res.json();
            setError(errorData);
            console.error(`Error en la solicitud (${res.status}):`, errorData);
            throw new Error(`Error en la solicitud: ${res.status}`);
          }
          const data = await res.json();
          data && setData(data);
        }
      } catch (error: any) {
        if (error.message) {
          console.log("error en la solicitud", error);
        }
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

  return {
    data,
    error,
  };
};

export default useFetch;
