import * as dat from "dat.gui";
class MarkerBtns {
  MarkerGui: any;
  constructor() {
    this.MarkerGui = null;
  }
  init() {
    if (this.MarkerGui) return;
    let XFSMarker = {
      CampusBtn: {
        buttonName: "创建园区顶牌",
        action: function () {
          uino.manager.module.keys.campusMarker.createImageMarker(
            XFSMarker.CampusBtn.buttonName === "创建园区顶牌"
          );
          XFSMarker.CampusBtn.buttonName =
            XFSMarker.CampusBtn.buttonName === "创建园区顶牌"
              ? "销毁园区顶牌"
              : "创建园区顶牌";
          campusMarkerControl.name(XFSMarker.CampusBtn.buttonName);
        },
      },
      size: 1,
      imageUrl: "/images/marker/闪电.png",
    };

    this.MarkerGui = new dat.GUI();

    // 创建一个顶牌设置的分组
    let topSettingsFolder = this.MarkerGui.addFolder("园区消防栓顶牌设置");
    topSettingsFolder.open();
    const campusMarkerControl = topSettingsFolder
      .add(XFSMarker.CampusBtn, "action")
      .name(XFSMarker.CampusBtn.buttonName);
    topSettingsFolder
      .add(XFSMarker, "size", 0.1, 5)
      .name("顶牌大小")
      .onChange(function (value) {
        const scale = Math.floor(value) || 1;
        console.error("===================", scale);
        const markers = uino.app.query("[userData/_SHOWTYPE_=消防栓顶牌]");
        if (markers.length) {
          markers.forEach((marker: any) => {
            marker.scale = [scale, scale, scale];
          });
        }
        console.log("顶牌大小被修改为: ", value);
      });
    topSettingsFolder
      .add(XFSMarker, "imageUrl", [
        "/images/marker/闪电.png",
        "/images/marker/preview--.png",
      ])
      .name("图片样式")
      .onChange(function (value) {
        const markers = uino.app.query("[userData/_SHOWTYPE_=消防栓顶牌]");
        if (markers.length) {
          markers.forEach((marker: any) => {
            marker.style.image = value;
          });
        }
        console.log("修改图片: ", value);
      });
  }
}
export default new MarkerBtns();
