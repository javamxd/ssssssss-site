var process = require('child_process');
var docs = ['magic-api-doc','magic-page-designer-doc']
docs.forEach(doc => {
	console.log(`start install ${doc}`);
	process.execSync(`cd ./${doc} && npm install`);
	console.log(`install ${doc} finish`);
})