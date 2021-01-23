import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



import SessionContext from '../contexts/SessionContext';

const Login = () => {
  const history = useHistory();

  const { setAuthenticated } = useContext(SessionContext);

  useEffect(() => {
    setAuthenticated(false);
    history.push('/login');
  }, [history,setAuthenticated]);

  return null;
};

export default Login;
