import React from 'react';
import Search from './Search';
import '../styles/App.css';

interface HeaderProps {
  setValue: (arg: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setValue }: HeaderProps) => {
  return (
    <header>
      <div className="wrapper">
        <Search setValue={setValue} />
      </div>
    </header>
  );
};
export default Header;
