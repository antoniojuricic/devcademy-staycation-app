import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

export default () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};