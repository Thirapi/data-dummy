// src/components/Resources.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const resources = [
  { path: '/users', url: 'https://data-dummy.vercel.app/users', description: 'List of users' },
  { path: '/posts', url: 'https://data-dummy.vercel.app/posts', description: 'List of posts' },
];

const Resources = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Resources
      </Typography>
      <List>
        {resources.map((resource, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.path}
                </a>
              }
              secondary={resource.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Resources;
