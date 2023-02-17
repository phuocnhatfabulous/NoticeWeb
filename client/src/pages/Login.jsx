import React from 'react'
import { Button, Typography } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

export default function Login() {
    const auth = getAuth();
    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        console.log({ res });
    }
    return (
        <>
            <Typography variant='h5' sx={{ marginBottom: '10px' }}> Welcome to Notice website</Typography>
            <Button variant='outlined' onClick={handleLoginWithGoogle}>
                Login with Google
            </Button>
        </>
    )
}
