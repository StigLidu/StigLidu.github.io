---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order. The asterisks(*) mean that authors are equal contribution.
years: [2025, 2024, 2023]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

  <h2>Preprints</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[typenote=preprint]* %}

  <hr />

  <h2>Proceedings</h2>

  {%- for y in page.years %}
    <h2 class="year">{{ y }}</h2>
    {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]*[typenote=proceedings]* %}
  {% endfor %}

</div>
