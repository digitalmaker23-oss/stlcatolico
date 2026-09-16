import { BonusGuide, CheckoutLinks, FaqItem } from './types';

export const CHECKOUT_LINKS: CheckoutLinks = {
  completo: 'https://checkout.wiven.com.br/checkout/cmssaso1r0bw001odhutl03ut?offer=G4ZPAP2',
  upgrade18: 'https://checkout.wiven.com.br/checkout/cmssbinuv0cf301odisgk4oou?offer=H8IYYC6',
  basico: 'https://checkout.wiven.com.br/checkout/cmssbo7jv0ch601odk1cphgbi?offer=0HNUW3I',
};

export const MODELOS: string[] = [
  '/images/modelo1.webp',
  '/images/modelo2.webp',
  '/images/modelo3.webp',
  '/images/modelo4.webp',
  '/images/modelo5.webp',
  '/images/modelo6.webp',
  '/images/modelo7.webp',
  '/images/modelo8.webp',
  '/images/modelo9.webp',
];

export const DESTAQUES_MARQUEE: string[] = [
  '/images/modelo4.webp',
  '/images/modelo8.webp',
  '/images/modelo6.webp',
  '/images/modelo1.webp',
  '/images/modelo7.webp',
  '/images/modelo2.webp',
];

// Carrossel 1 (Coleção Católica - 3 Linhas)
export const CARROSSEL_CATOLICO_ROW1: string[] = [
  '/images/cat2_01.webp',
  '/images/cat2_02.webp',
  '/images/cat2_03.webp',
  '/images/cat2_04.webp',
  '/images/cat2_05.webp',
  '/images/cat2_06.webp',
  '/images/cat2_07.webp',
  '/images/cat2_08.webp',
];

export const CARROSSEL_CATOLICO_ROW2: string[] = [
  '/images/cat01.webp',
  '/images/cat02.webp',
  '/images/cat04.webp',
  '/images/cat05.webp',
  '/images/cat06.webp',
  '/images/cat07.webp',
  '/images/cat09.webp',
  '/images/cat10.webp',
];

export const CARROSSEL_CATOLICO_ROW3: string[] = [
  '/images/cat4_01.webp',
  '/images/cat4_02.webp',
  '/images/cat4_03.webp',
  '/images/cat4_04.webp',
  '/images/cat4_05.webp',
  '/images/cat4_06.webp',
  '/images/cat4_07.webp',
  '/images/cat4_08.webp',
];

// Carrossel 2 (Modelos Católicos Premium - 2 Linhas)
export const CARROSSEL_PREMIUM_ROW1: string[] = [
  '/images/premium_01.webp',
  '/images/premium_02.webp',
  '/images/premium_03.webp',
  '/images/premium_04.webp',
  '/images/premium_05.webp',
  '/images/premium_06.webp',
];

export const CARROSSEL_PREMIUM_ROW2: string[] = [
  '/images/cat3_01.webp',
  '/images/cat3_02.webp',
  '/images/cat3_03.webp',
  '/images/cat3_04.webp',
  '/images/cat3_05.webp',
  '/images/cat3_06.webp',
  '/images/cat3_07.webp',
];

export const LUMINARIAS: string[] = [
  '/images/lum1.webp',
  '/images/lum2.webp',
  '/images/lum3.webp',
  '/images/lum4.webp',
  '/images/lum5.webp',
  '/images/lum6.webp',
  '/images/lum7.webp',
  '/images/lum8.webp',
];

export const GUIAS: BonusGuide[] = [
  {
    title: 'Guia de Produtos Católicos que Mais Vendem',
    originalPrice: 'De R$ 47,00',
    image: '/images/guia1.webp',
  },
  {
    title: 'Tabela de Preços para Produtos 3D',
    originalPrice: 'De R$ 37,00',
    image: '/images/guia2.webp',
  },
  {
    title: 'Guia de Configuração p/ Impressão Perfeita',
    originalPrice: 'De R$ 57,00',
    image: '/images/guia3.webp',
  },
  {
    title: 'Guia de Acabamento e Pintura',
    originalPrice: 'De R$ 67,00',
    image: '/images/guia4.webp',
  },
];

export const DEPOIMENTOS: string[] = [
  '/images/dep1.webp',
  '/images/dep2.webp',
  '/images/dep3.webp',
  '/images/dep4.webp',
  '/images/dep5.webp',
];

export const BENEFICIOS = [
  {
    num: '01.',
    text: 'Transformar sua impressora 3D em uma oficina de arte sacra, sem sair de casa.',
  },
  {
    num: '02.',
    text: 'Oferecer peças exclusivas que a comunidade católica procura e valoriza.',
  },
  {
    num: '03.',
    text: 'Imprimir com arquivos 100% testados: zero erro, zero retrabalho.',
  },
  {
    num: '04.',
    text: 'Vender para um público fiel que ama imagens de fé e não hesita no preço.',
  },
  {
    num: '05.',
    text: 'Lucrar com material que custa centavos e vende como objeto de devoção.',
  },
  {
    num: '06.',
    text: 'Ter suporte direto para nunca travar em nenhuma etapa.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como recebo os arquivos?',
    answer: 'O acesso é enviado para o seu e-mail imediatamente após a aprovação do pagamento.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos Pix, Cartão de Crédito e Boleto.',
  },
  {
    question: 'Terei acesso aos bônus no plano básico?',
    answer: 'Não. Os Guias e o Acesso Vitalício são exclusivos do Plano Completo promocional.',
  },
];
