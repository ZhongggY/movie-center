import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
export const Search = (apiPath) => {
  const [searchPara] = useSearchParams();
  const query = searchPara.get("q");
  const { data: movies } = useFetch(Object.values(apiPath), query);
  console.log(query, apiPath);
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No results found for ${query}`
            : `This the results for ${query}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
