export interface FiltersState {
  tipoCaminhao: string;
  combinacaoVeiculos: string;
  numeroEixos: string;
}

export interface SidebarSpecificationProps {
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}