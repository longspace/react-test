import Index from "../pages/Index";
import TestIndex from "../pages/test/Index";

export const webRouters = [
    {
        path:'/',
        element:Index,
    },
    {
        path:'/test/index',
        element:TestIndex,
    },
]