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

build_idx();

//var query = 'biology';


function build_results(query){
  var results = idx.search(query);
  function clean(string){
    return string.replace(/ +(?= )/g,'').trim();
  }

  for(var i=0; i<results.length; i++){
    exit = false;
    for(var j=0; j<window.index.length && exit == false; j++){
      if(window.index[j].name == results[i].ref){
        try{
          console.log(clean(sub_search(query, window.index[j].text)));
          exit = true;
        }
        catch(e){
          //moving on . . .
        }
      }
    }
  }
}
