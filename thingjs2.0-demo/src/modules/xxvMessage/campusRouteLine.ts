/*
 * @Author       : jianghui
 * @Date         : 2024-01-30 11:22:30
 * @Description  : 创建园区消防栓顶牌
 */
class CampusRouteLine {
  create(status) {
    if (!status) {
      // 销毁顶牌
      uino.app.query("[userData/_SHOWTYPE_=园区RouteLine]").destroy();
      return;
    }
    uino.app.camera.flyTo({
      position: [-27.834642259810153, 45.203494006972306, 10.02287530315859],
      target: [-27.834621690645605, 2.147095695801863, 10.022837475553406],
      onComplete: () => {
        const pos = [
          [-64.44504496599826, 0.010000000000001563, -5.690879543453235],
          [-19.16572348638492, 0.010000000000005116, -5.422116844581183],
          [-10.73289215150109, 0.00999999999999801, 12.007431545800998],
          [-10.732892151501098, 0.009999999999999787, 38.39704672005381],
        ];
        const line = new THING.RouteLine({
          width: 0.1,
          name: "Routeline",
          closure: false, // 是否首尾相连
          selfPoints: pos,
          position: [0, 0, 0],
          style: {
            image: "/images/lines/path.png",
          },
          userData: {
            _SHOWTYPE_: "园区RouteLine",
          },
        });
        line.style.uv.repeat = [0.1, 1];
      },
    });
  }
  changeWidth(name, value, folder) {
    const objs = uino.app.query("[userData/_SHOWTYPE_=园区RouteLine]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.width = value;
      });
    }
  }
  changeSpeed(name, value, folder) {
    const objs = uino.app.query("[userData/_SHOWTYPE_=园区RouteLine]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.width = value;
      });
    }
  }
  changeColor(name, value, folder) {
    const objs = uino.app.query("[userData/_SHOWTYPE_=园区RouteLine]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.style.color = value;
      });
    }
  }
}
export default new CampusRouteLine();
