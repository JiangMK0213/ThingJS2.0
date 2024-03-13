import * as dat from "dat.gui";
class SceneBtns {
  MarkerGui: any;
  LineGui: any;
  constructor() {
    this.MarkerGui = null;
    this.LineGui = null;
  }
  init() {
    this.campusMarker();
  }
  campusMarker() {
    // 创建GUI
    const gui = new dat.GUI();

    // 创建按钮的配置
    const buttonConfigs = [
      {
        label: "消防栓顶牌",
        actions: [
          {
            name: "创建顶牌",
            action: (name, value, folder) => {
              // 切换按钮文本
              const buttonState = folder.__controllers.find(
                (controller) => controller.property === "execute"
              );
              uino.manager.module.keys.campusMarker.createImageMarker(
                buttonState.label === "创建顶牌"
              );
              buttonState.label =
                buttonState.label === "创建顶牌" ? "销毁顶牌" : "创建顶牌";
              buttonState.name(buttonState.label);
            },
          },
          {
            name: "修改顶牌大小",
            type: "number",
            size: [1, 10],
            action: uino.manager.module.keys.campusMarker.changeSize,
          },
          {
            name: "修改顶牌路径",
            type: "switch",
            list: ["/images/marker/闪电.png", "/images/marker/preview--.png"],
            action: uino.manager.module.keys.campusMarker.changeImage,
          },
        ],
      },
      {
        label: "园区纯色管线",
        actions: [
          {
            name: "创建线路",
            action: (name, value, folder) => {
              // 切换按钮文本
              const buttonState = folder.__controllers.find(
                (controller) => controller.property === "execute"
              );
              uino.manager.module.keys.campusPolygonLine.create(
                buttonState.label === "创建线路"
              );
              buttonState.label =
                buttonState.label === "创建线路" ? "销毁顶牌" : "创建线路";
              buttonState.name(buttonState.label);
            },
          },
          {
            name: "修改线路粗细",
            type: "number",
            size: [1, 10],
            action: uino.manager.module.keys.campusPolygonLine.changeRadius,
          },
          {
            name: "修改线路颜色",
            type: "color",
            action: uino.manager.module.keys.campusPolygonLine.changeColor,
          },
        ],
      },
      {
        label: "园区RouteLine",
        actions: [
          {
            name: "创建RouteLine",
            action: (name, value, folder) => {
              // 切换按钮文本
              const buttonState = folder.__controllers.find(
                (controller) => controller.property === "execute"
              );
              uino.manager.module.keys.campusRouteLine.create(
                buttonState.label === "创建RouteLine"
              );
              buttonState.label =
                buttonState.label === "创建RouteLine"
                  ? "销毁RouteLine"
                  : "创建RouteLine";
              buttonState.name(buttonState.label);
            },
          },
          {
            name: "修改线路粗细",
            type: "number",
            size: [1, 10],
            action: uino.manager.module.keys.campusRouteLine.changeWidth,
          },
          {
            name: "修改流动速度",
            type: "number",
            size: [1, 10],
            action: uino.manager.module.keys.campusRouteLine.changeSpeed,
          },
          // {
          //   name: "修改流动速度",
          //   type: "color",
          //   action: uino.manager.module.keys.campusRouteLine.changeSpeed,
          // },
        ],
      },
    ];

    // 循环创建按钮和相关参数
    buttonConfigs.forEach((config) => {
      const folder = gui.addFolder(config.label);
      config.actions.forEach((btn) => {
        switch (btn.type) {
          case "number":
            {
              folder
                .add({ size: 1 }, "size", btn.size[0], btn.size[1])
                .name(btn.name)
                .onChange((value) => btn.action(btn.name, value, folder));
            }
            break;
          case "switch":
            {
              folder
                .add({ path: btn.list[0] }, "path", btn.list)
                .name(btn.name)
                .onChange((value) => btn.action(btn.name, value, folder));
            }
            break;
          case "color":
            {
              folder
                .addColor({ color: "#fff000" }, "color")
                .name(btn.name)
                .onChange((value) => btn.action(btn.name, value, folder));
            }
            break;
          default:
            // 添加按钮点击事件
            folder
              .add(
                { execute: (value) => btn.action(btn.name, value, folder) },
                "execute"
              )
              .name(btn.name);
            break;
        }
      });

      folder.open(); // 展开文件夹
    });
  }
}
export default new SceneBtns();
