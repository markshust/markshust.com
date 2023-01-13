function replaceImageMarkdown(text) {
  const regex = /!\[(.*)\]\((.*)\)/g;
  const replacement = '<Image src={import(\'./$2\')} alt="$1" />';
  return text.replace(regex, replacement);
}


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
  const content = fs.readFileSync(file, 'utf-8');
  const replacedContent = replaceImageMarkdown(content);
  fs.writeFileSync(file, replacedContent);
});

