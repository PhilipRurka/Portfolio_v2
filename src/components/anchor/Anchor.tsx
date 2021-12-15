import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Active,
  AnchorStyled,
  BasicAnchor,
  GatsbyLinkAnchor,
  Hover
} from './Anchor.styled';

interface LateAttr_type {
  to: string;
  target?: '_blank'
  rel?: 'noopener noreferrer'
}

const TrueAnchor: FC<any> =React.forwardRef((props, ref) => {
  const {
    children,
    to,
    ...attrs
  } = props;

  let lateAttrs: LateAttr_type;

  if(to.includes('://') || to.includes('mailto:')) {
    lateAttrs = {
      to,
      target: '_blank',
      rel: 'noopener noreferrer'
    };

    if(to.includes('mailto:')) {
      lateAttrs = { to };

    } else {
      lateAttrs = {
        to,
        target: '_blank',
        rel: 'noopener noreferrer'
      };
    };

    return (
      <GatsbyLinkAnchor
        {...attrs}
        {...lateAttrs}
        ref={ref} >
        {children}
      </GatsbyLinkAnchor>
    );

  } else {
    lateAttrs = { to };

    return (
      <BasicAnchor
        {...attrs}
        {...lateAttrs}
        ref={ref} >
        {children}
      </BasicAnchor>
    );
  };
});

const Anchor: FC<any> = (props) => {
  const {
    children,
    ...attrs
  } = props;

  const trueAnchor_ref = useRef<HTMLSpanElement>();
  const [anchorWidth, setAnchorWidth] = useState<number | null>(null);

  useEffect(() => {
    const { current: anchor } = trueAnchor_ref;
    if(anchorWidth || !anchor?.clientWidth) return;
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      debugger
      setAnchorWidth(anchor.clientWidth);
    }, 100);

    return () => {
      clearTimeout(timeout);
    }
  }, [trueAnchor_ref]);

  const pseudoWidth: string = (anchorWidth || 0).toString();
  
  return (
    <AnchorStyled pseudoWidth={pseudoWidth}>
      <TrueAnchor
        {...attrs}
        ref={trueAnchor_ref} >
        {children}
      </TrueAnchor>
      <Hover>{children}</Hover>
      <Active>{children}</Active>
    </AnchorStyled>
  );
};

export default Anchor;