/* eslint-disable max-len */
import React from 'react';
import imgSrc from 'src/images/velodyne.png';
import { ImageBase, ImageProps } from 'src/components/Image';

export const IconVelodyne: React.FC<ImageProps> = ({ title = 'Partner Velodyne', ...rest }) => (
  <ImageBase src={imgSrc} title={title} role='img' fit='contain' {...rest} />
);
