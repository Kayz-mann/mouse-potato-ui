import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M16.987 1.693c-1.678-1.36-4.3-1.373-5.965-.013l-8.586 7c-1.232 1-1.98 3-1.717 4.573l1.652 10.054c.38 2.253 2.438 4.026 4.68 4.026h13.894c2.216 0 4.313-1.813 4.693-4.04L27.29 13.24c.236-1.56-.511-3.56-1.717-4.56l-8.586-6.987ZM13.997 23a.999.999 0 0 1-.982-1v-4c0-.547.445-1 .983-1 .537 0 .983.453.983 1v4c0 .547-.446 1-.983 1Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default HomeIcon;
