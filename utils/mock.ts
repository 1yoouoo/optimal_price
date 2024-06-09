export type Product = {
  id: number
  name: string
  price: number
  image: string
  stars: number
  reviews: number
  isRocket: boolean
}

export const getAppleProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: '애플 상품1',
      price: 1000,
      image: 'https://cdn.optimalprice.kr/01.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 2,
      name: '애플 상품2',
      price: 2000,
      image: 'https://cdn.optimalprice.kr/02.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 3,
      name: '애플 상품3',
      price: 3000,
      image: 'https://cdn.optimalprice.kr/03.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: false,
    },
    {
      id: 4,
      name: '50% 이상 할인이 들어간 애플 상품4',
      price: 4000,
      image: 'https://cdn.optimalprice.kr/04.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: false,
    },
    {
      id: 5,
      name: '애플 상품5',
      price: 5000,
      image: 'https://cdn.optimalprice.kr/05.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 6,
      name: '비싼 애플 상품6',
      price: 4900000,
      image: 'https://cdn.optimalprice.kr/06.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 7,
      name: '애플 상품7',
      price: 7000,
      image: 'https://cdn.optimalprice.kr/07.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: false,
    },
    {
      id: 8,
      name: '긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8',
      price: 8000,
      image: 'https://cdn.optimalprice.kr/08.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 9,
      name: '애플 상품9',
      price: 9000,
      image: 'https://cdn.optimalprice.kr/09.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 10,
      name: '배경있는 상품1',
      price: 10000,
      image: 'https://cdn.optimalprice.kr/10.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 11,
      name: '배경있는 상품2',
      price: 11000,
      image: 'https://cdn.optimalprice.kr/11.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 12,
      name: '일반 상품1',
      price: 12000,
      image: 'https://cdn.optimalprice.kr/12.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 13,
      name: '일반 상품2',
      price: 13000,
      image: 'https://cdn.optimalprice.kr/13.png',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 14,
      name: '배경있는 상품3',
      price: 14000,
      image: 'https://cdn.optimalprice.kr/14.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 15,
      name: '배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4',
      price: 15000,
      image: 'https://cdn.optimalprice.kr/15.png',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 16,
      name: '배경있는 상품5',
      price: 16000,
      image: 'https://cdn.optimalprice.kr/16.jpeg',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
    {
      id: 17,
      name: '잘못된 라우트 상품1',
      price: 17000,
      image: 'https://cdn.optimalprice.kr/17.png',
      stars: 4.5,
      reviews: 100,
      isRocket: true,
    },
  ]

  return products
}
