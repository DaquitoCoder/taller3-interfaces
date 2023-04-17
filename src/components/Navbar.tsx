import { useContext } from 'react';
import '../css/Navbar.css';
import Context from './Context';

const Navbar = ({ setOpenModal }: any) => {
  const openModal = useContext(Context);
  return (
    <nav className='navbar'>
      <h3 className='navbar-title'>Smart House</h3>
      <div className='settings'>
        <i
          className='fa-solid fa-gear'
          onClick={() => setOpenModal(!openModal)}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
