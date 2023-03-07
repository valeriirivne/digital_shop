import { Outlet } from 'react-router-dom';

import Directory from '../components/Directory';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      {/* <Outlet /> */}
      <Directory />;
      <Footer />
    </div>
  );
};

export default HomePage;
