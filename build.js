const path = require('path');
const fs = require('fs');
const process = require('child_process');
const target = './dist';
const docs = [
	['magic-api-doc', 'docs/.vuepress/dist/', 'magic-api'],
	['magic-page-designer-doc', 'docs/.vuepress/dist/', 'magic-page-designer'],
    ['magic-boot-doc', 'docs/.vuepress/dist/', 'magic-boot']
]
const isExist = (path) => { // 判断文件夹是否存在, 不存在创建一个
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}
isExist(target);
const copyFile = (sourcePath, targetPath) => {
  isExist(targetPath)
  const sourceFile = fs.readdirSync(sourcePath, { withFileTypes: true })
  sourceFile.forEach(file => {
    const newSourcePath = path.resolve(sourcePath, file.name)
    const newTargetPath = path.resolve(targetPath, file.name)
    if (file.isDirectory()) {
      isExist(newTargetPath)
      copyFile(newSourcePath, newTargetPath)
    }else{
      fs.copyFileSync(newSourcePath, newTargetPath)
	}

  })
}
docs.forEach(entry => {
	const doc = entry[0]
	console.log(`start build ${doc}`);
	process.execSync(`cd ./${doc} && npm run build`);
	console.log(`build ${doc} finish`);
	copyFile(`./${doc}/${entry[1]}`, `${target}/${entry[2]}`)
})
copyFile(`./ssssssss-team`, target)
