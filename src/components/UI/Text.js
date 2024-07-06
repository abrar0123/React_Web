import React from 'react';
import colors from '../../constants/colors';

export const Text = (props) => {
  const {
    font = 18,
    color = colors.white,
    mt = 0,
    mb = 10,
    ml = 0,
    mr = 0,
    m = 0,

    pt = 0,
    pb = 10,
    pl = 0,
    pr = 0,
    p = 0,
    bold = false,
  } = props;
  return (
    <p
      style={{
        fontSize: font,
        color: color,
        marginTop: mt,
        marginBlock: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBlock: pb,
        lineHeight: 1.4,
        paddingLeft: pl,
        paddingRight: pr,
        margin: m,
        padding: p,
        fontWeight: bold && 'bold',
      }}
    >
      {props.text}
    </p>
  );
};
