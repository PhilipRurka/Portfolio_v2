import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import {
  Active,
  AnchorStyled,
  BasicAnchor,
  GatsbyLinkAnchor,
  Hover
} from './Anchor.styled';

//#region Types
type LateAttrInner_type = { to: string; }

type LateAttrExternal_type = {
  href: string;
  target?: '_blank';
  rel?: 'noopener noreferrer';
};

type LateAttr_type = LateAttrInner_type | LateAttrExternal_type;
//#endregion

//#region Anchor
const Anchor: FC<any> = (props) => {
  const {
    children,
    className,
    activeType,
    ...attrs
  } = props;

  const trueAnchor_ref = useRef<HTMLSpanElement>();
  const [anchorMaxWidth, setAnchorMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    const { current: anchor } = trueAnchor_ref;
    if(anchorMaxWidth || !anchor?.clientWidth) return;
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setAnchorMaxWidth(anchor.clientWidth);
    }, 50);

    return () => {
      clearTimeout(timeout);
    }
  }, [trueAnchor_ref]);

  const pseudoWidth = useMemo(() => {
    return (anchorMaxWidth || 0).toString();
  }, [anchorMaxWidth]);
  
  return (
    <AnchorStyled pseudoWidth={pseudoWidth} >
      <TrueAnchor
        {...attrs}
        activeType={activeType}
        className={`trueAnchor ${className}`}
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
//#endregion

//#region TrueAnchor
const TrueAnchor: FC<any> = React.forwardRef((props, ref) => {
  const {
    children,
    to,
    activeType,
    ...attrs
  } = props;

  let lateAttrs: LateAttr_type;
  let activeTypeAttr: { activeClassName: "active" } | {} = {};

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
//#endregion

export default Anchor;