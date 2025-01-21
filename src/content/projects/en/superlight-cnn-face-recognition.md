---
title: "Superlight CNN: A light-weight face recognition model"
publishDate: 2024-03-04 00:00:00
img: /assets/superlight-cnn.webp
imgAlt: Superlight CNN model diagram, a light-weight face recognition model.
description: |
  We developed a super light-weight (<1M parameters) face recognition model with competitive accuracy against state-of-the-art models.
tags:
  - Deep Learning
  - AI
  - Face Recognition
github: https://github.com/Alejandro-FA/UPF-Face-and-Gesture-Analysis/tree/main/Lab4
bibliography:
  - projects/superlight-cnn-face-recognition.bib
---

_This was the final project for the Face and Gesture Analysis subject, which [Andreu Garcies](https://github.com/AndreuG01) and I developed at the [School of Engineering](https://www.upf.edu/web/etic/home) of [Universitat Pompeu Fabra](https://www.upf.edu/)._

## Introduction

For the final project of the Face and Gesture Analysis subject, we have developed a face recognition pipeline that performs well in identifying the ID of 80 famous people (see [Appendix A](#ids-of-the-80-famous-people) for a complete list of their identities). This report aims to explain the project's thinking and development process and highlight the project's evolution between previous labs of the subject and the final challenge.

## A Deep Learning based method

Since the first deep neural networks appeared in 2014, they have become state-of-the-art in solving many computer vision problems. This is also true for face recognition (FR), where networks such as DeepFace [@taigman2014deepface] and DeepID [@sun2014deep] have proved to achieve a similar or better performance than humans. The power of deep learning (DL) in face recognition lies in its ability to autonomously learn intricate patterns and features directly from raw data, enabling remarkably accurate and robust identification capabilities. Unlike traditional methods that rely on handcrafted features and explicit rules, deep learning models can automatically extract hierarchical representations of facial features, discerning complex patterns that may not be apparent to human observers.

Given the excellent performance of DL-based FR models and our prior (limited) experience with deep learning, we chose this methodology to solve the challenge.

## The pipeline

This section of the report will analyze each step of the face recognition pipeline we have developed. The process of taking an input image and returning a person's ID entails five steps: a face detector preprocessor, a face detector, a feature extractor preprocessor, a feature extractor, and a feature classifier (responsible for determining to which ID the extracted features correspond to). However, our approach combines the feature extractor and feature classification into a single neural network. [Figure 1](#pipeline-overview) shows a graphical representation of our implemented pipeline.

<figure id="pipeline-overview">
  <img src=/assets/face-recognition-pipeline.webp alt="Our end-to-end face recognition pipeline, from face detection to face identification." />
  <figcaption><strong>Figure 1.</strong> Our end-to-end face recognition pipeline, from face detection to face identification.</figcaption>
</figure>

### Face detector preprocessor

This step is responsible for applying any image transformation the face detector requires. Currently, we only change gray-scale images to RGB images with three channels (to have a uniform image shape).

### Face detector

To correctly identify a face within an image, we first need to determine the location of the face, if it is present. As its name suggests, the face detector is responsible for detecting the coordinates within the image where a face is situated. In the first Lab on this subject, we implemented a satisfactory face detector based on the Viola and Jones algorithm [@viola2004robust]. However, a significant drawback of our face detector was its relatively high false negative rate (FNR) of almost 6\%. A high FNR indicates that the model could not detect multiple real faces. Losing real faces early in the pipeline poses a considerable obstacle for an accurate face recognition system, as faces that go undetected cannot be identified at all. Hence, we focused our efforts in this pipeline phase towards minimizing the FNR as much as possible.

#### MTCNN

We tested several face detectors to find the most suitable one for our pipeline: MediaPipe,[^1] YuNet [@wu2023yunet], RetinaFace with Resnet-50 backbone [@deng2020retinaface],[^2] and Multitask Cascaded Convolutional Networks (MTCNN) [@zhang2016joint].[^3] MTCNN was the one that produced better results, achieving a FNR of 1.23\% while preserving a good F1-score. Check [Appendix B](#comparison-of-face-detectors) for a detailed comparison.

[^1]: Open source project available at https://github.com/google/mediapipe.

[^2]: Python library code available at https://github.com/serengil/retinaface.

[^3]: We have used a PyTorch-compatible python implementation, available at https://github.com/timesler/facenet-pytorch.

## Appendices

### IDs of the 80 famous people

### Comparison of face detectors

### LightCNN network structure

## References
