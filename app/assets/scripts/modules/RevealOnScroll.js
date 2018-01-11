import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    // all this runs on page load
    this.itemsToReveal = els;
    this.offsetPercentage = offset;    
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this; //save the object so the waypoint this doesnt screw up
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        // need at least two properties
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }

}

export default RevealOnScroll;