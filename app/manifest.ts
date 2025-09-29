import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "D-LUX Detailing",
    short_name: "D-LUX",
    description: "Mobile luxury car detailing in Albuquerque, NM.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0f11",
    theme_color: "#0e0f11",
    icons: [{ src: "/img/logo-dlux.jpeg", sizes: "192x192", type: "image/jpeg" }],
  }
}
