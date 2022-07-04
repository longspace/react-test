import Index from "../pages/Index";
import TestIndex from "../pages/test/Index";
import Reducer from "../pages/test/Reducer";
import Context from "../pages/test/Context.jsx";

export const webRouters = [
	{
		path: '/',
		element: Index,
	},
	{
		path: '/test/index',
		element: TestIndex,
	},
	{
		path: '/test/reducer',
		element: Reducer,
	},
	{
		path: '/test/context',
		element: Context,
	},
]