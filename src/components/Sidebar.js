import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Book, People, Receipt, Dashboard } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        minHeight: '100vh',
        boxShadow: 3,
      }}
      className="bg-white text-gray-800 h-screen shadow-lg"
    >
      <List className="flex flex-col">
      <ListItem component={Link} to="/dashboard" className="p-4 hover:bg-gray-100">
          <ListItemIcon>
            <Dashboard className="text-blue-500" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem  component={Link} to="/books" className="p-4 hover:bg-gray-100">
          <ListItemIcon>
            <Book className="text-blue-500" />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
        
        <ListItem  component={Link} to="/users" className="p-4 hover:bg-gray-100">
          <ListItemIcon>
            <People className="text-blue-500" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem component={Link} to="/transactions" className="p-4 hover:bg-gray-100">
          <ListItemIcon>
            <Receipt className="text-blue-500" />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>

        
        
      </List>
    </Box>
  );
};

export default Sidebar;