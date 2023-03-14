import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news-wrapper md:flex my-5 w-full px-10 justify-center">
      <div className="md:w-7/12 md:mr-8">
        <h1 className="heading">Breaking News!!</h1>
        <p className="text-2xl mt-5">
          Popularly known as Koool Shej, aka Kuppi Shej, who got famous for
          blaming gravity to be the reason of falling in love, has found to
          celebrate their birthday on today, March 14. On this prestigious day,
          the mathematics researchers are proceeding for a petition to change
          the value of the mathematical constant, Pi from 3.14 to 3.15, as 3.14
          corresponds to March 14, which according to the reports, the
          researchers said, “idiots are born this day which may be viewed as a
          disappointment to the mathematical constant.”, to which Mr. Shej
          responded, “enna ondeda?”.
        </p>
        <div className="button-wrapper">
          <Link to="/about">
            {" "}
            <div className="button">Ingu vanne</div>
          </Link>
        </div>
      </div>
      <img src="/assets/shock.png" className="h-41 w-41" alt="" />
    </div>
  );
};

export default News;
