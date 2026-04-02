import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Nasadzanie i przesadzanie roślin Szczecin | Zielony Warsztat Piotra",
  description: "Nasadzanie i przesadzanie roślin w Szczecinie i okolicach. Dobór roślin do gleby, światła i charakteru miejsca. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Nasadzanie i przesadzanie roślin w Szczecinie"
      description="Dobieramy rośliny do gleby, ekspozycji i charakteru miejsca. Sadzenie z myślą o tym, jak ogród ma wyglądać za kilka sezonów — nie tylko zaraz po robocie."
    />
  );
}
