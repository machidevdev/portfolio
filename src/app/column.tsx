export default function Column({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      className={`px-4 py-2.5 border-border border h-full ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
