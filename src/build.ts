import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let buildPage = function (filepath: string, content: string) {
  let fullpath = __dirname + "/../dist/" + filepath;
  let directories = path.dirname(fullpath);

  fs.mkdirSync(directories, { recursive: true });
  fs.writeFile(
    fullpath,
    "<!DOCTYPE html>\n<!-- AUTO GENERATED FROM https://github.com/andychenbruce/personal_website DONT EDIT -->\n" +
      content,
    function (error) {
      if (error) {
        console.error(error);
        return false;
      }
      console.log("Build of " + filepath + " successful");
    },
  );
};
