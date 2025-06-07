// or use your own utility
import classNames from "classnames";
import {
  getTypeClass,
  getCategoriesText,
  getStatusClass,
  getStatusText,
} from "../../constants"; // Update paths accordingly

interface Transaction {
  id: string;
  username: string;
  transactionType: string;
  token: string;
  status: string;
  amount: number;
  updatedAt: string;
}

interface Props {
  data: Transaction[];
}

export default function TransactionTableBody({ data }: Props) {
  return (
    <tbody key={1} className="divide-y divide-gray-200 bg-white">
      {data?.map((trans) => (
        <tr key={trans.id}>
          <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="font-medium text-gray-900">
                  {trans.username}
                </div>
              </div>
            </div>
          </td>
          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
            <div
              className={classNames(
                getTypeClass(trans.transactionType),
                "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-green-600/20 ring-inset"
              )}
            >
              {getCategoriesText(trans.transactionType)}
            </div>
          </td>
          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
            {trans.token}
          </td>
          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
              <div
                className={classNames(
                  getStatusClass(trans.status),
                  "flex-none rounded-full p-1"
                )}
              >
                <div className="size-1.5 rounded-full bg-current" />
              </div>
              <div className="hidden text-bla sm:block">
                {getStatusText(trans.status)}
              </div>
            </div>
          </td>
          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
            {trans.amount.toString()}
          </td>
          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
            {trans.updatedAt}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
