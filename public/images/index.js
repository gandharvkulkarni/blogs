import Data1 from './data1.avif'
import Data2 from './data2.avif'
import Data3 from './data3.avif'
import Data4 from './data4.webp'
import Data5 from './data5.webp'



const images = [Data1, Data2, Data3, Data4, Data5]

export const getRandomImage = ()=>{
    return images[Math.floor(Math.random() * images.length)]?.src;
  }