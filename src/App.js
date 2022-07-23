import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useGlobalContext } from './context';
import { Navigate } from 'react-router-dom';
import SingleBook from './components/SingleBook';
import Modal from './components/Modal';
import booksData from './data';

const ProtectedRoute = ({ children, isAuth }) => {
  if (!isAuth) return <Navigate to="/login" />;
  return children;
};

const App = () => {
  const { isAuth, setBooks } = useGlobalContext();
  React.useEffect(() => {
    setBooks(booksData);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard">
          <Route
            index
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="book/:id" element={<SingleBook />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
