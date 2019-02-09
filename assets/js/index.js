---
layout: null
---

{% for page in site.html_pages %}
{% assign content = page.content | markdownify %}

{% assign h1_open = content | split: '<h1' %}
{% assign h1_end = h1_open[1] | split: '>' %}
{% assign h1_array = h1_end[1] | split: '</h1' %}

{% assign h2_open = content | split: '<h2' %}
{% assign h2_end = h2_open[1] | split: '>' %}
{% assign h2_array = h2_end[1] | split: '</h2' %}

{% assign h3_open = content | split: '<h3' %}
{% assign h3_end = h3_open[1] | split: '>' %}
{% assign h3_array = h3_end[1] | split: '</h3' %}

{% assign h4_open = content | split: '<h4' %}
{% assign h4_end = h4_open[1] | split: '>' %}
{% assign h4_array = h4_end[1] | split: '</h4' %}

{% assign h5_open = content | split: '<h5' %}
{% assign h5_end = h5_open[1] | split: '>' %}
{% assign h5_array = h5_end[1] | split: '</h5' %}

{% assign h6_open = content | split: '<h3' %}
{% assign h6_end = h6_open[1] | split: '>' %}
{% assign h6_array = h6_end[1] | split: '</h6' %}

{% assign headings = h1_array | push: h2_array | push: h3_array | push: h4_array | push: h5_array | push: h6_array %}
{% endfor %}


window.index = [
    {% for page in site.html_pages %}
    {% assign content = page.content | markdownify %}
    {
      "name": "{{ page.name }}",
      "url": "{{ site.baseurl }}/{{ page.name }}",
      "title": "{{ headings[0] }}",
      "text": "{{ content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | strip }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
