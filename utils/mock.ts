export type Product = {
  id: number
  name: string
  originalPrice: number
  previousPrice?: number
  currentPrice: number
  discountPercent: number
  image: string
  stars: number
  reviews: number
  isRocket: boolean
}

const calculateDiscountPercent = (
  originalPrice: number,
  currentPrice: number
) => {
  //FIXME: 정적인 할인 계산을 위해 임시 구현
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

export const categories = [
  {
    name: '가전/디지털',
    filePath: 'furniture',
    routes: '/category/furniture',
  },
  {
    name: '생활용품',
    filePath: 'household_supplies',
    routes: '/category/household-supplies',
  },
  {
    name: '완구/취미',
    filePath: 'hobby',
    routes: '/category/hobby',
  },
  {
    name: '식품',
    filePath: 'organic_food',
    routes: '/category/organic-food',
  },
  {
    name: '헬스/건강식품',
    filePath: 'health',
    routes: '/category/health',
  },
  {
    name: '여성패션',
    filePath: 'woman_fashion',
    routes: '/category/woman-fashion',
  },
  {
    name: '남성패션',
    filePath: 'man_fashion',
    routes: '/category/man-fashion',
  },
  {
    name: '가구/홈인테리어',
    filePath: 'living_room',
    routes: '/category/living-room',
  },
  {
    name: '문구/오피스',
    filePath: 'stationery',
    routes: '/category/stationery',
  },
  {
    name: '뷰티',
    filePath: 'skin',
    routes: '/category/skin',
  },
  {
    name: '스포츠/레저',
    filePath: 'sports',
    routes: '/category/sports',
  },
  {
    name: '출산/유아동',
    filePath: 'infants',
    routes: '/category/infants',
  },
  {
    name: '주방용품',
    filePath: 'kitchen_utensil',
    routes: '/category/kitchen-utensil',
  },
  {
    name: '반려동물용품',
    filePath: 'pets',
    routes: '/category/pets',
  },
  {
    name: '자동차/오토바이',
    filePath: 'car',
    routes: '/category/car',
  },
  {
    name: '신선식품',
    filePath: 'fresh_food',
    routes: '/category/fresh-food',
  },
]

export const getAppleProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: '할인율이 적으면 뱃지 안보임(20% 이하) 애플 상품1',
      originalPrice: 4000,
      currentPrice: 3800,
      discountPercent: calculateDiscountPercent(4000, 3800),
      image: 'https://cdn.optimalprice.kr/01.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 2,
      name: '애플 상품2',
      originalPrice: 2000,
      previousPrice: 1000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(2000, 1000),
      image: 'https://cdn.optimalprice.kr/02.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 3,
      name: '애플 상품3',
      originalPrice: 3000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(3000, 1000),
      image: 'https://cdn.optimalprice.kr/03.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: false,
    },
    {
      id: 4,
      name: '애플 상품4',
      originalPrice: 4000,
      previousPrice: 3000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(4000, 1000),
      image: 'https://cdn.optimalprice.kr/04.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: false,
    },
    {
      id: 5,
      name: '애플 상품5',
      originalPrice: 5000,
      previousPrice: 4000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(5000, 1000),
      image: 'https://cdn.optimalprice.kr/05.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 6,
      name: '비싼 애플 상품6',
      originalPrice: 4900000,
      previousPrice: 4800000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(4900000, 1000),
      image: 'https://cdn.optimalprice.kr/06.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 7,
      name: '애플 상품7',
      originalPrice: 7000,
      previousPrice: 7000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(7000, 1000),
      image: 'https://cdn.optimalprice.kr/07.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: false,
    },
    {
      id: 8,
      name: '긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8 긴이름의 애플 상품8',
      originalPrice: 8000,
      previousPrice: 8000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(8000, 1000),
      image: 'https://cdn.optimalprice.kr/08.jpeg',
      stars: 4.3,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 9,
      name: '전 가격보다 현 가격이 더 오른 애플 상품9 **전 가격은 안보여줌**',
      originalPrice: 9000,
      previousPrice: 4000,
      currentPrice: 5000,
      discountPercent: calculateDiscountPercent(9000, 5000),
      image: 'https://cdn.optimalprice.kr/09.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 10,
      name: '원래 가격과 전 가격이 동일하면 **전 가격은 안보여줌**',
      originalPrice: 10000,
      previousPrice: 10000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(10000, 1000),
      image: 'https://cdn.optimalprice.kr/10.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 11,
      name: '배경있는 상품2',
      originalPrice: 11000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(11000, 1000),
      image: 'https://cdn.optimalprice.kr/11.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 12,
      name: '일반 상품1',
      originalPrice: 12000,
      previousPrice: 12000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(12000, 1000),
      image: 'https://cdn.optimalprice.kr/12.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 13,
      name: '일반 상품2',
      originalPrice: 13000,
      previousPrice: 13000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(13000, 1000),
      image: 'https://cdn.optimalprice.kr/13.png',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 14,
      name: '배경있는 상품3',
      originalPrice: 14000,
      currentPrice: 1000,
      discountPercent: calculateDiscountPercent(14000, 1000),
      image: 'https://cdn.optimalprice.kr/14.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 15,
      name: '배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4 배경있는 긴 이름의 상품4',
      originalPrice: 15000,
      currentPrice: 11000,
      discountPercent: calculateDiscountPercent(15000, 11000),
      image: 'https://cdn.optimalprice.kr/15.png',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 16,
      name: '배경있는 상품5',
      originalPrice: 16000,
      previousPrice: 13000,
      currentPrice: 12500,
      discountPercent: calculateDiscountPercent(16000, 12500),
      image: 'https://cdn.optimalprice.kr/16.jpeg',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
    {
      id: 17,
      name: '잘못된 라우트 상품1',
      originalPrice: 17000,
      currentPrice: 13500,
      discountPercent: calculateDiscountPercent(17000, 13500),
      image: 'https://cdn.optimalprice.kr/17.png',
      stars: 4.5,
      reviews: 1102,
      isRocket: true,
    },
  ]

  return products
}

export const getProductById = (id: number): Product | undefined => {
  const products = getAppleProducts()
  return products.find((product) => product.id === id)
}
