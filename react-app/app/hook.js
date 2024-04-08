import { useState, useEffect } from "react";
import axios from "axios";

const useFeatures = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        const response = await axios.get("http://localhost:3000/api/features/");
        console.log(`Response: ${Boolean(response)}`);
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(`Error ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFeatures;
