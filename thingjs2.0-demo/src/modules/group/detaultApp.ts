import type { ModuleTemplate } from "../ModuleTemplate";

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
