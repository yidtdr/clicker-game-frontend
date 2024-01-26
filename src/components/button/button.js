import { observer } from "mobx-react";
import './button.css'
import mainStore from "../../store/mainStore";

const Button = observer(() => {
    const handleClick = () =>
    {
        mainStore.socket.emit('increase');
    }
    return (
        <div className="button-wrapper">
            <div className="centered">
                <h1 className="button-text">CLICK ME!</h1>
                <button className="increase-score-button" onClick={handleClick} />
            </div>
        </div>
    );
})

export default Button;
