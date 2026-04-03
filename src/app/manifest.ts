import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zielony Warsztat Piotra",
    short_name: "Zielony Warsztat",
    description:
      "Usługi ogrodnicze w Szczecinie i okolicach. Pielęgnacja trawników, przycinanie krzewów, zakładanie ogrodów, kostka brukowa.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f4",
    theme_color: "#3a4429",
    lang: "pl",
    icons: [
      {
        src: "/favicon-for-public/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon-for-public/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
