import Footer from "./components/Footer";
import Header from "./components/Header";
import JobsSearch from "./components/JobsSearch";
import SearchResults from "./components/SearchResults";
import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      <main>
        <JobsSearch />

        <SearchResults data={data} />
      </main>

      <Footer />
    </>
  );
}

export default App;
