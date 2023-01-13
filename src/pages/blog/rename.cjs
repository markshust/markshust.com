const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else if (file.endsWith('.md')) {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const files = walkSync('.');
console.log(files);

files.forEach(file => {
  const newFile = file.replace('.md', '.mdx');
  fs.renameSync(file, newFile);
});
