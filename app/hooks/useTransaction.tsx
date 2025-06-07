"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAPI } from "../api/useTransactionsApi";

export function useTransaction() {
  const [transactionType, setTransactionType] = useState<string>("");
  const { data, loading, error } = useAPI(transactionType);
  const updateTransactionType = useCallback((type: string) => {
    setTransactionType(type);
  }, []);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    data,
    loading,
    error,
    updateTransactionType,
    setOpen,
    open,
    dropdownRef,
  };
}
