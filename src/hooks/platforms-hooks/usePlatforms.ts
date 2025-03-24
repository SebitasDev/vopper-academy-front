import {useQuery} from "@tanstack/react-query";
import {getPlatformsActions} from "../../actions/platforms/getPlatforms.actions.ts";
import {useNavigate} from "@tanstack/react-router";
import {usePlatformStore} from "../../store/Platforms/platformsStore.ts";
import {Platform} from "../../interfaces/apiInterfaces.ts";

export const usePlatforms = () => {

    const { setPlatform, platform } = usePlatformStore();

    const navigate = useNavigate();

    const goToPlatformById = async (platform: Platform) => {
        await navigate({ to: `/plataformas/${platform.id}` })
        setPlatform(platform);
    }

    const platformsQuery = useQuery({
        queryKey: ['platforms'],
        queryFn: () => getPlatformsActions()
    })

    return {
        platformsQuery,
        goToPlatformById,
        platform
    }
}