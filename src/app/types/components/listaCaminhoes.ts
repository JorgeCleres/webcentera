export interface Filters {
  tipoCaminhao: string;
  combinacaoVeiculos: string;
  numeroEixos: string;
}

export interface ListaCaminhoesProps {
  filters: Filters;
}
