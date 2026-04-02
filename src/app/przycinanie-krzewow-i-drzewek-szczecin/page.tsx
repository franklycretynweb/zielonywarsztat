import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Przycinanie krzewów i drzewek Szczecin | Zielony Warsztat Piotra",
  description: "Przycinanie krzewów i drzewek ozdobnych w Szczecinie i okolicach. Formowanie żywopłotów, cięcia pielęgnacyjne i sanitarne. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Przycinanie krzewów i drzewek w Szczecinie"
      description="Formowanie żywopłotów, cięcia pielęgnacyjne i sanitarne. Pracujemy z planem — nie tniemy na oślep, tylko tak żeby roślina zdrowo rosła i ładnie wyglądała."
    />
  );
}
