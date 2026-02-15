export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`bg-secondary text-white px-4 py-2 rounded-md hover:bg-dark cursor-pointer ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
