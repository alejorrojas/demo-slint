import post from './Interfaces';

const Blog = ({ user, title, body }: post) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title} - {user} </h5>
      <p className="card-text">{body} </p>
    </div>
  </div>
);

export default Blog;
