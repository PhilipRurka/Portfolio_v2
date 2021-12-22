import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Active,
  AnchorStyled,
  BasicAnchor,
  GatsbyLinkAnchor,
  Hover
} from './Anchor.styled';

type LateAttrInner_type = { to: string; }

type LateAttrExternal_type = {
  href: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
};

type LateAttr_type = LateAttrInner_type | LateAttrExternal_type;

const TrueAnchor: FC<any> = React.forwardRef((props, ref) => {
  const {
    children,
    to,
    activeType,
    ...attrs
  } = props;

  let lateAttrs: LateAttr_type;
  let activeTypeAttr: { activeClassName: "acive" } | {} = {};

  if(to.includes('://') || to.includes('mailto:')) {
    lateAttrs = {
      href: to,
      target: '_blank',
      rel: 'noopener noreferrer'
    } as LateAttrExternal_type;

    if(to.includes('mailto:')) {
      lateAttrs = { href: to };

    } else {
      lateAttrs = {
        href: to,
        target: '_blank',
        rel: 'noopener noreferrer'
      } as LateAttrExternal_type;
    };

    return (
      <BasicAnchor
        {...attrs}
        {...lateAttrs}
        ref={ref} >
        {children}
      </BasicAnchor>
    );

  } else {
    if(activeType === 'current') {
      activeTypeAttr = { activeClassName: "active" }
    }
    
    lateAttrs = { to, } as LateAttrInner_type;

    return (
      <GatsbyLinkAnchor
        {...attrs}
        {...activeTypeAttr}
        {...lateAttrs}
        ref={ref} >
        {children}
      </GatsbyLinkAnchor>
    );
  };
});

const Anchor: FC<any> = (props) => {
  const {
    children,
    className,
    activeType,
    ...attrs
  } = props;

  const trueAnchor_ref = useRef<HTMLSpanElement>();
  const [anchorWidth, setAnchorWidth] = useState<number | null>(null);

  useEffect(() => {
    const { current: anchor } = trueAnchor_ref;
    if(anchorWidth || !anchor?.clientWidth) return;
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setAnchorWidth(anchor.clientWidth);
    }, 50);

    return () => {
      clearTimeout(timeout);
    }
  }, [trueAnchor_ref]);

  const pseudoWidth: string = (anchorWidth || 0).toString();
  
  return (
    <AnchorStyled pseudoWidth={pseudoWidth} >
      <TrueAnchor
        {...attrs}
        activeType={activeType}
        className={className}
        ref={trueAnchor_ref} >
        {children}
      </TrueAnchor>
      {activeType && (
        <Active
          href='#'
          className={className}
          aria-hidden
          tabIndex={-1}
          activeType={activeType} >
          {children}
        </Active>
      )}
      <Hover
        href='#'
        className={className}
        aria-hidden
        tabIndex={-1} >
        {children}
      </Hover>
    </AnchorStyled>
  );
};

export default Anchor;