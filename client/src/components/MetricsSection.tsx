export default function MetricsSection() {
  const metrics = [
    { value: "+300%", label: "Average Organic Traffic Increase" },
    { value: "98", label: "Average Lighthouse Score" },
    { value: "5x", label: "Faster Optimization" },
    { value: "24/7", label: "Ranking Monitoring" }
  ];

  return (
    <section className="py-16 bg-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RankPro Gets Results</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Join thousands of businesses that are seeing real improvements in their search performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-lg opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="mr-2 opacity-90">Trusted by leading brands worldwide</span>
            <div className="flex space-x-6">
              <span className="text-xl font-semibold opacity-80">Brand</span>
              <span className="text-xl font-semibold opacity-80">Brand</span>
              <span className="text-xl font-semibold opacity-80">Brand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
