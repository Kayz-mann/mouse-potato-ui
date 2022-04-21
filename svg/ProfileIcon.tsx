import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ProfileIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
      d="M12 13.675c-3.646 0-6.6-2.912-6.6-6.504C5.4 3.579 8.353.667 12 .667c3.645 0 6.6 2.912 6.6 6.504 0 3.592-2.955 6.504-6.6 6.504ZM0 26.683c0 .364.29.65.66.65h22.68c.37 0 .66-.286.66-.65 0-5.385-5.386-9.756-12-9.756s-12 4.37-12 9.756Z"
      fill={props.color}
      fillRule="evenodd"
      />
    </Svg>
  );
}

export default ProfileIcon;
