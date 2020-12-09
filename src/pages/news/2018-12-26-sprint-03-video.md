---
date: 2018-12-26
title: "Video: GPU-accelerated LiDAR, 3D ground truth bounding boxes"
author: Brian Shin
preview: We have released a new video with the features of our latest update. We have changed the LiDAR sensor implementation to use GPU-acceleration, resulting in much better performance for simulating a 128-beam Velodyne sensor (VLS-128).
---

<div class="video-container">
<iframe style="display:block;margin:auto;" width="560" height="340" src="https://www.youtube.com/embed/KLUtiqjzpIQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

We have released a new video with the features of our latest update. We have changed the LiDAR sensor implementation to use GPU-acceleration, resulting in much better performance for simulating a 128-beam Velodyne sensor (VLS-128). You can now select from several preset, real-world sensor models, or customize the sensor parameters for your own purposes.

Additionally, you can now subscribe to 3D bounding box information that we publish as a ROS message from the simulator, enabling you to compare the results of your perception algorithm with our ground truth labeling. You can further publish your software stack's detections to visualize them in the simulator, allowing visual comparisons of how well 3D object detection is worknig.

Finally, as part of our integration with Autoware, we support being able to the launch the simulator with parameters from a static configuration file. This enables the ability to set options such as the starting map, vehicle, weather parameters, sensors, and traffic/pedestrians. Please watch the video and try the simulator out yourself.

[Download our 2018.12 release](https://github.com/lgsvl/simulator/releases/latest).
