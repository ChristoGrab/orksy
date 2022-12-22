import { useDispatch } from 'react-redux';
import { login } from '../../../store/session';

const DemoUserButton = () => {
    const dispatch = useDispatch()

    const demoLogin = async (e) => {
        e.preventDefault();
        
        
        
        dispatch(login('demo@teef.io', 'password'))
    }

    return (
        <button className='auth-submit-button green' onClick={demoLogin}>
             Demo User
        </button>);
};

export default DemoUserButton;
