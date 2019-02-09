---
layout: null
---

window.index = [
    {% for page in site.html_pages %}
    {% assign h2_open = page.content |  markdownify | split: '<h2' %}
    {% assign h2_end = h2_open[1] | split: '>' %}
    {% assign h2_array = h2_end[1] | split: '</h2' %}
    {
      "name": "{{page.name}}",
      "title": "{{ h2_array[0] }}",
      "text": "{{ page.content | markdownify | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
