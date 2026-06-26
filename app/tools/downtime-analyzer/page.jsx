import DowntimeAnalyzer from "../../../components/DowntimeAnalyzer";

export const metadata = {
  title: "Downtime Analyzer | The Digital Plant",
  description: "Analyze equipment downtime from simple stoppage data."
};

export default function DowntimeAnalyzerPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="article">
          <div className="card-kicker">Manufacturing analytics tool</div>
          <h1>Downtime Analyzer</h1>
          <p>
            Paste simple stoppage data and identify which equipment contributes most to downtime.
          </p>
          <DowntimeAnalyzer />
        </div>
      </div>
    </section>
  );
}
