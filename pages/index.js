import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Heading } from '@chakra-ui/react';
import {baseURL, fetchApi} from '../utils/fetchApi';
import Property from '../components/property';

export const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl}) => (
  <Flex justifyContent="center" bg={'gray.300'} flexWrap="wrap" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
       <Text color="gray.500" fontSize="sm" fonyweight="medium">{purpose}</Text>
       <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
       <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
       <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
       </Button>
    </Box> 
  </Flex>
);


export default function Home ({propertyforSale, propertyforRent}){
   
  return(
    <div>
    <Banner
     purpose="RENT A HOME"
     title1="Find, Buy & Own Your"
     title2="Dream Home"
     desc1="Explore Appartments, Villas, Homes"
     desc2="and more"
     linkName="./search?purpose=for-sale"
     buttonText="Explore Buying"
     imageUrl="https://arcdn.bayut.com/area-guides/wp-content/uploads/2019/03/2-2-1024x640.jpg"    />
     <Flex flexWrap='wrap'>
         {propertyforSale.map((property) => <Property property= {property} key={property.id}/>)}

     </Flex>
    <Banner
     purpose="SALE A HOME"
     title1=" Homes for"
     title2="Everyone"
     desc1="Explore Appartments, Villas, Homes"
     desc2="and more"
     linkName="./search?purpose=for-rent"
     buttonText="Explore Renting"
     imageUrl="https://images.bayut.com/thumbnails/254076203-800x600.webp"

     />
     <Flex flexWrap="wrap">
          {propertyforRent.map((property) => <Property property= {property} key={property.id}/>)}
     </Flex>
    </div>
 
);
}


export async function getStaticProps(){
  const propertyforSale = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitPerPage=6`);
  const propertyforRent = await fetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitPerPage=6`);

  return {
    props : {
      propertyforSale : propertyforSale?.hits,
      propertyforRent : propertyforRent?.hits,

    }
    
  }

}