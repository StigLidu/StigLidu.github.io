---
layout: page
permalink: /publications/
title: Publications and Preprint
description: Publications by categories in reversed chronological order. The asterisks(*) mean that authors are equal contribution.
years: [2024, 2023]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
