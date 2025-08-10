export const ProjectTag = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (value: string) => void;
  isSelected: boolean;
}) => {
  const buttonStyles = isSelected
    ? "text-white border-[#7074e5]"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} cursor-pointer rounded-full py-3 px-6 text-sm sm:text-xl border-2`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
