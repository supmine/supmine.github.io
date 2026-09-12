---
layout: page
title: Fisheye object detection
permalink: /projects/fisheye-detection/
description: Rotation-aware fisheye object detection and additional object-tracking work with SORT and Deep SORT at OxygenAI.
context: Machine Learning Engineer Intern · OxygenAI
period: June–July 2022
category: work
importance: 3
---

**OxygenAI · Machine Learning Engineer Intern · June–July 2022**

## Problem

Fisheye cameras capture a wide field of view, but lens distortion and varying object orientations complicate detection. At OxygenAI, I investigated detecting objects directly in fisheye images without first dewarping them.

## My contribution

- Researched the effects of distortion and object orientation on the detection task.
- Modified **YOLOv5** to correct bounding-box orientation through **rotation-aware regression**.
- Developed the model in the context of computer-vision products for retail and smart-city applications.
- Implemented **object tracking using SORT and Deep SORT** alongside the fisheye detection work.

**Methods:** object detection, YOLOv5, rotation-aware bounding-box regression, object tracking, SORT, Deep SORT.

## Research context

The following papers provide context for object detection in distorted fisheye images, covering overhead people detection and autonomous-driving cameras.

- **RAPiD** predicts rotated bounding boxes and uses a periodic angle loss. It provides a reference for representing orientation explicitly in a detector {% cite duan2020rapid %}.
- **Mask-RCNN Based People Detection Using A Top-View Fisheye Camera** studies adapting Mask-RCNN to overhead fisheye imagery, providing a complementary perspective on extending conventional detectors to this setting {% cite wang2019fisheye %}.
- **FisheyeYOLO** adapts YOLOv3 to compare object representations, including oriented boxes, ellipses, curved boxes, and polygons, for fisheye cameras in autonomous driving. It provides a reference for how detection outputs can account for radial distortion {% cite rashed2020fisheyeyolo %}.

My implementation focused on modifying YOLOv5 with rotation-aware regression. These references describe related methods; their reported results are not measurements of my implementation.

## References

{% bibliography --cited %}

[All research & projects]({{ '/projects/' | relative_url }})
