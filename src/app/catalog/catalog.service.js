class CatalogService {

  /* @ngInject */
  constructor() {
    const config = {
      "apiKey": "${firebase.apiKey}",
      "authDomain": "${firebase.authDomain}",
      "databaseURL": "${firebase.databaseURL}",
      "storageBucket": "${firebase.storageBucket}",
      "messagingSenderId": "${firebase.messagingSenderId}"
    };

    this.catalog = {
      items: [
        { sku: 'sku_1', name: 'name_1', price: '123.45' },
        { sku: 'sku_2', name: 'name_2', price: '246.89' }
      ]
    };
  }

  getCatalog() {
    return this.catalog;
  }

  addItem(item) {
    this.catalog.items.push(item);
  }
}

export default CatalogService;