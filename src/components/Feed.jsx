import React from 'react'
import { Box } from "@mui/material";

import Post from './Post';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post initial="J" title="John Wick" date="August 31, 2022" image="https://images.pexels.com/photos/1461378/pexels-photo-1461378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post initial="J" title="Jessica D'Souza" date="August 24, 2022" image="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post initial="J" title="Jayram Mahesh" date="August 21, 2022" image="https://images.pexels.com/photos/1065753/pexels-photo-1065753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post initial="V" title="Vishambar Rane" date="August 19, 2022" image="https://images.pexels.com/photos/243076/pexels-photo-243076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Post initial="K" title="Kripal Dessai" date="August 16, 2022" image="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </Box>
  )
}

export default Feed