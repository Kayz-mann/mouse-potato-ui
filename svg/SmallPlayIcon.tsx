import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SmallPlayIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M.667 14C.667 21.36 6.64 27.333 14 27.333S27.333 21.36 27.333 14 21.36.667 14 .667.667 6.64.667 14Zm15.173 3.293-1.707.987c-2.2 1.267-4 .227-4-2.307v-3.946c0-2.547 1.8-3.574 4-2.307l1.707.987 1.707.986c2.2 1.267 2.2 3.347 0 4.614l-1.707.986Z"
        fill="#2A2A2A"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SmallPlayIcon;
