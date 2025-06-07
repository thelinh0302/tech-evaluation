"use client";
import classNames from "classnames";
import { useTransaction } from "../hooks/useTransaction";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  getCategoriesText,
  getStatusClass,
  getStatusText,
  getTypeClass,
} from "../constants";
import DropdownSelectbox from "../components/DropdownSelectbox";
import TransactionTableHeader from "./components/HeaderTableTransaction";
import TransactionTableBody from "./components/TransactionTableBody";
import TransactionTableSkeleton from "./components/TransactionTableSkeleton";

const TransactionPage = () => {
  const {
    data,
    loading,
    error,
    updateTransactionType,
    open,
    setOpen,
    dropdownRef,
  } = useTransaction();
  console.log("Transaction Data:", data);
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Transactions of users</h1>
      </div>
      <div className=" mt-8 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">
                Transactions
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the transactions
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <TransactionTableHeader
                    open={open}
                    dropdownRef={dropdownRef}
                    onChangeType={updateTransactionType}
                    setOpen={() => setOpen((prev) => !prev)}
                    updateTransactionType={updateTransactionType}
                  />
                  {loading ? (
                    <TransactionTableSkeleton />
                  ) : (
                    <TransactionTableBody data={data || []} />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
