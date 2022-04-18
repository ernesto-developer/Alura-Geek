import { db } from "../firebase/firebase-config";

export const loadProducts = async ( uid ) => {
const productsSnap =  await db.collection(`${ uid }/store/products`).get(); 
   const items = [];
 

   productsSnap.forEach( item => { 
         items.push({
              id: item.id,
              ...item.data()
         })
    
    });
   return items;
}