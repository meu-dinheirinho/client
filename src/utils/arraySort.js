export function sortByProperty(array, property) {
  const sortedlist = array.sort((a, b) => {
    if (a[property] && !b[property]) {
      return -1;
    }

    if (!a[property] && b[property]) {
      return 1;
    }

    return 0;
  });

  return sortedlist;
}
