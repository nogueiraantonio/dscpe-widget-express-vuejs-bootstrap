// CPE Euromed - bootstrap
function executeInitWidget() {
  // adapted from https://embed.plnkr.co/plunk/Y2cEa3
  require(// configuration
  {
    paths: {
      // the Vue lib
      Vue: "https://unpkg.com/vue@2.6.12/dist/vue.min",
    },
  }, // load libs right now
  ["Vue"], function (Vue) {
    var myWidget = {
      onLoad: function () {
        //console.log("before calling Vue ctor");
        var myWidgetVarApp = new Vue({
          el: "#myWidgetApp",
          data: {
            greeting: "Hello Widget from Vue.JS and Bootstrap CSS template!",
          },
          created: function () {
            console.log("VueJs created");
          },
        });
      },
    };
    widget.addEvent("onLoad", myWidget.onLoad);
  }); //require
}
