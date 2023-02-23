import { getAllPost } from '@/api/api-utils';
import PostsItems from '@/components/shared/PostsItems';
const HomePage = (props) => {
  return (
    <div>
      <h1>homepage</h1>
      <PostsItems posts={props.posts} />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllPost();
  return {
    props: {
      posts,
    },
    revalidate: 2000,
  };
}

export default HomePage;
