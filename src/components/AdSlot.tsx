import React from 'react';

interface AdSlotProps {
  position?: 'top' | 'sidebar' | 'in_content' | 'footer';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ position = 'in_content', className = '' }) => {
  const adsenseClientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;

  // In production with an active AdSense client ID, this can mount the responsive AdSense unit.
  // In development or when unconfigured, it stays either invisible or renders a very subtle, compliant non-intrusive container.
  if (!adsenseClientId) {
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`my-6 mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-[#E2E8F0] bg-slate-50 p-4 text-center dark:border-[#334155] dark:bg-[#1E293B]/40 ${className}`}
    >
      <span className="block text-[11px] font-medium tracking-wider uppercase text-[#64748B] dark:text-[#94A3B8]">
        Advertisement
      </span>
      <div className="mt-2 min-h-[90px] flex items-center justify-center text-xs text-[#64748B] dark:text-[#94A3B8]">
        {/* AdSense ins tag configured with data-ad-client={adsenseClientId} */}
        <span>Ad space reserved for publisher ID {adsenseClientId}</span>
      </div>
    </aside>
  );
};
