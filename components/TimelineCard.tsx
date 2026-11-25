import { ChevronRight } from "lucide-react";

interface TimelineItem {
    year: string;
    title: string;
    subtitle: string;
}

interface TimelineCardProps {
    title: string;
    icon: React.ReactNode;
    items: TimelineItem[];
}

export default function TimelineCard({ title, icon, items }: TimelineCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm backdrop-blur-md transition-colors dark:border-line dark:bg-surface/80">
            {/* Header Card */}
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <span className="text-brand dark:text-brand-soft">{icon}</span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h2>
                </div>
                <button className="flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-brand dark:text-mist dark:hover:text-brand-soft">
                    Lihat Semua <ChevronRight className="h-3.5 w-3.5" />
                </button>
            </div>

            {/* List Timeline */}
            <div className="relative ml-2 space-y-5 border-l-2 border-brand/30 pl-5">
                {items.map((item, index) => (
                    <div key={index} className="relative">
                        {/* Titik timeline */}
                        <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-brand ring-4 ring-white dark:bg-brand-soft dark:ring-surface" />

                        <p className="text-xs text-slate-500 dark:text-mist">{item.year}</p>
                        <h3 className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-xs italic text-slate-500 dark:text-mist">{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}