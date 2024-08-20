// src/components/Routes.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const routes = [
  { path: '/users', url: 'https://data-dummy.vercel.app/users/1', description: 'Get all users' },
  { path: '/users/:id', url: 'https://data-dummy.vercel.app/users/1', description: 'Get a specific user by ID' },
  { path: '/posts', url: 'https://data-dummy.vercel.app/posts/1', description: 'Get all posts' },
  { path: '/users/:id', url: 'https://data-dummy.vercel.app/users/1', description: 'Get a specific user by ID' },
];

const Routes = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        Routes
      </Typography>
      <List>
        {routes.map((route, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <a href={route.url} target="_blank" rel="noopener noreferrer">
                  {route.path}
                </a>
              }
              secondary={route.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Routes;
