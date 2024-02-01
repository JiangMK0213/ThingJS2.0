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
    // 创建顶牌
    uino.app.query(/消防栓/).forEach((obj) => {
      new THING.Marker({
        name: obj.name + "_Marker",
        useSpriteMaterial: false,
        parent: obj,
        style: {
          image: "/images/marker/闪电.png",
          useSpriteMaterial: false,
        },
        localPosition: [0, 1, 0],
        userData: {
          _SHOWTYPE_: "消防栓顶牌",
        },
      });
    });
  }
}
export default new CampusMarker();
