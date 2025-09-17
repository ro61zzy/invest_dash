// apps/web/components/ui/table.tsx
import { cn } from "../../../../apps/web/lib/utils";

export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <table className={cn("w-full border-collapse text-sm", className)}>
      {children}
    </table>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-700 text-gray-200">{children}</thead>;
}

export function TableRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <tr className={cn("border-b border-gray-700", className)}>{children}</tr>;
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="p-2 text-left font-semibold">{children}</th>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={cn("p-2 text-center", className)}>{children}</td>;
}
