/*
 * @Author       : zhangyong
 * @Date         : 2023-07-19 14:17:12
 * @Description  :
 */
/*
 * @Author: wsy
 * @Date: 2023-06-27 15:04:05
 * @LastEditors: wsy
 * @LastEditTime: 2023-06-27 15:04:05
 * @FilePath: sunny_vue_template/src/modules/map
 * @Description:
 */
import type { ModuleTemplate } from "../ModuleTemplate";

/** 创建地铁线路 */
// class DetaultApp implements ModuleTemplate {
class DetaultApp {
  constructor() {}
  async create() {
    await THING.Utils.login("http://10.100.31.150:8899/processRequest2");
    return new Promise((resolve) => {
      const app = new THING.App({
        // @ts-ignore
        url: "/self",
        // @ts-ignore
        onComplete: function (ev: any) {
          // @ts-ignore
          THING.App.current.levelManager.change(
            // @ts-ignore
            THING.App.current.query(".Campus")[0]
          );
          uino.app = app;
          resolve(ev);
        },
      });
    });
  }
}

export default new DetaultApp();
