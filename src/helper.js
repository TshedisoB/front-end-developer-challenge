export default function fixImageUrls(jsonData) {
  let fixedData = JSON.parse(JSON.stringify(jsonData));

  fixedData.forEach((item) => {
    if (item.imageUrl) {
      item.imageUrl = item.imageUrl.replace(/\\/g, "");
    }
  });

  return fixedData;
}
