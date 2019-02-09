---
layout: null
---

window.index = [
    {% for page in site.html_pages %}
    {% assign h2_content = page.content | split: '\n' %}
    {
      "name": "{{page.name}}",
      "title": "{{ h2_content }}",
      "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
