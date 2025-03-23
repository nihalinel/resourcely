import { Outlet } from 'react-router-dom';
import './index.scss';

export default function Layout() {
return (
    <div className="layout-container">
      {/* Navbar here if needed */}
      <Outlet />  {/* This renders Waitlist inside Layout */}
    </div>
);
}
