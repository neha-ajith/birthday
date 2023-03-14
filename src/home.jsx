import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wrapper md:flex items-center w-full px-10 justify-center">
      <div className="md:w-5/12 md:mr-8 mt-7">
        <h1 className="heading">Hi</h1>
        <p className="text-2xl md:text-3xl mt-2">
          Was thinking of something cool for this year, and then I remembered
          someone taught me something last night. Yes, I dared to use your
          spells against you
          <img src="/assets/smirk.png" className="emoji" alt="" />
        </p>
        <div className="button-wrapper">
          <Link to="/news">
            <div className="button">Breaking news!!</div>
          </Link>
        </div>
      </div>
      <img src="/assets/happy.png" className="h-41 w-41 inline" alt="" />
    </div>
  );
};

export default Home;
