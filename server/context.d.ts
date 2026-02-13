export type AuthContext = {
    userId: number
}

declare module 'h3' {
    interface H3EventContext {
        auth: AuthContext;
    }
}