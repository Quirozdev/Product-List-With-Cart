export default interface Product {
  id: number
  name: string
  category: string
  image: {
    desktop: string
    mobile: string
    tablet: string
    thumbnail: string
  }
  price: number
}
