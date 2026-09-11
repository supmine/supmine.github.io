---
layout: page
title: Vehicle detection & counting
permalink: /projects/vehicle-detection/
description: Vehicle detection and instance segmentation from CCTV footage using Mask R-CNN, PyTorch, and OpenCV.
context: Individual Research Study on Machine Learning
period: July 2021
importance: 3
---

**Individual Research Study on Machine Learning · July 2021**

## Problem

I studied how object detection and instance segmentation could support traffic-volume estimation from CCTV data.

## My contribution

Built a **Mask R-CNN** system to detect and segment vehicles and estimate traffic volume using **PyTorch and OpenCV**.

## Results

| Metric             | Reported result |
| ------------------ | --------------: |
| Bounding-box AP50  |           60.2% |
| Instance-mask AP50 |           56.6% |

AP50 measures average precision at an intersection-over-union threshold of 0.50. These are detection and segmentation results from the study, rather than a measure of counting accuracy.

[View code on GitHub](https://github.com/supmine/vehicle-detection-counting)

[All research & projects]({{ '/projects/' | relative_url }})
