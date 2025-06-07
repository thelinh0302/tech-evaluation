import { useEffect, useState } from "react";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";

interface Transaction {
  id: string;
  username: string;
  token: string;
  transactionType: string;
  status: string;
  updatedAt: string;
  amount: number;
}

export function useAPI(transactionType: string) {
  const [data, setData] = useState<Transaction[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:5800/api/transactions`,
          { params: { transactionType } }
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [transactionType]);

  return { data, loading, error };
}
