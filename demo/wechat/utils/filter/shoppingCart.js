/*选择确定购买商品的数量*/
export const selectProNum = (list) =>{
    let num = 0;
    list.map(item=>{
        if(item.checked){
            num++;
        }
    })
    return num;
};
