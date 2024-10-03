import Data1 from './data1.avif'
import Data2 from './data2.avif'
import Data3 from './data3.avif'



const images = [Data1, Data2, Data3]

export const getRandomImage = ()=>{
    return images[Math.floor(Math.random() * images.length)]?.src;
  }