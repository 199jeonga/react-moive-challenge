import { Link } from "react-router-dom";

function HomeDetail({ id, title, language, summary, img, bgImg }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <ul>
        <li>{title}</li>
        <li>{language}</li>
        <li>{summary}</li>
      </ul>
    </div>
  );
}
export default HomeDetail;
