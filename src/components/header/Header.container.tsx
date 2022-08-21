import { graphql, useStaticQuery } from 'gatsby';
import gsap from 'gsap';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { HeaderQuery } from '../../../@types/generated/graphql';
import { IsXs } from '../../hooks';
import Header from './Header';

const HeaderContainer: FC = () => {
  const mobileNav_tl: React.MutableRefObject<gsap.core.Timeline> = useRef(gsap.timeline({
    paused: true
  }));
  const [openedBurger, setOpenedBurger] = useState<boolean>(false);
  const isXs = IsXs();

  const handleBurgerClick = () => {
    setOpenedBurger(!openedBurger);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if(event.key === 'Escape') {
      setOpenedBurger(false);
    }
  };

  const initGsap = useCallback((): void => {
    mobileNav_tl.current.to('#mobileMenu', {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power1.out"
    });
  }, []);
  
  useEffect(() => {
    initGsap();
  }, []);

  useEffect(() => {
    if(!isXs) setOpenedBurger(false);
  }, [isXs]);

  useEffect(() => {
    if(openedBurger) {
      if(typeof window === 'undefined') return;

      mobileNav_tl.current.play();
      document.addEventListener('keydown', handleKeydown);

    } else {
      mobileNav_tl.current.reverse();
    };

    return () => {
      if(typeof window === 'undefined' || !openedBurger) return;

      document.removeEventListener('keydown', handleKeydown);
    }
  }, [openedBurger]);

  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `);

  return <Header
    queryData={data}
    handleBurgerClick={handleBurgerClick}
    openedBurger={openedBurger} />;
};

export default HeaderContainer;