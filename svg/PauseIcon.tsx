import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PauseIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={40} height={40} fill="none">
      <Path
        d="M0 20c0 11.04 8.96 20 20 20s20-8.96 20-20S31.06 0 20 0C8.96 0 0 8.96 0 20Zm16.08 7.4h-2.6c-1.02 0-1.42-.38-1.42-1.34V13.94c0-.96.4-1.34 1.42-1.34h2.58c1.02 0 1.42.38 1.42 1.34v12.12h.02c0 .96-.4 1.34-1.42 1.34Zm10.56 0h-2.58c-1.02 0-1.42-.38-1.42-1.34V13.94c0-.96.4-1.34 1.42-1.34h2.58c1.02 0 1.42.38 1.42 1.34v12.12c0 .96-.4 1.34-1.42 1.34Z"
        fill="#FF7445"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PauseIcon;
