---
layout: page
title: research & projects
permalink: /projects/
description: Selected work in computer vision, forecasting, and robot perception.
nav: true
nav_order: 1
---

My work explores perception in challenging images, learning from spatiotemporal data, and building complete systems around ML models.

{% assign sorted_projects = site.projects | sort: 'importance' %}
{% for project in sorted_projects %}

## [{{ project.title }}]({{ project.url | relative_url }})

**{{ project.context }}** · {{ project.period }}

{{ project.description }}

[Read project details]({{ project.url | relative_url }})

## {% unless forloop.last %}

{% endunless %}
{% endfor %}
