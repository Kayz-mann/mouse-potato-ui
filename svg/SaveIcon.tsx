import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SaveIcon(props: SvgProps): JSX.Element {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M3.556 0C1.594 0 0 1.74 0 3.859v14.085c0 1.8 1.188 2.56 2.644 1.69l4.495-2.71c.479-.29 1.252-.29 1.722 0l4.495 2.71c1.456.88 2.644.12 2.644-1.69V3.86C15.99 1.739 14.397 0 12.435 0h-8.88Zm4.44 8.277c-.94 0-1.88-.18-2.773-.53-.36-.14-.544-.57-.415-.96.138-.39.535-.589.894-.449a6.29 6.29 0 0 0 4.596 0c.36-.14.756.06.884.45.13.39-.055.82-.414.96-.894.35-1.833.53-2.773.53Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SaveIcon;
