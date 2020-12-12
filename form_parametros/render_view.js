function render(doc_string,parametros_string) {
    var variables = doc_string.match(/(?<=\{\{)(\S+)(?=\}\})/g);
    for (var i = 0; i < variables.length; i++)
      doc_string = doc_string.replace("{{" + variables[i] +"}}",parametros_string[variables[i]]);
    return doc_string;
  }
  
  module.exports.render=render;
