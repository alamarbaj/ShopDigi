import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


import {CardActionArea, CardActions } from '@mui/material';

export default function MultipleCard(props) {
    return (
        <>


            <Card className='card' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200px"
                        width="200px"
                        image={require(`../assets/productimages/${props.pic}`)}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <h5 className='price'> $ {props.finalprice}</h5>
                        <Typography variant="body2" color="text.secondary">
                            <p className='name'>{props.name}</p>
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
                <div className="ratingbtn">
                <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                        </Stack>
                <CardActions>
                    <button className='watchbtn'>Watch</button>
                </CardActions>
                </div>
            </Card>


        </>
    );
}
