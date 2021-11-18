---
title: Olimpiada Peruana de Informática
description: La OPI es una competencia que a nivel nacional que convoca a estudiantes de secundaria con habilidades de solución de problemas. Los estudiantes hacen uso de la lógica, su ingenio y habilidades de programación para resolver los desafíos presentados.
subtitle: Por el talento peruano;
---

# Blog

{% for post in site.posts %}
<h2>
<a href="{{ post.url }}">{{ post.title }}</a>
</h2>

<div class="date">{{ post.date | date: "%b %d, %Y" }}</div>

{{ post.excerpt }}

<div class="continue">
<a href="{{ post.url }}">Seguir Leyendo...</a>
</div>

{% endfor %}
