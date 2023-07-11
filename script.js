function allMethods() {
	const allMethods = () => { 
		return Object.getOwnPropertyNames(Math).filter(function (property)
	{ 
		return typeof Math[property] == "function";
	}); 
};

 alert(allMethods());
}
	