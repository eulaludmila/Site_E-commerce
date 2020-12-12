import React from 'react';
import Rodape from '../../components/Rodape';
import { Main, Page } from './style';

const PageDefault = ({ children, paddingAll }) => (
  <Page>
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <Rodape />
  </Page>
);

export default PageDefault;
