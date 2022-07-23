import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useGlobalContext } from '../context';

const Register = () => {
  const { isAuth, setUser } = useGlobalContext();
  React.useEffect(() => {
    if (isAuth) {
      setUser({ name: '', email: '', password: '' });
    }
  }, []);
  return <RegisterForm />;
};

export default Register;
