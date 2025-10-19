export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || "https://rocket-moto-base.vercel.app";

  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjkyNTQ5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweERhNDdjYmU0MTEwNjk4NTk5ODJENjRBNUY1YkQ4OUYzNjFmQ0UyOTIifQ",
      payload: "eyJkb21haW4iOiJyb2NrZXQtbW90by1iYXNlLnZlcmNlbC5hcHAifQ",
      signature: "zO8XT34wpTgIUTqeB/6wrdoD1UnjOmWG1DFOdBRlRCBsa8Tf1kHZ8RSb8kguluG2C9Q6rcdjvODMEfbvJCmC5Bw="
    },
    miniapp: {
      name: "RocketMechanicForMoto",
      short_name: "RocketMoto",
      description: "Mini app pour gérer et customiser les motos",
      start_url: "/",
      url: URL,
      icons: [
        {
          src: "/icon.png",
          sizes: "192x192",
          type: "image/png"
        }
      ],
      display: "standalone",
      theme_color: "#000000",
      background_color: "#ffffff"
    },
    baseBuilder: {
      ownerAddress: "0x6Ecaf0E5fbA21Ee26A8Bb7a43dadd3563c246b49"
    },
    metadata: {
      category: "game",
      tags: ["moto", "trump", "mechanic"],
      version: "1.0.0",
      author: "Khano"
    }
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/json" }
  });
}
