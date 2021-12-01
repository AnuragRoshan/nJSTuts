const {readFileSync,writeFileSync}=require('fs');
// const fs=require('fs');
// fs.read
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/seond.txt','utf8');
console.log(`${first}  ${second}`);

writeFileSync(`./content/result.txt`,`This is demo result :${first }, ${second}`);
