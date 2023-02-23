import { getAllPost, getUserIdPosts } from '@/api/api-utils';
import BackBtn from '@/components/shared/BackBtn';
import PostsItems from '@/components/shared/PostsItems';
import Head from 'next/head';
import { useRouter } from 'next/router';

const UserIdHomePage = (props) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Users | User {router.query.users}</title>
      </Head>
      <h1>UserIdHomePage</h1>
      <div>
        <PostsItems posts={props.filteredUsers} />
      </div>
      <BackBtn link={'/'} txt={'Home'} />
    </div>
  );
};

export async function getStaticProps(context) {
  // * getting userId from context object
  const userId = context.params.users;

  // * passing the id to getUserIdPosts function
  const filteredUsers = await getUserIdPosts(userId);
  return {
    props: {
      filteredUsers,
    },
    revalidate: 5000,
  };
}

export async function getStaticPaths() {
  // * getting all posts
  const userIdsPosts = await getAllPost();
  // * creating dynamic routes
  const paths = userIdsPosts.map((post) => ({
    // *building !paths! needed format
    params: { users: `${post.userId}` },
  }));

  return {
    // * returning the PATH that was created by us
    paths,
    fallback: false,
  };
}

export default UserIdHomePage;
