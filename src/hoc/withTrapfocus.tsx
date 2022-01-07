import React, { useEffect, useMemo, useRef, useState } from 'react';

type Hoc_type = {
  ariaLabel: string;
};

const trapFocusObject = {
  exeption: `:not([disabled]):not([tabindex=“-1”])`,
  focusSelectors: [
    'button',
    '[role=“button”]',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]'
  ]
} as const;

function withTrapFocus<T>(Component: React.ComponentType<T & Hoc_type>) {
  const wrapper_ref = useRef<any>(null);
  const [triggerClose, setTriggerClose] = useState<boolean>(false);

  const firstLastContent: any = useMemo(() => {
    const focusableContentSelecor: string =
    trapFocusObject.focusSelectors.join(`${trapFocusObject.exeption}, `) + trapFocusObject.exeption;
    const focusableContent: NodeListOf<HTMLElement> = wrapper_ref.current?.querySelectorAll(focusableContentSelecor);
    const firstContent: HTMLElement = focusableContent[0];
    const lastContent: HTMLElement = focusableContent[focusableContent.length - 1];
    return [firstContent, lastContent];
  }, []);

  const handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') setTriggerClose(true);
    if (event.key !== 'Tab') return;

    const [firstContent, lastContent] = firstLastContent;
    if (event.shiftKey) {
      if (document.activeElement === firstContent) {
        lastContent.focus();
        event.preventDefault();
      };

    } else {
      if (document.activeElement === lastContent) {
        firstContent.focus();
        event.preventDefault();
      };
    };
  };

  const bindEvents = () => {
    document.addEventListener('keydown', handleKeydown);
  };

  const unBindEvents = () => {
    document.removeEventListener('keydown', handleKeydown);
  };

  useEffect(() => {
    bindEvents();

    return () => {
      unBindEvents();
    }
  }, []);

  const WrappedComponent = ({
    ariaLabel,
    ...passProps
  }: any) => {
    <div
      className='trap-focus-wrapper'
      ref={wrapper_ref}
      aria-modal
      aria-label={ariaLabel} >
      <Component
        {...passProps}
        triggerClose={triggerClose} />
    </div>
  };
  
  return WrappedComponent;
};

export default withTrapFocus;