import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';


//firebase
import firebase from 'firebase/compat/app';
import { auth } from "../../firebase"


//icon
import GoogleIcon from '@mui/icons-material/Google';
import chat from "../../assets/chat.png"

//mui color
import { pink } from '@mui/material/colors';
export const Login = () => {
  return (

    <Container fixed sx={{
      display: 'flex', justifyContent: 'center',
      marginTop: 20
    }}>

      <Card sx={{ maxWidth: 500, padding: 5, boxShadow: 'none', backgroundColor: 'transparent' }}>
        <CardMedia
          component="img"
          alt="WebChat"
          height="300"
          image={chat}
          sx={{ width: 300, display: 'flex' }}
        />
        <CardContent sx={{ textAlign: 'center', marginTop: 5 }}>
          <Typography gutterBottom variant="h5" component="div">
            Welcome to WebChat
          </Typography>

        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="outlined" size="large" sx={{ textTransform: "none" ,color:'warning.main'}} startIcon={<GoogleIcon sx={{ color: pink[400], margin: 0, padding: 0,textShadow: '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue' }} />} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>Sing in with Google</Button>
        </CardActions>
      </Card>
    </Container >

  );
}
