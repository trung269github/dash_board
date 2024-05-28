// components/MainLayout.js
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children, isSidebarOpen, toggleSidebar }) => (
  <>
    <Navbar toggleSidebar={toggleSidebar} />
    <Box display="flex" >
      {isSidebarOpen && (
        <Box width="15%">
          <Sidebar />
        </Box>
      )}
      <Box width={isSidebarOpen ? '85%' : '100%'} p={2}>
        {children}
      </Box>
    </Box>
  </>
);

export default MainLayout;