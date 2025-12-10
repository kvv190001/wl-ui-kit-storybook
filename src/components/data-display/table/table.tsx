import { useState } from 'react';

type Column<T> = { key: keyof T; label: string };
type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export function Table<T extends Record<string, any>>({ data, columns }: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState('');

  const handleSort = (key: keyof T) => {
    if (sortKey === key) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const filtered = data.filter((row) =>
    Object.values(row).some((v) => v.toString().toLowerCase().includes(filter.toLowerCase())),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;
    const av = a[sortKey];
    const bv = b[sortKey];
    return asc ? (av > bv ? 1 : -1) : av < bv ? 1 : -1;
  });

  return (
    <div className="space-y-2">
      <input
        placeholder="Filter..."
        className="border rounded px-2 py-1 text-sm w-full dark:bg-slate-800 dark:border-slate-600"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="w-full border-collapse border border-slate-300 dark:border-slate-700 text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key.toString()}
                onClick={() => handleSort(col.key)}
                className="cursor-pointer border p-2 dark:border-slate-700"
              >
                {col.label} {sortKey === col.key ? (asc ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={i} className="even:bg-slate-50 dark:even:bg-slate-900">
              {columns.map((col) => (
                <td key={col.key.toString()} className="border p-2 dark:border-slate-700">
                  {row[col.key] as any}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
