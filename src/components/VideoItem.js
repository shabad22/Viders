import React from "react"
import { Grid, Paper, Typography  } from "@material-ui/core";
// import { deepOrange } from "@material-ui/core/colors";

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <Grid spacing xs={12}>
            <Paper style={{ display:'flex', alignItems:'center', cursor:'pointer' }} onClick={()=> onVideoSelect(video)}>
                <img style={{ marginRight: '20px' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url}></img>
                <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem