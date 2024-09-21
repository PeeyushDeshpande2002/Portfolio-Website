import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C++', icon: 'devicon-cplusplus-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'HTML', icon: 'devicon-html5-plain' },
  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'React.js', icon: 'devicon-react-original' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
  { name: 'SQL', icon: 'devicon-mysql-plain' },
];

const Skills = () => {
  return (
    <Container id="skills" maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h4"style={{color: '#00ADB5'}} gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3} >
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Paper elevation={6} style={{ padding: '30px',background : '#393E46', textAlign: 'center' }}>
                <Box className={`devicon-${skill.icon} colored`} style={{ fontSize: '50px', color: '#674188' }} />
                <Typography variant="h6" color='primary' style={{ marginTop: '10px' }}>
                  {skill.name}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
