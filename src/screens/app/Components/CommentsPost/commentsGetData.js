import commentsData from '../../tempData/commentsData.js';
//limit just in case we do want to put a limit on how many comments to show
export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        commentsDataTotal: commentsData.length
      });
    }, 700);
  });
};
