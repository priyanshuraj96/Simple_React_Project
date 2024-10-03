import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      <div>
        <h2 className="title"> travel with my love </h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
