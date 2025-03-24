import {create} from "zustand/react";
import {IPlatformStore} from "../../interfaces/store.interfaces.ts";
import {devtools} from "zustand/middleware";
import {Platform} from "../../interfaces/apiInterfaces.ts";

export const usePlatformStore = create<IPlatformStore>()(
    devtools((setState) => ({

        platform: {},

        setPlatform: (p: Platform) => setState({ platform: p }),
    }))
)