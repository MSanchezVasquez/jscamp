import { useState } from "react";
import Pagination from "./Pagination";

function SearchResults({ data }) {
  const [isApplied, setIsApplied] = useState(false);

  console.log("---> render");

  function handleClick() {
    setIsApplied(!isApplied);
  }
  return (
    <section>
      <h2>Resultados de búsqueda</h2>

      <div className="jobs-listings">
        {data.map((article) => (
          <article
            key={article.id}
            className="job-listing-card"
            data-modalidad={article.data.modalidad}
            data-nivel={article.data.nivel}
            data-technology={article.data.technology}
          >
            <div>
              <h3>{article.titulo}</h3>
              <small>{article.empresa}</small>
              <p>{article.descripcion}</p>
            </div>
            <button
              disabled={isApplied}
              className={`button-apply-job`}
              onClick={handleClick}
            >
              {isApplied ? "Aplicado" : "Aplicar"}
            </button>
          </article>
        ))}
      </div>

      <Pagination />
    </section>
  );
}

export default SearchResults;
