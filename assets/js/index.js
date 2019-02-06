---
layout: null
---

{% for page in site.pages %}
var documents = [{
  "name": "{{page.name}}",
  "text": "{{ page.content | markdownify | strip_html }}"
}{% unless forloop.last %},{% endunless %}]
{% endfor %}