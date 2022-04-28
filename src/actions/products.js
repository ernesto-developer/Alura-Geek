import { db } from "../firebase/firebase-config";
import { types } from "../types/types";
import { loadProducts } from "../helpers/loadProducts";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const starNewProduct = ( {title, description, imageUrl, price, category} ) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        Swal.fire('Producto agregado', title, 'success');
        const newItem = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price,
            category: category,
        }

       await db.collection(`${uid}/store/products`).add(newItem);
        dispatch(startLoadingProducts(uid));   
        Swal.close();

    }

}

export const activeProduct = (id , item) => ({

    type: types.productSetActive, 
    payload: {
        id,
        ...item
    }

});

export const startLoadingProducts = ( uid ) => {

    return async (dispatch) => {
        const products = await loadProducts( uid );
        dispatch(setProducts(products));
    }

}

export const setProducts = (products) =>({
    type: types.productsLoad,
    payload: products,
});

export const startUpdateProduct = ( item ) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if(!item.imageUrl) {
            delete item.imageUrl;
        }

        const productToFirestore = { ...item };
        delete productToFirestore.id;

        await db.doc(`${uid}/store/products/${item.id}`).update(productToFirestore);
        // dispatch(refreshProduct(item.id, item));
        dispatch(startLoadingProducts(uid));
        dispatch(activeProduct(null, null));
        Swal.fire('Producto actualizado', item.title, 'success');
        
    }
}

export const refreshProduct = (id, item) => ({
    
        type: types.productUpdate,
        payload: {
            id, 
            item:{
                id,
                ...item
            }
        }


});

export const startUploading = (file) => {

    return async (dispatch, getState) => {

        const {active: acitiveProduct} = getState().products;

            Swal.fire({
                title: 'Subiendo imagen',
                text: 'Espere por favor',
                allowOutsideClick: false,
            });
            const fileUrl = await fileUpload(file);
            dispatch(activeProduct(acitiveProduct.id, {...acitiveProduct, imageUrl: fileUrl}));
        console.log(fileUrl);
        Swal.close();

    }


}

export const startDeletingProduct = (id) => {
  return async (dispatch, getState) => {

    Swal.fire('Producto borrado',  'success');

    const uid = getState().auth.uid;
    await db.doc(`${uid}/store/products/${id}`).delete();


   Swal.close();

    dispatch(deleteProduct(id));
  };
};

export const deleteProduct = ( id ) => ({
    type: types.productDelete,
    payload: id
});