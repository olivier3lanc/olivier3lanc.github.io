---
title: L’ancien village de Roselend
description: Galerie de photographies de l’ancien village de Roselend avant la construction du barrage
lang: fr
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
ogImageUrl: "https://raw.githubusercontent.com/olivier3lanc/cinematics-resources/refs/heads/master/ogimage-ancien-village-de-roselend.avif"
tags:
    - post
    - roselend
date: 2025-09-01
photos:
    -   text: "Roselend et le Rocher du Vent 1901-1904"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-roc-du-vent-2.jpeg"
    -   text: "Roselend et le Rocher du Vent en septembre 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-rocher-du-vent-6-septembre-1937.png"
    -   text: "Roselend et le Rocher du Vent avec l’hôtel Coutter au premier plan en septembre 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-rocher-du-vent-1937.png"
    -   text: "Roselend et le Rocher du Vent en juillet 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-rocher-du-vent-juillet-1937.png"
    -   text: "Roselend et le Rocher du Vent"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-FRAD074_57Fi_0005_2482.jpg"
    -   text: "Le troupeau à l’abreuvoir (1)"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-le-troupeau-a-l-abreuvoir.png"
    -   text: "Troupeau à l’abreuvoir dans la vallée de Roselend en 1937 (2)"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-troupeau-a-l-abreuvoir-1937.png"
    -   text: "Troupeau de vaches Tarines dans la vallée de Roselend, le long du ruisseau en 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-troupeau-dans-les-alpages-1937.png"
    -   text: "L’hôtel Couttet en 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-hotel-couttet-1937.png"
    -   text: "L’ancien pont Duret présent à l’endroit exact du barrage"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-pont-duret.png"
    -   text: "Vallée et village de Roselend vus de la route du cormet : Roche Parstire et Mont Mirantin"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-route-du-cormet-roche-parstire-et-mirantin-septembre-1937.png"
    -   text: "Vaches au pâturage et Rocher du vent an arrière-plan"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-vache-paturage-rocher-du-vent.png"
    -   text: "Roselend et le Rocher du Vent"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-et-rocher-du-vent.png"
    -   text: "Roselend et le Rocher du Biolley"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-FRAD074_57Fi_0003_1268.jpg"
    -   text: "La chapelle Sainte Marie Madeleine de Roselend"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-chapelle.png"
    -   text: "L’hôtel Couttet en hiver"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-hotel-couttet-hiver.png"
    -   text: "Hôtel Mont Blanc juillet 1935"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-hotel-mont-blanc-juillet-1935.png"
        wide: false
    -   text: "L’hôtel Mont Blanc et quelques habitants ou visiteurs devant"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-hotel-mont-blanc.png"
        wide: false
    -   text: "Pont dans le village de Roselend"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-roseland-le-pont.png"
        wide: false
    -   text: "Un berger et son troupeau devant l’hôtel Couttet"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-troupeau-berger-hotel-couttet.png"
    -   text: "Roselend et le Rocher du Vent en septembre 1937"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-de-roselend-rocher-des-vents-septembre-1937.png"
    -   text: "La chapelle Sainte Marie Madeleine et le Roc du Biolley en arrière-plan"
        url: "/sources/blog/ancien-village-de-roselend/ancien-village-roselend-chapelle-et-roc-biolley.png"
---
{% alertAlt 'info', 'Info' %}
Cette page est une réédition de ma page [les 50 ans de Roselend la Bathie](https://web.archive.org/web/20120115174542/http://www.olivewhite.com/blog/les-50-ans-de-roselend-la-bathie/) dépubliée. 
{% endalertAlt %}

## Galerie

Sélection de photographies de l’ancien village de Roselend.

{% for item in photos %}
### {{ item.text }}

<figure class="long-shadow {% if item.wide == false %}{% else %}wide{% endif %}">
    <img src="{{ item.url }}" alt="{{ item.text }}">
    <figcaption>{{ item.text }}</figcaption>
</figure>
{% endfor %}

## Quelques brèves

* A deux pas de l’Hôtel Couttet, il y avait la buvette casse-croûte de Marie-Rose Martin.
* Le village de Roseland comptait trois hôtels:
    * L’Hôtel Mont Blanc: 1er hôtel construit en 1870 par Constant Gachet dans le coeur du village.
    * L’Hôtel Couttet: Le plus important, construit par Alfred Couttet, un hôtelier chamoniard. L’hôtel Couttet était situé légèrement en  retrait du village. Des clients de grande renommée ont séjourné à l’Hôtel Couttet: Jacques Prévert, Irène Joliot-Curie.
    * Hôtel La Rose des Alpes: La construction a débuté en 1938 mais le projet fut abandonné à cause de la guerre.
* La vallée était déjà un site touristique important avant la construction du barrage, fréquenté par une clientèle aisée.
* Alfred Couttet, le responsable de l’Hôtel Couttet, avait l’intention de faire du site de Roselend une station de ski.
* En 1938, la commune de Beaufort reçoit des propositions d’installations de remontées mécanique de G. Dandelot, constructeur des * Monte-Pentes Alta à Annecy.
* Malgré les différentes propositions d’installations de remontées mécaniques, le projet de la station de Roselend tombe à l’eau avec  l’entrée en guerre de la France.
* 1938: Le conseil municipal vote l’électrification de Roselend.
* L’ancienne route de Roselend passait par Beaubois et montait dans le vallon escarpé du barrage.

## Sources

Les images de faible définition ont été agrandies à l’aide [d’Upscayl](https://upscayl.org/).

* Collection personnelle de <cite>Patrick Guillois</cite>.
* [Le barrage de Roselend sur Wikipedia](https://fr.wikipedia.org/wiki/Barrage_de_Roselend)
* Archives de la Haute-Savoie <https://archives.hautesavoie.fr/>
* Archives départementales de la Savoie <https://recherche-archives.savoie.fr/>
* Musée Savoisien <https://museesavoisien-collections.savoie.fr>