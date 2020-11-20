import { NextPage } from 'next';

import Logo from '../Logo';

interface Props {}

const IndexPage: NextPage<Props> = () => {
  return (
    <div className="px-4 bg-white dark:bg-black">
      <div className="flex items-center justify-center h-screen">
        <Logo width={550} className="mx-auto" />
      </div>
    </div>
  );
};

export default IndexPage;
