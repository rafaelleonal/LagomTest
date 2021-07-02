import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLinks from './MenuLinks';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import {useState} from 'react';

function MenuMobile() {

  const [open, setOpen] = useState(false);

  const hamburguerIcon = <FiMenu className="w-100 h-100 hamburguer" onClick={() => setOpen(!open)}/>
  const closeIcon = <img src="../assets/Close.svg" className="img-fluid w-100 h-100 hamburguer" onClick={() => setOpen(!open)} alt="cerrar"/>

  return (
    <div className="container-fluid">
        {open ? closeIcon : hamburguerIcon }
        {open && <MenuLinks />}
    </div>
  );
}

export default MenuMobile;