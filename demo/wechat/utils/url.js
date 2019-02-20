export const getUrl = () =>{
    const pages = getCurrentPages();
    return pages[pages.length-1];
};
