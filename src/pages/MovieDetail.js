import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.jpg";
export const MovieDetail = () => {
  const paramaters = useParams();
  const [data, setData] = useState("");
  let imagePath = "";
  let title = "";
  let overview = "";
  let genres = [];
  let voteAve = 0;
  let voteCount = 0;
  let runtime = 0;
  let release_date = "";
  let spoken_languages = [];
  let imdb_id = "";
  if (data !== undefined) {
    imagePath = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : backup;
    title = data.title;
    overview = data.overview;
    genres = data.genres;
    voteAve = data.vote_average;
    voteCount = data.vote_count;
    runtime = data.runtime;
    release_date = data.release_date;
    spoken_languages = data.spoken_languages;
    imdb_id = data.imdb_id;
  }
  useEffect(() => {
    const fetchMovie = async function () {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${paramaters.id}?api_key=e65e84a7c0906699be02c1fbefbc1796`
      );
      const json = await res.json();
      setData(json);

      console.log(json);
    };
    fetchMovie();
  }, []);
  useEffect(() => {
    document.title = `${title}`;
  });
  return (
    <main>
      <section className="flex justify-around flex-wrap">
        <div className="max-w-sm">
          <img className="my-3" src={imagePath} alt={title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center">{title}</h1>
          <p className="my-3">{overview}</p>
          <p className="flex my-7 felx-wrap gap-2">
            {genres?.map((genre) => (
              <span
                key={genre.id}
                className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-3"
              >
                {genre.name}
              </span>
            ))}
          </p>

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {voteAve}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">
              {voteCount} reviewers
            </span>
          </div>
          <p className="my-4">
            <span>Running Time:</span>
            <span className="ml-2">{runtime}</span>
          </p>
          <p className="my-4">
            <span>Release_Date:</span>
            <span className="ml-2">{release_date}</span>
          </p>
          <p className="my-4">
            <span>Spoken_Languages:</span>
            {spoken_languages?.map((lang) => (
              <span key={lang.iso_639_1} className="ml-2">
                {lang.english_name}
              </span>
            ))}
          </p>
          <p className="my-4">
            <span>IMDB_ID:</span>
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              className="ml-2"
              target="blank"
            >
              {imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
