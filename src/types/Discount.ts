import img from "../assets/img/Star 1 (4).png"
interface DiscountType{
    date:string,
    price:string,
    description:string,
    hasIcon:boolean,
    iconUrl?:string

}

export const DiscountData:DiscountType[]=[
    {
      "date": "1 Month",
      "price": "$11.95/mo",
      "description": "Billed $12.95 every month.30-day money-back guarantee. .",
      "hasIcon": false
    },
    {
      "date": "12 Months",
      "price": "$6.67/mo",
      "description": "Billed $194.20 $99.95 for the first 15 months,and every 12 months thereafter.30-day money-back guarantee.",
      "hasIcon": true,
      "iconUrl": img  // veya "https://example.com/ikon_2.svg"
    },
    {
      "date": "6 Months",
      "price": "$9.99/mo",
      "description": "Billed $59.95 every 6 months.30-day money-back guarantee.",
      "hasIcon": false
    },
    
  ]