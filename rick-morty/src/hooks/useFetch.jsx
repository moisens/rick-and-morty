import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState([]);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const getRickdata = async () => {
      try {
        setStatus('pending');
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error (`Unable to fetch data from ${url}`);
        }
        const newdatas = await response.json();
        setStatus('resolved');
        setDatas(newdatas.results)
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    }
    getRickdata();
  }, []);
  

  return {
    datas,
    status,
    error
  }
}

export default useFetch;
