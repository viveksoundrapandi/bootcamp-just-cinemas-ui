import React from "react";
import Detail from "../../movies/Detail";

class MovieDetail extends React.Component {
  render() {
    const movie = {
      id: 1,
      name: "Kabali",
      experiences: "RDX, Dolby Atmos, SUB",
      slug: "Kabali",
      synopsis: "Thalaiva's Crime thriller.",
      image: "https://i.ytimg.com/vi/kYcl-NcY3Dg/maxresdefault.jpg",
      stills: ["kabali", "kabali", "kabali"]
    };

    return (
      <div>
        <Detail movie={movie} />
      </div>
    );
  }
}

export default MovieDetail;
