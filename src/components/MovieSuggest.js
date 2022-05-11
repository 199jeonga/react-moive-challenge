function MovieSuggest({ url, title, img }) {
  return (
    <div>
      <img src={img} />
      <em>{title}</em>
    </div>
  );
}
export default MovieSuggest;
