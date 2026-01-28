export default function TrustedBy() {
  const partners = ["NVIDIA", "HPE", "Equinix", "NTU"];

  return (
    <section className="py-12 border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-mono text-white/40 mb-8 uppercase tracking-wider">
          Supported by a global ecosystem
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-xl md:text-2xl font-bold tracking-tighter hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
