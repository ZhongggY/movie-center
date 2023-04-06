import found from "../assets/404images.jpg";
import { Link } from "react-router-dom";
import { Buttons } from "../components";
export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-row px-2 justify-center">
        <div className="flex flex-row px-2 items-center">
          <img className="rounded" src={found} alt="404 , page not found" />
          <p className="px-2 text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 , page not found!!
          </p>
        </div>
      </section>
      <div className="flex items-center  justify-center my-20 mx-5">
        <Link to="/">
          <Buttons Children={"back to home page"}></Buttons>
        </Link>
      </div>
    </main>
  );
};
