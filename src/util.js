export const sortData = data => {
  //*copy the data into an array
  const sortedData = [...data];
  //   sortedData.sort((a, b) => {
  //     if (a.cases > b.cases) {
  //       return -1;
  //     } else {
  //       return 1;
  //     }
  //   });
  //   return sortedData;
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
