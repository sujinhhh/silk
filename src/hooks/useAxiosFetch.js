import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosFetch(dataUrl) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
  });
  return <div>useAxiosFetch</div>;
}

export default useAxiosFetch;
