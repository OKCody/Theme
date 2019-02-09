function sub_search(query, content){
  var query = query;
  var sentences = content.match(/[^\.\!\?]*[\.\!\?]/g);
  var pairs = [];
  for(var i=0; i<sentences.length; i++){
    pairs.push({"name":i.toString(),"text":sentences[i]});
  }
  function build_sub_idx(){
    var sub_idx = lunr(function () {
    this.ref('name');
    this.field('text');

    pairs.forEach(function (doc) {
      this.add(doc)
      }, this)
    })
    function parse_sentences(){
      return sentences[parseInt(sub_idx.search(query, pairs)[0].ref,10)];
    }
    return parse_sentences();
  }
  return build_sub_idx();
}

function build_idx(){
  var idx = lunr(function () {
  this.ref('name');
  this.field('text');

  window.index.forEach(function (doc) {
    this.add(doc)
    }, this)
  })
}

// Pad result sentence with surrounding sentences for context unitl
// the result is 100 characters long
function clean(string){
  return string.replace(/ +(?= )/g,'').trim();
}

var query = 'biology';
var results = idx.search(query);

for(var i=0; i<results.length; i++){
  exit = false;
  for(var j=0; j<index.length && exit == false; j++){
    if(index[j].name == results[i].ref){
      try{
        console.log(uniform_context(sub_search(query, index[j].text)));
        exit = true;
      }
      catch(e){
        //moving on . . .
      }
    }
  }
}
