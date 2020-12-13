import React from 'react';
import Rodape from '../../components/Rodape';
import FormNews from '../../components/FormNews';
import { Main, Page } from './style';

//Página padrão com objetivo de deixar sempre o menu da parte debaixo do site
const PageDefault = ({ children, paddingAll }) => (
  <Page>
    <Main paddingAll={paddingAll}>
      {children}
    </Main>
    <FormNews/>
    <Rodape />
  </Page>
);

export default PageDefault;
