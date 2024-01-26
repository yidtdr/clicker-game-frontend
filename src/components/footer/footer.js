import { observer } from 'mobx-react';
import './footer.css';
import mainStore from '../../store/mainStore';

const Footer = observer(() => {
  return (
    <div className="footer">
        <button className='toggle-menu' id='shop'></button>
        <button className='toggle-menu' id='guild'></button>
        <button className='toggle-menu' id='stats'></button>
    </div>
  );
})

export default Footer;
