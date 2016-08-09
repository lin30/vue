// We only need to import the modules necessary for initial render
const createRoutes = {
	routes: {
		'/': require("./Home"),
		'/themes/': require("./Themes"),
		'/about/': require("./About"),
		'/user/': require("./User"),
		'/WeChat/': require("./WeChat")
	},

	alias: {
		// '/:tab': '/'
	}
}


export default createRoutes