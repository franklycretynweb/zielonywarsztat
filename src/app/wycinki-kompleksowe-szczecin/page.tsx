import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Wycinki kompleksowe Szczecin | Zielony Warsztat Piotra",
  description: "Wycinki drzew i krzewów w Szczecinie i okolicach. Kompleksowa wycinka z wywozem i uprzątnięciem terenu. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Wycinki kompleksowe w Szczecinie"
      description="Wycinka drzew i krzewów z pełnym uprzątnięciem terenu. Wywóz i utylizacja w cenie — zostawiamy posesję gotową do dalszych prac."
    />
  );
}
