class CatalogController {
  /* @ngInject */
  constructor($mdToast, $state, catalogService) {
    this.state_ = $state;
    this.mdToast_ = $mdToast;
    this.catalogService_ = catalogService;
    this.items = [];
  
    this.user = null;

    this.catalogService_.getAuth().$onAuthStateChanged(user => {
      this.user = user;
      if (this.user) {
        this.items = this.catalogService_.getCatalog().items;
      } 
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
    this.catalogService_.logout();
  }
}

export default CatalogController;