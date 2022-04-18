import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        console.log(target.name);
        console.log(target.value);

    }

    const handleNewData = ({ data }) => {

        setValues({
            ...values,
            [ values.imageUrl ]: data
            
        });
            console.log( 'acutal values: '+  values);
    }

    return [ values, handleInputChange, reset,handleNewData ];

}