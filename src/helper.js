export default function fixImageUrls(jsonData) {
  let fixedData = JSON.parse(JSON.stringify(jsonData));

  fixedData.forEach((item) => {
    if (item.imageUrl) {
      item.imageUrl = item.imageUrl.replace(/\\/g, "");
    }
  });

  const duplicatedData = fixedData.concat(fixedData);
  return duplicatedData;
}

/* 
  --> To make the images auto slide, it requires more than 3 objects in the array
  --> So, I duplicated the data set
 */
