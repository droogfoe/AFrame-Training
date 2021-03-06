AFRAME.registerComponent('RotationReader', {
  tick: function(){
    console.log(this.el.object3D.rotation);
    console.log(this.el.object3D.position);
  }
});

AFRAME.registerComponent('CustomData', {
    schema: {},

    init: function () {
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
