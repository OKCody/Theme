---
layout: null
---

var idx = lunr(function () {
  this.field('name')
  this.field('text')

  [
    {% for page in site.html_pages %}
    {
      "name": "{{page.name}}",
      "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ].forEach(function(doc){this.add(doc)}, this);
});
