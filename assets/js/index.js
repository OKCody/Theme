---
layout: null
---

window.index = [
    {% for page in site.html_pages %}
    {% assign h2_content = page.content |  markdownify | newline_to_br | split: '<br />' %}
    {
      "name": "{{page.name}}",
      "title": "{{ h2_content[0] }}",
      "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
