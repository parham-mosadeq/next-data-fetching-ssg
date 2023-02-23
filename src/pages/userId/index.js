import { getAllUsers } from '@/api/api-utils';
import PostsItems from '@/components/shared/PostsItems';
import Head from 'next/head';

const UsersHomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Users | Users id</title>
      </Head>
      <h5>here you can see all users</h5>
      <div>
        <PostsItems users={props.user} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allUsers = await getAllUsers();
  const user = [...new Set(allUsers)];
  return {
    props: {
      user,
    },
    revalidate: 5000,
    redirect: '/',
  };
}

export default UsersHomePage;
