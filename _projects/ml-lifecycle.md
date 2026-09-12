---
layout: page
title: End-to-end ML lifecycle management platform
permalink: /projects/ml-lifecycle/
description: Infrastructure automation, Slurm batch jobs, and JupyterHub interactive notebooks for researchers sharing limited university computing resources.
context: B.Eng. thesis · Chulalongkorn University
period: 2022–2023
importance: 5
---

**Undergraduate thesis · Chulalongkorn University · 2022–2023**

Developed with a five-person capstone team, this platform brought together resource scheduling, experiment tracking, and model deployment for a shared university computing environment. My work spanned **infrastructure automation, backend integration, and research computing workflows**, including Slurm batch jobs and JupyterHub interactive notebooks, to help researchers access and share limited computing resources.

## The problem

Students and staff sharing **NVIDIA DGX A100** computing resources needed better ways to request resources, track training jobs, and manage models. The platform aimed to make these workflows accessible through a web interface.

## My contributions

- Developed **Ansible scripts to configure Kubernetes clusters** for the platform's infrastructure.
- Worked on **Slurm batch-job execution** so researchers could submit training scripts and request CPU/GPU resources within a shared computing environment.
- Worked on **JupyterHub interactive notebook sessions**, providing a Google Colab–style experience for researchers using the university's limited computing resources.
- Collaborated on **backend APIs, database implementation, and on-premises testing**, including Slurm REST API integration.

## What the team built

The platform combined **Slurm** for batch jobs, **JupyterHub** for interactive sessions, **MLflow** for experiment tracking and model storage, and **Seldon Core with Argo CD** for model deployment. A web portal supported resource requests, usage credits, and deployment management.

## Results and engineering lessons

The final implementation demonstrated job submission, resource controls, experiment tracking, and automated model deployment. Integration remained incomplete in several areas: Slurm ran in Docker outside Kubernetes, and JupyterHub still needed GPU support, credit accounting, and user-management improvements.

## Technologies

**Infrastructure and backend:** Ansible, Kubernetes, Docker, Python, FastAPI, PostgreSQL, Redis.  
**Research computing and ML tools:** Slurm, JupyterHub, MLflow, Seldon Core, Argo CD.

[All research & projects]({{ '/projects/' | relative_url }})
