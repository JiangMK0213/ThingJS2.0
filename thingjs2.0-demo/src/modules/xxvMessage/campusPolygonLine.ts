/*
 * @Author       : jianghui
 * @Date         : 2024-01-30 11:22:30
 * @Description  : 创建园区消防栓顶牌
 */
class CampusPolygonLine {
  create(status) {
    if (!status) {
      // 销毁顶牌
      uino.app.query("[userData/_SHOWTYPE_=园区管线]").destroy();
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
        // 创建顶牌
        new THING.PolygonLine({
          type: "PolygonLine",
          points: pos,
          radius: 0.15,
          userData: {
            _SHOWTYPE_: "园区管线",
          },
          style: {
            color: "#fff000",
            // 管线中的纹理资源
          },
        });
      },
    });
  }
  changeRadius(name, value, folder) {
    const objs = uino.app.query("[userData/_SHOWTYPE_=园区管线]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.radius = value;
      });
    }
  }
  changeColor(name, value, folder) {
    const objs = uino.app.query("[userData/_SHOWTYPE_=园区管线]");
    if (objs.length) {
      objs.forEach((obj: any) => {
        obj.style.color = value;
      });
    }
  }
}
export default new CampusPolygonLine();
