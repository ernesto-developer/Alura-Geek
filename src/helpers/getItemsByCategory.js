

export const getItemsByCategory = (items, category) => {
 return  items.filter(item => item.category === category);
}