export interface PesoMaximoPorEixo {
  tipo: string;
  peso: string;
}

export interface EixoImage {
  tipo: string;
  img: string;
}

export interface Caminhao {
  codigo: string;
  cmtMinimo: string;
  pesoMaximoPorEixo: PesoMaximoPorEixo;
  cmtMaximo?: string;
  totalDeEixos: number;
  pbt: string;
  precisaDeAET: string;
  comprimentoMinimo: string;
  comprimentoMaximo: string;
  caminhaoImg: string;
  eixoImg: EixoImage[];
}

export interface CardCaminhaoProps {
  caminhao: Caminhao;
  mostrarCaminhao: boolean;
}
