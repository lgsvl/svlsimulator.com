import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'src/hooks/useTranslations';
import styled, { createGlobalStyle } from 'styled-components';
import { MapController } from 'deck.gl';
import { setXVIZConfig } from '@xviz/parser';
import { CarMesh, LogViewer, XVIZFileLoader, PlaybackControl, VIEW_MODE } from 'streetscape.gl';
import Box from '@material-ui/core/Box';

setXVIZConfig({
  PLAYBACK_FRAME_RATE: 10
});

const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Visualizer Icons';
    src:  url('/streetscape.ttf') format('truetype'),
      url('/streetscape.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const StyledBox = styled(Box)`
  canvas {
    -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.4) 40%, transparent 70%);
  }
`;

const HiddenPlaybackControls = styled(PlaybackControl)`
  display: none;
`;

function isModified(event: WheelEvent) {
  if (window.navigator.userAgent.includes('Macintosh')) {
    return event.metaKey;
  }

  return event.ctrlKey;
}

class VisController extends MapController {
  // Event handler for third party library with ambiguous types.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleEvent(event: any) {
    // only handle scroll via wheel when meta key is pressed
    if (event.type !== 'wheel' || isModified(event.srcEvent)) {
      super.handleEvent(event);
    }
  }
}

const CAR = CarMesh.sedan({
  length: 4.3,
  width: 2.2,
  height: 1.5,
  color: [160, 160, 160]
});

const viewMode = {
  ...VIEW_MODE.PERSPECTIVE,
  mapInteraction: {
    type: VisController
  }
};

const log = new XVIZFileLoader({
  //timingsFilePath: '/test-data/0-frame.json',
  //getFilePath: (index: number) => `/test-data/${index + 1}-frame.glb`,
  timingsFilePath:
    'https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/0-frame.json',
  getFilePath: index =>
    `https://raw.githubusercontent.com/uber/xviz-data/master/kitti/2011_09_26_drive_0005_sync/${index + 1}-frame.glb`,
  worker: true,
  maxConcurrency: 4
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleObject = Record<string, any>;
const LOG_VIEWER_STYLE = {
  objectLabelColor: '#D0D0D1',
  objectLabelTipSize: (props: StyleObject) => (props.isSelected ? 30 : 8),
  objectLabelTip: (props: StyleObject) => (props.isSelected ? null : { display: 'none' }),
  objectLabelLine: (props: StyleObject) => (props.isSelected ? null : { display: 'none' }),
  objectLabelBody: (props: StyleObject) => {
    const { object, xvizStyles, isSelected } = props;

    let background = '#F8F8F9';
    let color = '#222';
    if (!isSelected) {
      const feature = object.getFeature('/tracklets/objects');
      const strokeColor = xvizStyles.getStylesheet('/tracklets/objects').getProperty('stroke_color', feature);
      if (strokeColor) {
        background = `rgb(${strokeColor.slice(0, 3).join(',')})`;
        const brightness = (strokeColor[0] + strokeColor[1] + strokeColor[2]) / 3;
        color = brightness < 190 ? '#fff' : color;
      }
    }
    return {
      borderRadius: 12,
      padding: '4px 8px',
      fontSize: isSelected ? 12 : 14,
      color,
      background
    };
  },

  tooltip: {
    maxWidth: 276,
    fontSize: 12,
    background: 'rgba(0,0,0,0.8)',
    borderRadius: 4,
    '>hr': {
      width: '100%',
      float: 'left',
      margin: '12px -12px',
      padding: '0 12px',
      opacity: 0.2
    },
    ' b': {
      textTransform: 'capitalize',
      fontSize: 14
    },
    '>div': {
      minWidth: '50%',
      float: 'left',
      margin: '2px 0'
    }
  }
};

/* eslint-disable camelcase, @typescript-eslint/camelcase */
const XVIZ_STYLE = {
  '/lidar/points': [{ style: { point_color_mode: 'ELEVATION' } }],
  '/tracklets/objects': [{ name: 'selected', style: { fill_color: '#ff800088', stroke_color: '#ff8000' } }]
};
/* eslint-enable camelcase, @typescript-eslint/camelcase */

const OBJECT_ICONS: Record<string, string> = {
  Car: '\uE916',
  Van: '\uE918',
  Pedestrian: '\uE90B',
  Cyclist: '\uE914'
};

const Icon = styled.i`
  font-family: 'Visualizer Icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
`;

// Types come from an external non-typed library, and therefore cannot be known.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderObjectLabel = ({ id, object, isSelected }: any) => {
  const feature = object.getFeature('/tracklets/objects');

  if (!feature) {
    return isSelected && <b>{id}</b>;
  }

  const { classes } = feature.base;

  if (isSelected) {
    return (
      <div>
        <div>
          <b>{id}</b>
        </div>
        <div>{classes.join(' ')}</div>
      </div>
    );
  }

  const objectType: string = classes ? classes.join('') : '';
  if (objectType in OBJECT_ICONS) {
    return (
      <div>
        <Icon>{OBJECT_ICONS[objectType]}</Icon>
      </div>
    );
  }

  return null;
};

interface VisualizerProps {
  viewMode?: keyof typeof VIEW_MODE;
}

const Visualizer: React.FC<VisualizerProps> = ({ viewMode = 'PERSPECTIVE' }) => {
  const mode = useMemo(() => {
    // clone the viewMode config and overrie with our controller to manage wheel zooming
    const m = { ...VIEW_MODE[viewMode] };
    m.mapInteraction = { ...m.mapInteraction, type: VisController };

    return m;
  }, [viewMode]);

  useEffect(() => {
    log.on('error', console.error).connect();
  }, []);

  return (
    <>
      <IconFontStyle />
      <StyledBox>
        <LogViewer
          log={log}
          car={CAR}
          showMap={false}
          viewMode={mode}
          renderObjectLabel={renderObjectLabel}
          style={LOG_VIEWER_STYLE}
          xvizStyles={XVIZ_STYLE}
        />
      </StyledBox>
      <HiddenPlaybackControls log={log} />
      {/* <HiddenPlaybackControls isPlaying log={log} /> */}
    </>
  );
};

export default Visualizer;
export { Visualizer };
