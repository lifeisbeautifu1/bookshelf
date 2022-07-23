import React from 'react';
import LoginForm from '../components/LoginForm';
import { useGlobalContext } from '../context';

const Login = () => {
  const { isAuth, setUser } = useGlobalContext();
  React.useEffect(() => {
    if (isAuth) {
      setUser({ name: '', email: '', password: '' });
    }
  }, []);
  return <LoginForm />;
};

export default Login;
