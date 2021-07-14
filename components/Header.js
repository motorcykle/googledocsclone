import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { signOut } from 'next-auth/client';
import { useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();


  return (
    <header className="p-2 shadow-md sticky top-0 bg-white z-50">
      <div className="grid grid-cols-4">

        <div className="flex items-center col-span-1">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className="text-[#2196f3] items-center space-x-2 ml-3 hidden md:inline-flex">
            <DescriptionIcon fontSize="large" />
            <p className="text-xl text-gray-500">Docs</p>
          </div>
        </div>

        <div className="col-span-2">
          <div className="bg-gray-100 rounded-lg hidden md:inline-flex w-full items-center space-x-1 text-gray-500 focus-within:text-gray-600 focus-within:shadow-md">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input type="text" className="flex-grow outline-none bg-transparent" />
          </div>
        </div>

        <div className="flex items-center col-span-1 justify-end space-x-1">
          <div className="inline-block md:hidden">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={signOut}>
            <img src={session?.user.image} className=" rounded-full h-[24px] w-[24px] " alt="" />
          </IconButton>
        </div>

      </div>
    </header>
  );
}

export default Header;
