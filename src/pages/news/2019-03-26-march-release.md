---
date: 2019-03-26
title: SVL Simulator 2019.03 Release
author: Brian Shin
preview: The SVL Simulator 2019.03 release is now available for download on our GitHub. This release includes HD map support for non-ego vehicles, more realistic non-ego vehicle physics, and a simple indoor map and robot model for MOV.AI's Tugbot.
---

The SVL Simulator 2019.03 release is now available for [download](https://github.com/lgsvl/simulator/releases/tag/2019.03) on our GitHub. NPC (non-ego vehicles) can now drive on the HD map that the ego vehicle uses inside the simulator. NPC vehicle physics are improved as well, resulting in more realistic movement. We have also added a simple indoor map and warehouse robot model for our partner MOV.AI, the Tugbot. The robot has ROS integration and serves as an example real-world use case for non-autonomous driving applications.

Several improvements have been made to the workflow - it is now much easier add new map environments for simulation other than the default San Francisco map.

We have also created a use case tutorial for end-to-end lane following model training with the SVL Simulator. This demonstration shows how to use ROS2 and the simulator to train and apply a deep learning neural network on lane following. [Check out the tutorial](https://github.com/lgsvl/lanefollowing).

We also have many more improvements and bug fixes since the last release. You can check our [release notes](https://github.com/lgsvl/simulator/releases/tag/2019.03) for the full list of updates since the last release.
