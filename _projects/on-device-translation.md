---
layout: page
title: On-device LLM translation
permalink: /projects/on-device-translation/
description: Optimizing Gemma 4 E2B with LiteRT-LM for real-time text translation on a Raspberry Pi 5.
context: High Performance Machine Learning · Columbia University
period: Sep 2026 – Present
importance: 2
---

**High Performance Machine Learning, Columbia University · Sep 2026 – Present**

## Goal

Run real-time text translation with a language model entirely on an edge device: **Gemma 4 E2B** served with **LiteRT-LM** on a **Raspberry Pi 5**.

## My contribution

- Quantized the unquantized base model with multiple **post-training quantization** schemes: **dynamic-range, INT8, and INT4**.
- Benchmarked each variant on **translation quality, latency, and memory**, on both the edge CPU and NVIDIA GPUs.

**Tools:** Gemma 4 E2B, LiteRT-LM, Raspberry Pi 5, NVIDIA GPUs.

[All research & projects]({{ '/projects/' | relative_url }})
