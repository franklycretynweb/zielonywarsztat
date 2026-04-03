export const serviceOptions = [
  "Pielęgnacja trawników",
  "Przycinanie krzewów i drzewek",
  "Wycinki kompleksowe",
  "Nasadzanie i przesadzanie roślin",
  "Projektowanie i zakładanie ogrodów",
  "Układanie kostki brukowej",
  "Nie wiem — chcę porozmawiać",
] as const;

export type ContactService = (typeof serviceOptions)[number];
