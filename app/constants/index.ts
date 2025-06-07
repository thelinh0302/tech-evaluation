type StatusType = "completed" | "failed" | "pending";
type Category = "stake" | "borrow" | "lend";

export const statuses: Record<StatusType, string> = {
  completed: "text-green-400 bg-green-400/10",
  failed: "text-rose-400 bg-rose-400/10",
  pending: "text-yellow-400 bg-yellow-400/10",
};

const categories: Record<Category, string> = {
  stake: "text-green-700 bg-green-50 ring-green-600/20",
  borrow: "text-gray-600 bg-gray-50 ring-gray-500/10",
  lend: "text-red-700 bg-red-50 ring-red-600/10",
};

const statusesText: Record<StatusType, string> = {
  completed: "Completed",
  failed: "Failed",
  pending: "Pending",
};
const CategoriesText: Record<Category, string> = {
  stake: "Stake",
  borrow: "Borrow",
  lend: "Lend",
};

export function getTypeClass(type: string) {
  if (type in categories) {
    return categories[type as Category];
  }
  return "text-gray-400 bg-gray-400/10";
}

export function getStatusClass(status: string) {
  if (status in statuses) {
    return statuses[status as StatusType];
  }
  return "text-gray-400 bg-gray-400/10";
}

export function getStatusText(status: string) {
  if (status in statusesText) {
    return statusesText[status as StatusType];
  }
  return "";
}
export function getCategoriesText(type: string) {
  if (type in CategoriesText) {
    return CategoriesText[type as Category];
  }
  return "";
}
