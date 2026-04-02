import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pielęgnacja trawników Szczecin | Zielony Warsztat Piotra",
  description: "Profesjonalna pielęgnacja trawników w Szczecinie i okolicach. Koszenie, nawożenie, aeracja, odchwaszczanie. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Pielęgnacja trawników w Szczecinie"
      description="Koszenie, nawożenie, aeracja i odchwaszczanie. Dbamy o trawnik regularnie, żeby zawsze wyglądał na dopilnowany — bez Twojego zaangażowania."
    />
  );
}
