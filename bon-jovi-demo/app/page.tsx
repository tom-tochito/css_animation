import { Banner } from "@/components/banner";

export default function Home() {
  return (
    <main>
      <Banner
        banner={{
          image:
            "https://cdn.sanity.io/images/eieptkte/production/3fd58533e592dd20f1fdfe1302714fbce63f188c-158x156.jpg?w=384&q=75&fit=clip&auto=format",
          title: "YEARBOOK MACHINE",
          year: "2008-",
        }}
      />
      <Banner
        banner={{
          image:
            "https://cdn.sanity.io/images/eieptkte/production/3fd58533e592dd20f1fdfe1302714fbce63f188c-158x156.jpg?w=384&q=75&fit=clip&auto=format",
          title: "GET READY",
          year: "1975-1982",
        }}
      />
      <Banner
        variant="coming-soon"
        banner={{
          image:
            "https://cdn.sanity.io/images/eieptkte/production/3fd58533e592dd20f1fdfe1302714fbce63f188c-158x156.jpg?w=384&q=75&fit=clip&auto=format",
          title: "UPGRADE",
          year: "",
        }}
      />
    </main>
  );
}
