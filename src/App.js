import React from 'react';
import Button from '@mui/material/Button';

// eslint-disable-next-line
import YamlEditor from '@focus-reactive/react-yaml';
// eslint-disable-next-line
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

// const text = `
// foo: bar
// `;
// const handleChange = ({ json, text }) => {
//   console.log(text);
//   // "foo: bar"
// };

            // <Typography variant='h1'>React App</Typography>
            // <YamlEditor text={text} onChange={handleChange} />


const App = () => { 
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color="textSecondary" paragraph>
                            Hello everyone. This is a photo album and I'm trying to make this sentence as long as possible so we can see how it looks like on the screen.
                        </Typography>
                    </Container>

                </div>
                <Button variant="contained">Contained</Button>
            </main>
        </>
    )
}

export default App;