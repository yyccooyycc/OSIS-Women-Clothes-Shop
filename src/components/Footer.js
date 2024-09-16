import React from 'react';
import { Box, Typography, Grid2, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'green',
        color: 'white',
        padding: '20px',
        mt: 'auto'
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6"> OSIS Women Clothings</Typography>
          <Typography variant="body2">
            © {new Date().getFullYear()} OSIS Women Clothings. All rights reserved.
          </Typography>
        </Grid2>
        
        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#" color="inherit" underline="hover">About Us</Link><br />
          <Link href="#" color="inherit" underline="hover">Shipping</Link><br />
          <Link href="#" color="inherit" underline="hover">Contact</Link><br />
          <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
        </Grid2>

        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">Email: ooo@osis-women-clothings.com</Typography>
          <Typography variant="body2">Phone: +02-1234-5678</Typography>
          <Typography variant="body2">Address: City</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Footer;
