function MovieDetail({ img, title, year, lang, rating, summary, gen }) {
  return (
    <div>
      <img src={img} />
      <dl>
        <dt>{title}</dt>
        <dd>
          <span>{year}</span>
          <span>{lang}</span>
          <span>{rating}</span>
        </dd>
        <p>{summary}</p>
        <ul>
          {gen.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </dl>
    </div>
  );
}
export default MovieDetail;
