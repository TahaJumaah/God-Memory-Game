export default function StandardCard({ name, title, img }) {
  function handleClick(event) {
    console.log(event);
  }

  return (
    <>
      <div onClick={handleClick} className="standard-card">
        <div className="god-img-container">
          <img className="god-img" src={img} alt="" />
        </div>
        <p>
          <em>{name}</em>
        </p>
        <p>{title}</p>
      </div>
    </>
  );
}
