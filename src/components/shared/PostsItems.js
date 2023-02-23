import Link from 'next/link';
import BackBtn from './BackBtn';

const PostsItems = ({ posts, users }) => {
  const baseUrl = 'userId';

  if (users) {
    return (
      <div>
        {users.map((item) => (
          <p>
            user:
            <Link href={`${baseUrl}/${item}`}>{item}</Link>
          </p>
        ))}
        <BackBtn link={'/'} txt={'Home'} />
      </div>
    );
  }

  if (posts) {
    return (
      <div>
        {posts ? (
          posts.map((post) => {
            const { title, body, id, userId } = post;
            return (
              <div key={id}>
                <div>
                  <h3>{title}</h3>
                  <div>
                    <p>{body}</p>
                  </div>
                  <Link href={`${baseUrl}/${userId}`}>userId:{userId}</Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
};
export default PostsItems;
