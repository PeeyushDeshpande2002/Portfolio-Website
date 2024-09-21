import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Job Hunt',
    description: 'A MERN stack web app for job application with role-based authentication.',
    link: 'https://github.com/PeeyushDeshpande2002/Job-Hunt',
  },
  {
    title: 'DNS Manager',
    description: 'Central dashboard for managing DNS records on AWS Route 53.',
    link: 'https://github.com/PeeyushDeshpande2002/DNS-Manager',
  },
];

const Projects = () => {
  return (
    <Container id="projects" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4" color='#00ADB5' gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card style={{background : '#393E46'}}>
                <CardContent>
                  <Typography variant="h5" color='primary'>{project.title}</Typography>
                  <Typography variant="body2" color="primary" paragraph>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="background" href={project.link} target="_blank">
                  <span style={{ color: '#00ADB5' }}>View on Github</span>
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
