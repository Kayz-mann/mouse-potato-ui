import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function LikeIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        d="M6.391 5.923c0-.39.12-.771.34-1.094L9.461.864c.43-.634 1.5-1.084 2.411-.752.98.323 1.63 1.397 1.42 2.354l-.52 3.194c-.04.293.04.556.21.761a.94.94 0 0 0 .69.303h4.11c.79 0 1.47.313 1.87.86.38.527.45 1.21.2 1.904l-2.46 7.315c-.31 1.21-1.66 2.197-3 2.197h-3.9c-.67 0-1.61-.225-2.04-.645l-1.28-.966a1.923 1.923 0 0 1-.78-1.543V5.923Zm-4.21-1.906C.63 4.017 0 4.603 0 6.048v9.825c0 1.445.63 2.031 2.18 2.031h1.03c1.55 0 2.18-.586 2.18-2.03V6.047c0-1.445-.63-2.03-2.18-2.03H2.18Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default LikeIcon;
