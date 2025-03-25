import {Box} from "@mui/material";

const VideoPlayer = () => {

    return (
        <Box
            sx={{
                gridArea: 'video',
                height: '100%',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="iframe"
                    src="https://iframe.mediadelivery.net/embed/375405/52338d25-d399-4f61-b7ac-12094fac5bcc?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
                    loading="lazy"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                    }}
                />
            </Box>
        </Box>
    )
}

export default VideoPlayer;