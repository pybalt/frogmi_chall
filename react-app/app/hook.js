import { useState, useEffect } from "react";
import axios from "axios";
import { stringify } from 'querystring';

const useFeatures = (page, perPage, setPagNumber, filter) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = {page, per_page: perPage}
        filter ? query['filters[mag_type]'] = Array.of(filter) : ''
        console.log(Array.from(filter))
        const queryString = stringify({ page, per_page: perPage, 'filters[mag_type]': filter });
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        const response = await axios.get(`http://localhost:3000/api/features?${queryString}`,
      );
        console.log(`Response: ${Boolean(response)}`);
        setData(response.data.data);
        setLoading(false);
        setPagination(response.data.pagination);
      } catch (err) {
        setError(err.message);
        console.log(`Error ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, perPage, filter]);

  const incrementPageNumber = () => {
    setPagNumber(prevPagNumber => {
      const nextPage = prevPagNumber + 1;
      const maxPage = Math.ceil(pagination.total / perPage);
      return nextPage > maxPage ? maxPage : nextPage;
    });
  }

  const decrementPageNumber = () => {
    setPagNumber(prevPagNumber => {
      const previousPage = prevPagNumber - 1;
      return previousPage < 1 ? 1 : previousPage;
    });
  }

  return { data, loading, error, pagination, incrementPageNumber, decrementPageNumber };
};

export default useFeatures;
