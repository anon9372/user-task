import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";


export default function UserCard() {

    const user = useSelector((state) => state.user);

    return (
        <>
            {user &&
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={user[0]?.user?.avatar}
                        title="User Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user[0]?.user?.first_name}  {user[0]?.user?.last_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user[0]?.user?.email}
                        </Typography>
                    </CardContent>
                </Card>}
        </>
    );
}