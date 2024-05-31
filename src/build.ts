import {writeFile} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let buildPage = function(path, content) {
  writeFile(__dirname + '/../dist/' + path + '.html', '<!DOCTYPE html>\n' + content, function(error) {
    if (error) { 
      console.error(error); 
      return false;
    }
    console.log('Build of ' + path + '.html successful');
  });
};
