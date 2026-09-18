import React, { useState, useEffect, useId } from 'react';
import { ArrowLeftRight, Copy, Check, RotateCcw, Share2, Info, Star } from 'lucide-react';
import { ConverterCategory, Unit } from '../types';
import { convertUnits, PrecisionMode } from '../utils/converterEngine';
import { useFavoritesAndRecents } from '../hooks/useFavoritesAndRecents';

interface UniversalConverterProps {
  category: ConverterCategory;
  initialFromUnitId?: string;
  initialToUnitId?: string;
  initialValue?: number | string;
  className?: string;
  onUnitChange?: (fromId: string, toId: string) => void;
}

export const UniversalConverter: React.FC<UniversalConverterProps> = ({
  category,
  initialFromUnitId,
  initialToUnitId,
  initialValue = '1',
  className = '',
  onUnitChange
}) => {
  const inputId = useId();
  const fromSelectId = useId();
  const toSelectId = useId();
  const precisionSelectId = useId();

  const [fromUnitId, setFromUnitId] = useState<string>(() => {
    return initialFromUnitId && category.units.some((u) => u.id === initialFromUnitId)
      ? initialFromUnitId
      : category.units[0]?.id || '';
  });

  const [toUnitId, setToUnitId] = useState<string>(() => {
    if (initialToUnitId && category.units.some((u) => u.id === initialToUnitId)) {
      return initialToUnitId;
    }
    // Default to second unit if available, else first
    return category.units[1]?.id || category.units[0]?.id || '';
  });

  const [inputValue, setInputValue] = useState<string>(String(initialValue));
  const [precision, setPrecision] = useState<PrecisionMode>('auto');
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const { addRecent, isFavorite, toggleFavorite } = useFavoritesAndRecents();

  // Sync if props change
  useEffect(() => {
    if (initialFromUnitId) setFromUnitId(initialFromUnitId);
    if (initialToUnitId) setToUnitId(initialToUnitId);
  }, [initialFromUnitId, initialToUnitId]);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isFav = isFavorite(currentPath);

  // Perform conversion
  const result = convertUnits(category.id, fromUnitId, toUnitId, inputValue, precision);

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);

  // Record to recents when user completes a conversion
  useEffect(() => {
    if (result.success && fromUnit && toUnit && inputValue.trim() !== '') {
      const parsed = parseFloat(inputValue);
      if (!isNaN(parsed) && result.value !== undefined) {
        addRecent({
          fromValue: parsed,
          fromUnitName: fromUnit.name,
          fromUnitSymbol: fromUnit.symbol,
          toValue: result.value,
          toUnitName: toUnit.name,
          toUnitSymbol: toUnit.symbol,
          categoryId: category.id
        });
      }
    }
  }, [inputValue, fromUnitId, toUnitId, result.success]);

  const handleSwap = () => {
    const nextFrom = toUnitId;
    const nextTo = fromUnitId;
    setFromUnitId(nextFrom);
    setToUnitId(nextTo);
    if (onUnitChange) onUnitChange(nextFrom, nextTo);
  };

  const handleCopy = async () => {
    if (!result.success) return;
    try {
      await navigator.clipboard.writeText(result.formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${fromUnit?.name} to ${toUnit?.name} Converter`,
          text: `Convert ${inputValue} ${fromUnit?.symbol} to ${toUnit?.symbol} on EasyConverter`,
          url
        });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // fallback
      }
    }
  };

  const handleReset = () => {
    setInputValue('1');
  };

  return (
    <div
      className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7 shadow-xs dark:border-[#334155] dark:bg-[#1E293B] ${className}`}
      id="converter-tool-card"
    >
      <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0] dark:border-[#334155]">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
            {category.name} Converter
          </span>
        </div>
        <div className="flex items-center gap-2">
          {currentPath && currentPath !== '/' && (
            <button
              type="button"
              onClick={() => toggleFavorite(currentPath)}
              title={isFav ? 'Remove from favorites' : 'Save to favorites'}
              aria-label={isFav ? 'Remove from favorites' : 'Save to favorites'}
              className="p-1.5 text-[#64748B] hover:text-amber-500 dark:text-[#94A3B8] dark:hover:text-amber-400 transition"
            >
              <Star className={`h-4 w-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          )}
          <button
            type="button"
            onClick={handleShare}
            title="Share this converter"
            aria-label="Share this converter"
            className="p-1.5 text-[#64748B] hover:text-[#2563EB] dark:text-[#94A3B8] dark:hover:text-[#06B6D4] transition"
          >
            {shared ? <Check className="h-4 w-4 text-[#16A34A]" /> : <Share2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        {/* Input Value */}
        <div className="md:col-span-4">
          <label htmlFor={inputId} className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
            Amount / Value
          </label>
          <input
            id={inputId}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. 10"
            className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50/70 px-4 py-3 text-lg font-bold text-[#0F172A] placeholder:text-[#64748B]/60 focus:border-[#2563EB] focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-blue-500/20 dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:placeholder:text-[#94A3B8]/60 dark:focus:border-[#06B6D4] dark:focus:bg-[#0F172A] transition"
          />
        </div>

        {/* From Unit */}
        <div className="md:col-span-3">
          <label htmlFor={fromSelectId} className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
            From Unit
          </label>
          <select
            id={fromSelectId}
            value={fromUnitId}
            onChange={(e) => {
              setFromUnitId(e.target.value);
              if (onUnitChange) onUnitChange(e.target.value, toUnitId);
            }}
            className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50/70 px-3.5 py-3 text-sm font-medium text-[#0F172A] focus:border-[#2563EB] focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-blue-500/20 dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4] dark:focus:bg-[#0F172A] transition"
          >
            {category.units.map((u) => (
              <option key={u.id} value={u.id} className="dark:bg-[#1E293B]">
                {u.name} ({u.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-2 flex justify-center pb-0.5">
          <button
            type="button"
            onClick={handleSwap}
            aria-label="Swap units"
            title="Swap units"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-blue-50 hover:border-blue-300 hover:text-[#2563EB] focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:hover:bg-slate-800 dark:hover:border-[#06B6D4]/50 dark:hover:text-[#06B6D4] shadow-2xs transition active:scale-95"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>
        </div>

        {/* To Unit */}
        <div className="md:col-span-3">
          <label htmlFor={toSelectId} className="block text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] mb-1.5">
            To Unit
          </label>
          <select
            id={toSelectId}
            value={toUnitId}
            onChange={(e) => {
              setToUnitId(e.target.value);
              if (onUnitChange) onUnitChange(fromUnitId, e.target.value);
            }}
            className="w-full rounded-xl border border-[#E2E8F0] bg-slate-50/70 px-3.5 py-3 text-sm font-medium text-[#0F172A] focus:border-[#2563EB] focus:bg-white focus:outline-hidden focus:ring-3 focus:ring-blue-500/20 dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:focus:border-[#06B6D4] dark:focus:bg-[#0F172A] transition"
          >
            {category.units.map((u) => (
              <option key={u.id} value={u.id} className="dark:bg-[#1E293B]">
                {u.name} ({u.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 dark:border-[#334155] dark:bg-[#0F172A]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8]">
              Calculated Result
            </span>
            {result.success ? (
              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                  {result.formattedText}
                </span>
              </div>
            ) : (
              <p className="mt-1 text-sm font-medium text-[#DC2626] dark:text-red-400">
                {result.errorMessage || 'Please enter a valid number to convert.'}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            {result.success && (
              <button
                type="button"
                onClick={handleCopy}
                disabled={!result.success}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-700 hover:to-cyan-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 transition active:scale-95"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-white" /> : <Copy className="h-3.5 w-3.5 text-white" />}
                <span>{copied ? 'Copied!' : 'Copy Result'}</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleReset}
              title="Reset value to 1"
              aria-label="Reset value"
              className="inline-flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-medium text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:bg-slate-700/60 dark:hover:text-[#F8FAFC] transition"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Formula / Calculation Steps */}
        {result.formulaDescription && (
          <div className="mt-3 pt-3 border-t border-blue-100/80 dark:border-[#334155] flex items-start gap-2 text-xs text-[#64748B] dark:text-[#94A3B8]">
            <Info className="h-3.5 w-3.5 text-[#2563EB] dark:text-[#06B6D4] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">Formula: </span>
              <span className="font-mono">{result.formulaDescription}</span>
              {result.calculationSteps && (
                <span className="block mt-0.5 text-[#64748B] dark:text-[#94A3B8]">
                  Step: {result.calculationSteps}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Precision Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B] dark:text-[#94A3B8] pt-2">
        <div className="flex items-center gap-2">
          <label htmlFor={precisionSelectId} className="font-medium text-[#0F172A] dark:text-[#F8FAFC]">
            Precision:
          </label>
          <select
            id={precisionSelectId}
            value={precision}
            onChange={(e) => {
              const val = e.target.value;
              setPrecision(val === 'auto' ? 'auto' : (parseInt(val, 10) as PrecisionMode));
            }}
            className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#0F172A] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F8FAFC] focus:border-[#2563EB] dark:focus:border-[#06B6D4]"
          >
            <option value="auto" className="dark:bg-[#1E293B]">Auto (clean)</option>
            <option value="2" className="dark:bg-[#1E293B]">2 decimals</option>
            <option value="4" className="dark:bg-[#1E293B]">4 decimals</option>
            <option value="6" className="dark:bg-[#1E293B]">6 decimals</option>
            <option value="8" className="dark:bg-[#1E293B]">8 decimals</option>
          </select>
        </div>

        {fromUnit?.notes && (
          <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] italic">
            Note: {fromUnit.notes}
          </span>
        )}
      </div>
    </div>
  );
};
