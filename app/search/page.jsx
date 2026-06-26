import SearchClient from "../../components/SearchClient";
import { getSearchItems } from "../../lib/search";

export const metadata = {
  title: "Search | The Digital Plant",
  description: "Search The Digital Plant articles, calculators, tools, and engineering resources."
};

export default function SearchPage() {
  const items = getSearchItems();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="eyebrow">Search</div>
            <h2>Find industrial engineering knowledge</h2>
            <p className="lead">Search articles, tools, calculators, and downloadable resources.</p>
          </div>
        </div>
        <SearchClient items={items} />
      </div>
    </section>
  );
}
