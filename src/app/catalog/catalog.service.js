class CatalogService {

  /* @ngInject */
  constructor() {
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