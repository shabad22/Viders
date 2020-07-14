import React from "react" // Basic requiement
import { Grid } from "@material-ui/core" // for design
import youtube from './api/youtube' // getting our api
import { SearchBar, VideoDetails, VideoList } from './components'
// import VideoDetails from './components'
// import VideoList from './components'

// React class component
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,

    }

    componentDidMount(){
        this.handleSubmit('Learn React')
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video})
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params:{
                part : 'snippet',
                maxResults : 10,
                key : 'AIzaSyAxuIvTmHM33k2cRBo2DVVQhF2E_fNDbsk',
                q:searchTerm
            }})

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }
    render (){
        const {selectedVideo, videos} = this.state
        return(
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

// React function component
// const App=() => {
//     return (
//         <h1>This is just a test</h1>
//     )
// }

export default App