describe('tests if karma is working', function() {
  it('works', function() {
    // your test assertion goes here
    console.log('works!');
  });
});

describe('FreeController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }))

  describe('vm.test', function() {
    it('verifies test works', function() {
      var vm = $controller('FreeController', {
        $scope: $scope
      });
      expect(vm.test).toEqual('test');

    })
  })

});