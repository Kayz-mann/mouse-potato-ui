import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function TimerIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M0 10c0 5.51 4.49 10 10 10s10-4.49 10-10S15.51 0 10 0 0 4.49 0 10Zm13.7 3.94a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03-.14.24-.39.37-.65.37Z"
        fill="#2A2A2A"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default TimerIcon;
