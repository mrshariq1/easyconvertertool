import React from 'react';
import { convertUnits, PrecisionMode } from '../utils/converterEngine';
import { Unit } from '../types';

interface ConversionTableProps {
  categoryId: string;
  fromUnit: Unit;
  toUnit: Unit;
  values: number[];
  precision?: PrecisionMode;
  className?: string;
}

export const ConversionTable: React.FC<ConversionTableProps> = ({
  categoryId,
  fromUnit,
  toUnit,
  values,
  precision = 4,
  className = ''
}) => {
  return (
    <div className={`my-8 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-xs dark:border-[#334155] dark:bg-[#1E293B] ${className}`}>
      <div className="border-b border-[#E2E8F0] bg-slate-50/80 px-5 py-3.5 dark:border-[#334155] dark:bg-[#0F172A] flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
          {fromUnit.name} to {toUnit.name} Conversion Table
        </h3>
        <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">
          Precision: {precision === 'auto' ? 'Auto' : `${precision} decimals`}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/50 text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:bg-[#0F172A]/60 dark:text-[#94A3B8]">
            <tr>
              <th scope="col" className="px-5 py-3">
                {fromUnit.name} ({fromUnit.symbol})
              </th>
              <th scope="col" className="px-5 py-3">
                {toUnit.name} ({toUnit.symbol})
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#334155] font-mono text-xs sm:text-sm">
            {values.map((val) => {
              const res = convertUnits(categoryId, fromUnit.id, toUnit.id, val, precision);
              return (
                <tr
                  key={val}
                  className="hover:bg-slate-50 dark:hover:bg-[#0F172A]/40 transition-colors"
                >
                  <td className="px-5 py-2.5 font-medium text-[#0F172A] dark:text-[#F8FAFC]">
                    {val.toLocaleString('en-US')} {fromUnit.symbol}
                  </td>
                  <td className="px-5 py-2.5 text-[#2563EB] dark:text-[#06B6D4] font-semibold">
                    {res.formattedText}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
