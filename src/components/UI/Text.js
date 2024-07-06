import React from 'react';
import colors from '../../constants/colors';

export const Text = (props) => {
  const {
    font = 18,
    color = colors.white,
    style,
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    m = 0,
    pt = 0,
    pb = 0,
    pl = 0,
    pr = 0,
    p = 0,
    bold = false,
    center = false,
  } = props;
  return (
    <div
      style={{
        ...style,
        margin: m,
        padding: p,
        marginTop: mt,
        marginBlock: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBlock: pb,
        paddingLeft: pl,
        paddingRight: pr,
      }}
    >
      <p
        style={{
          fontSize: font,
          color: color,
          margin: 0,
          padding: 0,
          lineHeight: 1.4,
          fontWeight: bold && 'bold',
          textAlign: center && 'center',
        }}
      >
        {props.text}
      </p>
    </div>
  );
};
