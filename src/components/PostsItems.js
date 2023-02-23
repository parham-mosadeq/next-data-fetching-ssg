import Link from 'next/link';
const PostsItems = ({ posts }) => {
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
                <Link href={`/userId/${userId}`}>userId:{userId}</Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostsItems;
