import EmpleosSearchForm from "./EmpleosSearchForm";

function JobsSearch({ onSearch, onTextFilter }) {
  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <EmpleosSearchForm onSearch={onSearch} onTextFilter={onTextFilter} />
    </section>
  );
}

export default JobsSearch;
