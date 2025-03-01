import {useQuery} from "@tanstack/react-query";
import {getPlatformsActions} from "../../actions/platforms/getPlatforms.actions.ts";

export const usePlatformsHome = () => {

    const platformsQuery = useQuery({
        queryKey: ['platforms'],
        queryFn: () => getPlatformsActions()
    })

    return {
        platformsQuery
    }
}