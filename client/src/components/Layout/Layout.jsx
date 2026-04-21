import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Common/Footer';

export default function Layout({ showNavbar = true, showFooter = true }) {
  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}
