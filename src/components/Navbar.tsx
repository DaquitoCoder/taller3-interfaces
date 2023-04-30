import { useContext } from 'react';
import '../css/Navbar.css';

const Navbar = ({ setOpenModal }: any) => {
  return (
    <nav className='navbar'>
      <h3 className='navbar-title'>Smart House</h3>
      <div className='settings'>
        <i className='fa-solid fa-gear'></i>
      </div>
    </nav>
  );
};

export default Navbar;
