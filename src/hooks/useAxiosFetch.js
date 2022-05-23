import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosFetch() {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    let isMounted = true;
  });
  return <div>useAxiosFetch</div>;
}

export default useAxiosFetch;
