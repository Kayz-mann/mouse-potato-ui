import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function LogoIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={21} height={32} fill="none">
      <Path
        d="M21 13.176V32H0v-9.412l12.367.001v-9.413H21ZM21 0v9.412L8.633 9.41v9.413H0V0h21Z"
        fill="#2A2A2A"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default LogoIcon;
