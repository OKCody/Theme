---
layout: null
---

{% capture search_index %}
window.index = [
    {
      "name": "{{ page.name }}",
      "url": "{{ site.baseurl }}/{{ page.name }}",
      "title": "{{ page.title | default: page.name }}",
      "text": "{{ content | replace: 'Preface','' | replace: 'preface', '' | replace: 'Chapter', '' | replace: 'chapter', '' | replace: 'Summary', '' | replace: 'summary', '' | replace: 'Section', '' | replace: 'section', ''}}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
{% endcapture %}

{{ search_index | strip_newlines | strip}}
