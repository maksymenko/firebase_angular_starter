class CatalogController {
  /* @ngInject */
  constructor($mdToast, $state, catalogService) {
    this.state_ = $state;
    this.mdToast_ = $mdToast;
    this.catalogService_ = catalogService;
    this.items = this.catalogService_.getCatalog().items;
  
    this.user = null;
    this.catalogService_.getUser().promise.then(user => {
      this.user = user;
    });
  }

  addItem() {
    this.items.$add({ sku: '111', name: 'test', price: '111.11' });
    this.mdToast_.show(
      this.mdToast_.simple()
        .textContent('Item added')
        .hideDelay(3000)
        .highlightClass('md-primary'));
  }

  remove(index) { 
    this.items.$remove(index);
  }

  login() {
    this.catalogService_.login();
  }

  logout() {
    this.catalogService_.logout().then(() => {
      this.user = null;
      this.state_.go('catalog');
    });
  }
}

export default CatalogController;