'use client';

import { Icons } from 'ui';
import { ProfileIconMenu } from '../../modules/user/components/ProfileIconMenu';

interface AppNavbarProps {
  children?: React.ReactNode;
};

export const AppNavBar = (): React.ReactNode => {
  return (
    <nav className='py-4 md:py-6 text-black dark:text-white'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <a href='/app'>
          Logo
        </a>

        <div className='flex space-x-6 items-center'>
          Profile
        </div>
      </div>
    </nav>
  );
};
