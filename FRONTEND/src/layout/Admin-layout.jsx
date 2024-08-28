import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import './adminlayout.css'; // Import the CSS file
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const userData = user?.userData;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!userData || !userData.isAdmin) {
    toast.error("You are not authorized to access this page");
    return <Navigate to="/" />;
  }
  else{
    toast.success("Welcome to admin dashboard");
  }

  return (
    <>
      <section className="main-heading">
      <h1> admin <span> dashboard </span> </h1>
      <p> welcome {user && user.userData.username ? ` ${user.userData.username}` : "ADMIN"} to admin dashboard </p>

    </section>
  
    <div className="admin-layout">
      <aside className="sidebar">
        
        <nav>
          <ul className='sidebar-nav'>
            <li>
              <NavLink to="/admin/users" className={({ isActive }) => (isActive ? 'active' : '')}>Users</NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
    </>
  );
};
