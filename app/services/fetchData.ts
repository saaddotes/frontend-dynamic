import qs from 'qs';
import { flattenAttributes } from '@/lib/utils';

const homePageQuery = qs.stringify({
  populate: {
    heroSection: {
      populate: {
        heroBackground: {
          fields: ["url", "alternativeText"]
        },
        heroBtn: {
          populate: true
        }
      }
    }
  }
})



async function getStrapiData(path: string) {
    const baseUrl = 'http://localhost:1337';
    const url = new URL(path, baseUrl)
    url.search = homePageQuery
  
    try {
      const res = await fetch(url.href);
      const data = await res.json();
      const flattenData = flattenAttributes(data)
      console.log(flattenData)
      return flattenData
    } catch (e) {
      console.error(e)
    }
  
  }

  
  export default getStrapiData