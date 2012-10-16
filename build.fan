using fanquery
using build

class Build : BuildPod
{
	new make() 
	{
		podName     = "fanqueryui"
		summary    = "JQuery UI plugin for Fanquery"
		depends    = ["sys 1.0+",  "compiler 1.0+", "fanquery 0.3+"]
		srcDirs    = [`fan/`]
		jsDirs = [`js/`]
		
		resDirs = Uri[`res/`, `res/fanqueryui/`, `res/fanqueryui/js/`, `res/fanqueryui/css/`, `res/fanqueryui/css/ui-lightness/`]

		index = ["fanquery.plugin": "fanqueryui::FanQueryUI"]
	}
}
