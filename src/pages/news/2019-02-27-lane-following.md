---
date: 2019-02-27
title: "Use Case: Deep Learning Model Training with LGSVL Simulator"
author: David Uhm
preview: We are announcing a new project to show a use case for LGSVL Simulator with applying a deep learning neural network. The goal of this project is to demonstrate how to collect sensor data using LGSVL Simulator and train an end-to-end deep learning model...
category: announcement
---

<div class="video-container">
<iframe style="display:block; margin: auto; padding-top:20px;" width="560" height="315" src="https://www.youtube.com/embed/uMfA1-wTB7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

We are announcing a new project to show a use case for LGSVL Simulator with applying a deep learning neural network. The goal of this project is to demonstrate how to collect sensor data using LGSVL Simulator and train an end-to-end deep learning model that would let a car drive autonomously, following lanes. The network is trained to replicate the human steering behavior while driving and collecting data. During the inference phase, it takes camera images from a frontal camera as input and predicts steering angle commands. This project was inspired by NVIDIA's End-to-End Deep Learning Model for Self-Driving Cars. [https://devblogs.nvidia.com/deep-learning-self-driving-cars](https://devblogs.nvidia.com/deep-learning-self-driving-cars)

Full source code, documentation, and a pre-trained model can be found here: [https://github.com/lgsvl/lanefollowing](https://github.com/lgsvl/lanefollowing)
