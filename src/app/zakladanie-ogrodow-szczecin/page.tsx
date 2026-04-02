import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Zakładanie ogrodów Szczecin | Zielony Warsztat Piotra",
  description: "Zakładanie ogrodów w Szczecinie i okolicach od podstaw. Projekt, przygotowanie terenu, nasadzenia, trawnik. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Zakładanie ogrodów w Szczecinie"
      description="Ogród od zera — przygotowanie terenu, trawnik, nasadzenia, obrzeża. Robimy to z planem, żeby efekt był spójny i trwały, a nie przypadkowy."
    />
  );
}
