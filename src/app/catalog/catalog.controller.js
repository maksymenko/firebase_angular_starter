class CatalogController {
  /* @ngInject */
  constructor($mdToast, catalogService) {
    this.mdToast_ = $mdToast;
    this.catalogService_ = catalogService;
    this.items = this.catalogService_.getCatalog().items;
  }

  addItem() {
    this.catalogService_.addItem(
      { sku: '111', name: 'test', price: '111.11' });
    this.mdToast_.show(
      this.mdToast_.simple()
        .textContent('Item added')
        .hideDelay(3000)
        .highlightClass('md-primary'));
  }
}

export default CatalogController;