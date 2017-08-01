var fs = require('fs')


/**
 * create a set of files for each entry in the files array, at the given location,
 *   with the provided text as content
 *
 * Example run:node create_state_markdown_files_from_states_array.js ../../proj-nrdc-climate2017/nrdc-county-map/src/assets/data/usstates.json ../states/_state_template.md ../states/
 *
 * @param $1 file location of json array with format like {
 *     "AL":"Alabama",
 *     etc
 *   }
 * @param $2 file location of text contents (and if the text contains the token #stateName# is also gets magically replaced!)
 * @param $3 file creation location
 */
function createStateMarkdownFilesFromStatesArray(arrayFilePath, contentsFilePath, fileCreationPath){

  fs.readFile(arrayFilePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var stateArrayData = JSON.parse(data);

    //TODO we could async or other library to combine these callbacks
    fs.readFile(contentsFilePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }

      var content = data;

      Object.keys(stateArrayData).forEach(function(key, index) {
        var stateName = stateArrayData[key].toLowerCase().replace(/\s/g,"_");
        var contentReplaced = content.replace(/#stateName#/g, stateArrayData[key]);

        fs.writeFile(fileCreationPath + stateName + ".md", contentReplaced, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log(`The file for ${stateName} was saved to ${fileCreationPath + stateName}!`);
        });
      });

    });

  });
}


if(!process.argv[2] || !process.argv[3] || !process.argv[4]){
  return console.log("ERROR: Missing argument");
} else {
  return createStateMarkdownFilesFromStatesArray(process.argv[2], process.argv[3], process.argv[4]);
}
