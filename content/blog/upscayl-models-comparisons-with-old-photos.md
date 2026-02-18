---
language: en
title: Upscayl examples with old photos
description: Before and after comparisons results of Upscayl AI image upscaler software with old and low resolution photos
layout: libdoc_page.liquid
permalink: "{{ libdocConfig.blogSlug }}/{{ page.fileSlug }}/index.html"
ogImageUrl: "https://raw.githubusercontent.com/olivier3lanc/cinematics-resources/refs/heads/master/ogimage-upscayl-models-comparisons-with-old-photos.avif"
tags:
    - post
    - upscale
date: 2025-09-01
files:
    - 
        filename: R4
        title: Roselend 1
        landscape: true
    - 
        filename: roselend-16
        title: Roselend 2
        landscape: false
    - 
        filename: roselend-26
        title: Roselend 3
        landscape: true
    - 
        filename: roselend-36
        title: Roselend 4
        landscape: true
models:
    - upscayl-standard
    - upscayl-lite
    - high-fidelity
    - remacri
    - ultramix-balanced
    - ultrasharp
    - digital-art
    - LSDIRplusC
    - NMKD-Superscale-SP_178000_G
---
Testing awesome [Upscayl AI image upscaler](https://github.com/upscayl/upscayl) (or <https://upscayl.org>) with its built-in different models. Here are the before and after results with few old photos. 

Defaults models are:

* **upscayl-standard**: Suitable for most images.
* **upscayl-lite**: Suitable for most images. High-speed upscaling with minimal quality loss.
* **high-fidelity**: For all kinds of images with a focus on realistic details and smooth textures.
* **remacri**: For natural images. Added sharpness and detail. No commercial use.
* **ultramix-balanced**: For natural images with a balance of sharpness and detail.
* **ultrasharp**: For natural images with a focus on sharpness.
* **digital-art**: For digital art and illustrations.

Upscayls allows to add custom models. The following examples includes defaults and two of this additional set of [custom models](https://github.com/upscayl/custom-models): 

* `4xLSDIRplusC`
* `4xNMKD-Superscale-SP_178000_G`: NMKD Superscale - Perfect upscaling of clean (artifact-free) real-world images.

<script src="/assets/js/image-compare-viewer.min.js"></script>
<link rel="stylesheet" href="/assets/css/image-compare-viewer.min.css">
{% for item in files %}
    {% for model in models %}
        <h2>{{ item.title }} with {{ model }}</h2>
        <figure class="{% if item.landscape %}wide{% endif %}">
            <div class="image-compare w-100">
                <img src="/assets/img/upscayl/{{ item.filename }}.jpg"
                    alt="before Upscayl"
                    loading="lazy"
                    eleventy:ignore>
                <img src="/assets/img/upscayl/{{ item.filename }}_upscayl_4x_{{ model }}-4x.avif"
                    alt="after Upscayl model: {{ model }} 4x"
                    loading="lazy"
                    eleventy:ignore>
            </div>
            <figcaption>
                {{ item.title }} with upscayl model: {{ model }} 4x - 
                <a  href="/assets/img/upscayl/{{ item.filename }}.jpg"
                    target="_blank"
                    title="Open source file in a new tab">
                    Original file
                </a>&nbsp;
                <a  href="/assets/img/upscayl/{{ item.filename }}_upscayl_4x_{{ model }}-4x.avif"
                    class="btn btn-primary-light"
                    target="_blank"
                    title="Open upscaled file in a new tab">
                    Upscaled file
                </a>
            </figcaption>
        </figure>
    {% endfor %}
{% endfor %}
<script src="/assets/js/image-compare.js"></script>

## Wrapping up

Even for a single category of picture, there is no single "best" model. For each image, the model giving the best results depends on what you expect and what the model is made for.