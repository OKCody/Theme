---
layout: null
---

{% for page in site.pages %}
var documents = [{
  "name": "{{page.name}}",
  "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
}{% unless forloop.last %},{% endunless %}]
{% endfor %}