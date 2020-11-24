// This stubbed declaration file has a lot of "any"s to get us started.
/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'streetscape.gl' {
  type XVIZPosition = [number, number, number];
  type XVIZOrientation = [number, number, number];
  type XVIZObject = {
    endTime: number;
    id: string;
    index: number;
    startTime: number;
    state: Record<string, any>;
    bearing: any;
    isValid: boolean;
    position: XVIZPosition;
    streamNames: Iterator<XVIZStreamName>;
  };
  type XVIZStreamName = string;
  type XVIZVehiclePose = {
    altitude: number;
    latitude: number;
    longitude: number;
    mapOrigin: {
      longitude: number;
      latitude: number;
      altitude: number;
    };
    orientation: XVIZOrientation;
    pitch: number;
    position: XVIZPosition;
    roll: number;
    timestamp: number;
    x: number;
    y: number;
    yaw: number;
    z: number;
  };
  type XVIZFrame = {
    components: Record<string, any>;
    features: Record<string, any>;
    heading: number;
    links: Record<string, any>;
    lookAheads: Record<string, any>;
    objects: Record<string, XVIZObject>;
    origin: XVIZPosition;
    pointCloud: any;
    streams: Record<XVIZStreamName, { time: number } & Record<string, any>>;
    trackPosition: XVIZPosition;
    trackedObjectId: any;
    variables: Record<XVIZStreamName, any>;
    vehiclePose: XVIZVehiclePose;
    vehicleRelativeTransform: number[];
  };
  type XVIZStreamMetadata = {
    category: 'primitive' | 'time_series' | 'pose' | 'future_instance';
    coordinate?: string;
    primitive_type?: 'polyline' | 'polygon' | 'circle' | 'text' | 'point' | 'image';
  };

  interface XVIZLoaderConfig {
    worker?: boolean;
    maxConcurrency?: number;
  }

  interface XVIZFileLoaderConfig extends XVIZLoaderConfig {
    timingsFilePath: string;
    getFilePath: (index: number) => string;
  }

  interface XVIZStreamLeaderConfig extends XVIZLoaderConfig {
    logGuid: string;
    bufferLength?: number;
    serverConfig: {
      defaultLogLength: number;
      serverUrl: string;
    };
  }

  type LoaderEventType = 'ready' | 'update' | 'finish' | 'error';

  // FIXME: This type isn't accurate but reflects our current usage
  type XVIZStreamSettings = Record<XVIZStreamName, boolean>;

  export declare class XVIZLoader {
    constructor(config: XVIZLoaderConfig);

    close(): void;
    connect(): void;
    getBufferEndTime(): number;
    getBufferStartTime(): number;
    getCurrentFrame(): XVIZFrame;
    getCurrentTime(): number;
    getLogEndTime(): number;
    getLogStartTime(): number;
    getLookAhead(): number;
    getMetadata(): Record<string, any>;
    getStreamMetadata(): Record<string, any>;
    getStreamSettings(): XVIZStreamSettings;
    getStreamsMetadata(): Record<string, XVIZStreamMetadata>;
    isOpen(): boolean;
    off(eventType: LoaderEventType, callback: () => void);
    on(eventType: LoaderEventType, callback: () => void);
    seek(timestamp: number): void;
    setLookAhead(lookAhead: number): void;
    updateStreamSettings(settings: XVIZStreamSettings): void;

    // untyped
    getStreams(): any;
    getBufferedTimeRanges(): any;
  }

  export declare class XVIZFileLoader extends XVIZLoader {
    constructor(config: XVIZFileLoaderConfig);
  }

  export declare class XVIZStreamLoader extends XVIZLoader {
    constructor(config: XVIZStreamLoaderConfig);
  }

  export declare class XVIZLiveLoader extends XVIZLoader {
    constructor(config: XVIZStreamLoaderConfig);
  }

  // Constants
  declare const VIEW_MODE = {
    PERSPECTIVE: any,
    DRIVER: any,
    TOP_DOWN: any
  };

  // Utilities
  declare function connectToLog(config: {
    Component: React.ComponentType<any>;
    getLogState: (log: XVIZLoader) => Record<string, any>;
  }): React.FC<any>;
  declare const CarMesh = {
    sedan: (config: {
      length?: number;
      width?: number;
      height?: number;
      color?: [number, number, number, number?];
      origin?: [number, number, number];
    }) => any
  };

  // Components
  declare const _XVIZVideo: React.ComponentType<any>;
  declare const XVIZCamera: React.ComponentType<any>;
  declare const MeterWidget: React.ComponentType<any>;
  declare const LogViewer: React.ComponentType<any>;
  declare const PlaybackControl: React.ComponentType<any>;
}
