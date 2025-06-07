import { useRef, useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import DropdownSelectbox from "@/app/components/DropdownSelectbox";

interface Props {
  updateTransactionType: (type: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  onChangeType: (type: string) => void;
  setOpen: () => void;
  open: boolean;
}

export default function TransactionTableHeader({
  updateTransactionType,
  setOpen,
  open,
  dropdownRef,
}: Props) {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          UserName
        </th>
        <th
          scope="col"
          className="relative px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          <div className="flex items-center gap-1">
            Transaction Type
            <button
              onClick={setOpen}
              className="ml-1 p-1 hover:bg-gray-100 rounded"
            >
              <ChevronDownIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {open && (
            <div className="absolute mt-2 z-10" ref={dropdownRef}>
              <DropdownSelectbox
                setOpen={setOpen}
                dropdownRef={dropdownRef}
                onChangeType={(value) => {
                  updateTransactionType(value);
                }}
              />
            </div>
          )}
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Token
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Status
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Amount
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Date
        </th>
      </tr>
    </thead>
  );
}
