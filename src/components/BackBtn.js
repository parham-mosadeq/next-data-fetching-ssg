import Link from 'next/link';
const BackBtn = ({ link, txt }) => {
  return <Link href={link}>{txt}</Link>;
};

export default BackBtn;
