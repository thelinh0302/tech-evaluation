interface IDropdownSelectboxPtops {
  dropdownRef: React.RefObject<HTMLDivElement>;
  onChangeType: (type: string) => void;
  setOpen: (open: boolean) => void;
}
const DropdownSelectbox: React.FC<IDropdownSelectboxPtops> = ({
  dropdownRef,
  onChangeType,
  setOpen,
}) => {
  return (
    <div
      ref={dropdownRef}
      className="absolute z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <ul className="py-1 text-sm text-gray-700">
        <li>
          <button
            onClick={() => {
              onChangeType("");
              setOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            All
          </button>
        </li>
        {["Stake", "Borrow", "Lend"].map((type) => (
          <li key={type}>
            <button
              onClick={() => {
                onChangeType(type);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {type}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelectbox;
