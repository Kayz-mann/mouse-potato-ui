import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CommentIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        d="M6 0C2 0 0 2 0 6v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V6c0-4-2-6-6-6H6ZM5 13.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75H5Zm0-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75H5Z"
        fill="#2A2A2A"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default CommentIcon;
