
export const getItemsByTitle = (items, title) => {

    if(title === ''){
        return [];
    }
    title = title.toLowerCase();
    return  items.filter(item => item.title.toLowerCase().includes(title));
   
}