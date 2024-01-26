import { observer } from 'mobx-react';
import './header.css';
import mainStore from '../../store/mainStore';

const Header = observer(() => {
  return (
    <div className="header">
        <h4 className='nickname'>Nickname</h4>
        <h4 className='score'>{mainStore?.score}</h4>
    </div>
  );
})

export default Header;
