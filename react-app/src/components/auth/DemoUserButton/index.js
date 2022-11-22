import { useDispatch } from 'react-redux';
import { login } from '../../../store/session';

const DemoUserButton = () => {
    const dispatch = useDispatch()

    const demoLogin = () => dispatch(login('gork@teef.io', 'password2'))

    return (
        <button className='auth-submit-button' onClick={demoLogin}>
             Demo User
        </button>);
};

export default DemoUserButton;
