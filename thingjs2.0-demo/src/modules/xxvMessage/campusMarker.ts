/*
 * @Author       : jianghui
 * @Date         : 2024-01-30 11:22:30
 * @Description  : 创建园区消防栓顶牌
 */
class CampusMarker {
  createImageMarker(status) {
    if (!status) {
      // 销毁顶牌
      uino.app.query("[userData/_SHOWTYPE_=消防栓顶牌]").destroy();
      return;
    }
    uino.app.camera.flyTo({
      position: [-26.11859717195085, 4.8143903381538316, 11.035247973418937],
      target: [-13.619966197602203, 0.41891248414267496, 3.011874586116668],
      onComplete: () => {
        // 创建顶牌
        uino.app.query(/消防栓/).forEach((obj) => {
          new THING.Marker({
            name: obj.name + "_Marker",
            useSpriteMaterial: false,
            parent: obj,
            pivot: [0.5, 0, 0.5],
            style: {
              image: "/images/marker/闪电.png",
              useSpriteMaterial: false,
            },
            localPosition: [0, 0, 0],
            userData: {
              _SHOWTYPE_: "消防栓顶牌",
            },
          });
        });
      },
    });
  }
  changeSize(name, value, folder) {
    // 取整
    const size = Math.floor(value);
    const objs = uino.app.query("[userData/_SHOWTYPE_=消防栓顶牌]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.scale = [size, size, size];
      });
    }
  }
  changeImage(name, value, folder) {
    const markers = uino.app.query("[userData/_SHOWTYPE_=消防栓顶牌]");
    if (markers.length) {
      markers.forEach((marker: any) => {
        marker.style.image = value;
      });
    }
  }
}
export default new CampusMarker();
