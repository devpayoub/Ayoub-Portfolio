export const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: string;
}) => {
  const buttonClasses = active
    ? "text-white border-b border-[#7074e5]"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold text-sm sm:text-base hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};
