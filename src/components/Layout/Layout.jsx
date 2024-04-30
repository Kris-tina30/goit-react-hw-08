import React from 'react';

import AppBar from '../AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <>
        <AppBar />
      </>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
