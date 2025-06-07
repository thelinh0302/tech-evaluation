export default function TransactionTableSkeleton({
  rowCount = 5,
}: {
  rowCount?: number;
}) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white animate-pulse">
      {Array.from({ length: rowCount }).map((_, index) => (
        <tr key={index}>
          {Array.from({ length: 6 }).map((__, colIndex) => (
            <td key={colIndex} className="px-4 py-5 text-sm">
              <div className="h-4 bg-gray-200 rounded w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
