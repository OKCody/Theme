---
layout: null
---

function apollo(callback){
  console.log('1');
  var index = [
  {% for page in site.html_pages %}
  {
    "name": "{{page.name}}",
    "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
  ]
  console.log('2');
  callback(index)
}

function lander(index){
  console.log('3');
  var idx = lunr(function () {
    this.ref('name')
    this.field('text')
    this.metadataWhitelist = ['position']

    index.forEach(function (doc) { this.add(doc) }, this)
  })
}

console.log('0');
apollo(lander(index));
