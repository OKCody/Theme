---
layout: null
---

{% capture search_index %}
window.index = [
    {% for page in site.html_pages %}
    {% assign content = page.content | markdownify %}
    {
      "name": "{{ page.name }}",
      "url": "{{ site.baseurl }}/{{ page.name }}",
      "title": "{{ page.title | default: page.name }}",
      "text": "{{ content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip | replace: 'Preface','' | replace: 'preface', '' | replace: 'Chapter', '' | replace: 'chapter', '' | replace: 'Summary', '' | replace: 'summary', '' | replace: 'Section', '' | replace: 'section', ''}}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
{% endcapture %}

{{ search_index | strip_newlines | strip}}
