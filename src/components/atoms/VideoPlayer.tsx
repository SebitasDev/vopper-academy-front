import {Box} from "@mui/material";
import {useVideoPlayer} from "../../hooks/courses-hooks/useVideoPlayer.ts";

const VideoPlayer = () => {

    const { currentChapter } = useVideoPlayer();

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
                    src={currentChapter.url}
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