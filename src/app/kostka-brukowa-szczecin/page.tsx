import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Kostka brukowa Szczecin | Zielony Warsztat Piotra",
  description: "Układanie kostki brukowej w Szczecinie i okolicach. Podjazdy, ścieżki, tarasy, obrzeża. Solidna podbudowa i estetyczne wykończenie. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Kostka brukowa w Szczecinie"
      description="Podjazdy, ścieżki, tarasy i obrzeża. Pilnujemy podbudowy i proporcji — kostka ma porządkować przestrzeń i służyć przez lata, nie tylko wyglądać na zdjęciu."
    />
  );
}
