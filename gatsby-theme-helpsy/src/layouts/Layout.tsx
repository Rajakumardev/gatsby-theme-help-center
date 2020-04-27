import React from 'react';
import withRoot from '../withRoot';
import styled from '../styled';
import Stripe from '../components/Stripe';
import Navigation from '../components/Navigation';

const Wrapper = styled('div')`
  max-width: 800px;
  margin: ${(p) => p.theme.spacing(6)}px auto;

  @media (max-width: 800px) {
    margin: ${(p) => p.theme.spacing(10)}px auto;
  }
`;

const Layout = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: React.CSSProperties;
}) => {
  return (
    <>
      <Stripe />
      <Navigation />
      <Wrapper style={styles}>{children}</Wrapper>
    </>
  );
};

export default withRoot(Layout);
