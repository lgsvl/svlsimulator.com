import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  require('intersection-observer');
}

interface AnimationWrapperProps {
  animated?: boolean;
  reverse?: boolean;
  delay?: number;
}

const AnimationWrapper = React.forwardRef<HTMLDivElement, AnimationWrapperProps>(
  ({ animated, reverse, delay, ...rest }, ref) => <div ref={ref} {...rest} />
);

const StyledWrapper = styled(AnimationWrapper)`
  transform: translateY(${({ animated, reverse }) => (animated ? '0' : reverse ? '-24px' : '24px')});
  opacity: ${({ animated }) => (animated ? '1' : '0')};
  transition: transform 0.4s ease-in-out ${({ delay = 0 }) => delay}s,
    opacity 0.4s ease-in-out ${({ delay = 0 }) => delay}s;
  flex: 1;
`;

interface EntranceAnimationProps {
  children: React.ReactNode;
  delay?: number; // in seconds
  reverse?: boolean;
  disabled?: boolean;
}

const EntranceAnimation: React.FC<EntranceAnimationProps> = ({ disabled, ...rest }) => {
  const [animated, setAnimated] = useState(Boolean(disabled));
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated && wrapper.current && typeof window !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.unobserve(entries[0].target);
        }
      });
      observer.observe(wrapper.current);
    }
  }, [wrapper, animated, setAnimated]);
  return <StyledWrapper ref={wrapper} animated={animated} {...rest} />;
};

export default EntranceAnimation;
export { EntranceAnimation };
