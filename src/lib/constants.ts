export const Meta = {
  SITE_NAME: "NYB",
  SITE_DOMAIN: ".AI",
  LINKEDIN_URL: "https://www.linkedin.com/company/nanyang-biologics",
  COMPANY_EMAIL: "office@nanyangbiologics.com",
} as const;

export const Partners = [
  {
    name: "NVIDIA",
    logo: "/nvidia.svg",
    className: "h-8 md:h-12 -translate-y-1",
  },
  { name: "HPE", logo: "/hpe.svg", className: "h-5 md:h-7" },
  { name: "Equinix", logo: "/equinix.svg", className: "h-8 md:h-8" },
  {
    name: "NTU",
    logo: "/ntu.svg",
    className: "h-10 md:h-20",
    disableFilter: true,
  }, // Adjusted height for academic seal
];

export const News = [
  {
    title: "Winner of SuperAI Genesis Competition 2025",
    source: "SuperAI Genesis 2025",
    link: "https://www.superai.com/genesis-startup-competition",
    img: "https://cdn.prod.website-files.com/676ddc810a7783b7e8ab4293/6887405943b685091d1589f5_nwCyadh4AexAueBDVUZNH4JE5c1PJaz2am81Hw9p6E8.avif",
  },
  {
    title: "Revolutionising drug discovery with AI in South-east Asia",
    source: "The Business Times",
    link: "https://www.businesstimes.com.sg/events-awards/design-ai-tech-awards/design-ai-and-tech-awards/revolutionising-drug-discovery-ai-south-east-asia",
    img: "https://cassette.sphdigital.com.sg/image/businesstimes/9818ba7bcbd7341c687c2a9b49187ac83cf346926c5f73d4050e351ff3efd6ee?w=960&dpr=1&f=webp",
  },
  {
    title: "How AI Is Accelerating Drug Discovery at NYB AI",
    source: "Equinix",
    link: "https://www.youtube.com/watch?v=V-JhZzkhCF4",
    img: "/nyb-yt.jpg",
  },
] as const;

export const FooterPartners = [
  {
    name: "NVIDIA",
    logo: "/nvidia.svg",
    className: "h-4 md:h-6 -translate-y-2",
  },
  { name: "HPE", logo: "/hpe.svg", className: "h-2 md:h-4" },
  { name: "Equinix", logo: "/equinix.svg", className: "h-2 md:h-4" },
  {
    name: "NTU",
    logo: "/ntu.svg",
    className: "h-6 md:h-16 -translate-y-6",
    disableFilter: true,
  }, // Adjusted height for academic seal
];
