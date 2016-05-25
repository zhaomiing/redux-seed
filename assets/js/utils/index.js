/**
 * index.js
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 25/05/2016
 */

export const formatDate = (d) => {
  let year = d.getFullYear(),
      month = d.getMonth() + 1,
      date = d.getDate();

  if(month < 10) month = '0' + month;
  if(date < 10) date = '0' + date;

  return '' + year + month + date;
};