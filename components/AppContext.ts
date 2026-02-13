import {createContext} from "radix-vue";
import type {ComputedRef, Ref, UnwrapRef} from "vue";
import type WebsocketClient from "~/lib/websocketClient";
import axios, {AxiosHeaders, AxiosInstance} from "axios";

export const AUTH_DATA_LOCALSTORAGE_KEY = "authData"

export interface AuthData {
    accessToken: string
    refreshToken: string
    expireAt: Date,
    user: {
        firstName: string,
        lastName: string,
        email: string
    }
}

export interface AppContext {
    authData: Ref<AuthData | null>
    setAuthData: (authData: AuthData) => void,
    axiosIns: Ref<UnwrapRef<AxiosInstance>>
    wsClient: Ref<UnwrapRef<WebsocketClient>>
}
export const [useAppContext, provideAppContext] = createContext<AppContext>('App')