import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlayIcon(): JSX.Element {
  return (
    <Svg width={40} height={40} fill="none">
      <Path
        d="M0 20c0 11.04 8.96 20 20 20s20-8.96 20-20S31.04 0 20 0 0 8.96 0 20Zm22.76 4.94-2.56 1.48c-3.3 1.9-6 .34-6-3.46v-5.92c0-3.82 2.7-5.36 6-3.46l2.56 1.48 2.56 1.48c3.3 1.9 3.3 5.02 0 6.92l-2.56 1.48Z"
        fill="#2A2A2A"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PlayIcon;
