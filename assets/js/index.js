---
layout: null
---

window.index = [
    {% for page in site.html_pages %}
    {
      "name": "{{page.name}}",
      "title": "{% assign h2_open_start = page.content|split: '<h2'%} {% assign h2_open_end = h2_open_start[1]| split: '>'%} {% assign h2_content_array = h2_open_end[1]| split: '</h2'%} {{ h2_content }}",
      "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
