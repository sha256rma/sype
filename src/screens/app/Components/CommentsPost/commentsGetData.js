import commentsData from '../../data/products';
//limit just in case we do want to put a limit on how many comments to show
export const getProducts = (limit = 20) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        commentsDataTotal: commentsData.length
      });
    }, 700);
  });
};
