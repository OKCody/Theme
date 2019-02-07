---
layout: null
---

var index = [
{% for page in site.html_pages %}
{
  "name": "{{page.name}}",
  "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
}{% unless forloop.last %},{% endunless %}
{% endfor %}
]

var idx = lunr(function () {
  this.ref('id')
  this.field('body')
  this.metadataWhitelist = ['position']

  index.forEach(function (doc) { this.add(doc) }, this)
})
