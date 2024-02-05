function fetchItems(): string[] {
  let items = ["a", "b", "c"];

  return items;
}

let result = fetchItems();

console.log(result); // string ["a", "b", "c"]

function fetchItemsPromise(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];

  return new Promise(function (resolve) {
    resolve(items);
  });
}
