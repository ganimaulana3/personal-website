"use client";

import React from "react";
import { useTheme } from "../global/theme-provider";

export default function BackgroundFX({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const { theme } = useTheme();

    if (theme !== "dark") {
        return <>{children}</>;
    }

    return (
        <>
            <div
                className={`fixed inset-0 isolate -z-10 min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,#0C0B16_0%,#0C0B16_55%,#12111F_100%)] ${className}`}
            >
                {/* Top decoration */}
                {/* orb-top-left */}
                <div className="pointer-events-none absolute -top-[120px] -left-[130px] h-[220px] w-[320px] -rotate-[35deg] rounded-full bg-[linear-gradient(135deg,#7C5DFA_0%,#39256F_45%,transparent_100%)] opacity-75 blur-[1px] md:h-[280px] md:w-[480px]" />

                {/* orb-top-right */}
                <div className="pointer-events-none absolute top-[100px] -right-[130px] h-[260px] w-[260px] rounded-full border border-[#8E75FF]/15 bg-[radial-gradient(circle_at_35%_40%,rgba(124,93,250,0.55),rgba(124,93,250,0.12)_55%,transparent_75%)] shadow-[inset_0_0_80px_rgba(124,93,250,0.15)] md:-right-[100px] md:h-[340px] md:w-[340px]" />

                {/* orb-small */}
                <div className="pointer-events-none absolute top-[155px] left-[32%] h-[34px] w-[34px] rounded-full bg-[linear-gradient(135deg,#30235D,#171427)]" />

                {/* Middle-right waves (Gelombang di bawah orbiter) */}
                {/* Gelombang luar (lebih lebar & redup) */}
                <div className="pointer-events-none absolute top-[310px] -right-[180px] h-[360px] w-[520px] -rotate-[22deg] rounded-[50%] bg-[linear-gradient(180deg,rgba(124,93,250,0.28)_0%,rgba(33,25,74,0.15)_45%,transparent_80%)] md:top-[330px] md:-right-[140px] md:h-[440px] md:w-[680px]" />


                {/* Orbital decoration */}
                <div className="pointer-events-none absolute top-[210px] -right-[90px] h-[145px] w-[280px] -rotate-[27deg] md:-right-[15px] md:h-[190px] md:w-[370px]">
                    {/* orbital-ring */}
                    <div className="h-full w-full rounded-[50%] border-[1.5px] border-solid border-[var(--color-brand)] shadow-[0_0_12px_rgba(124,93,250,0.2)]" />
                    {/* dot-left */}
                    <span className="absolute bottom-1/2 left-0 h-[11px] w-[11px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--color-brand-soft)] shadow-[0_0_15px_var(--color-brand)]" />
                    {/* dot-right */}
                    <span className="absolute top-1/2 right-0 h-[11px] w-[11px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-soft)] shadow-[0_0_15px_var(--color-brand)]" />
                    {/* Gelombang dalam (lebih terang & tajam di puncak lengkungan) */}
                    <div className="pointer-events-none absolute top-[365px] -right-[140px] h-[320px] w-[380px] -rotate-[15deg] rounded-[50%] bg-[linear-gradient(180deg,rgba(124,93,250,0.45)_0%,rgba(57,37,111,0.18)_45%,transparent_78%)] md:top-[395px] md:-right-[100px] md:h-[380px] md:w-[480px]" />
                </div>

                {/* Stars */}
                <span className="pointer-events-none absolute top-[105px] left-[63%] text-[32px] text-[var(--color-brand)] [text-shadow:0_0_15px_var(--color-brand)]">
                    ✦
                </span>
                <span className="pointer-events-none absolute top-[225px] left-[53%] text-[23px] text-[var(--color-brand)] [text-shadow:0_0_15px_var(--color-brand)]">
                    ✦
                </span>
                <span className="pointer-events-none absolute top-[55%] right-[48%] text-[32px] text-[var(--color-brand)] [text-shadow:0_0_15px_var(--color-brand)]">
                    ✦
                </span>

                {/* Bottom decoration */}
                {/* wave-one */}
                <div className="pointer-events-none absolute -bottom-[230px] -left-[15%] h-[330px] w-[130%] -rotate-[8deg] rounded-full bg-[linear-gradient(120deg,#12111F,#21194A,#7C5DFA)] opacity-65 blur-[1px]" />

                {/* wave-two */}
                <div className="pointer-events-none absolute -right-[30%] -bottom-[190px] h-[240px] w-[90%] -rotate-[18deg] rounded-full bg-[linear-gradient(120deg,#21194A,#7C5DFA)] opacity-40" />

                {/* orb-bottom-left */}
                <div className="pointer-events-none absolute -bottom-[200px] -left-[30px] h-[300px] w-[300px] rounded-full border border-[#7C5DFA]/25 bg-[radial-gradient(circle,transparent_50%,rgba(124,93,250,0.08))]" />
            </div>
            {children}
        </>
    );
}
