const Movie = (props) => {
  const {Title: title, Year: year, ImdbID: id, Type: type, Poster: poster} = props;


  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          poster === 'N/A' ? <img className="activator" alt="activator" src={`https://via.placeholder.com/300x430?text=${title}`}/> : <img className="activator" alt="activator" src={poster}/>
        }

      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
  )

}

export default Movie;
