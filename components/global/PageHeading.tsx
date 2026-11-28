"use client";

import type { Dictionary } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

export default function PageHeading({
  navKey,
}: {
  navKey: keyof Dictionary["nav"];
}) {
  const { dict } = useI18n();

  return (
    <div>
      <h1>{dict.nav[navKey]}</h1>
    </div>
  );
}
