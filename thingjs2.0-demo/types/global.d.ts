/// <reference types="vite/client" />

import type { PropType as VuePropType } from "vue";

declare global {
  const uino: Uino;
  const WinBox: any;
  const $: any;

  interface chartType {
    index: number;
    compName: string;
  }

  // 表格每一行的数据类型
  interface tableItem {
    index: number | string;

    [key: string]: string | number;
  }

  // 组件表格类型
  interface compTableType {
    columns: { label: string; field: string }[];
    data: tableItem[];
  }

  // tab页类型
  interface TabsType {
    index: number;
    title: string;
    active: boolean;
    compName: string;
    props?: any;
  }

  interface businessType {
    id: number | string;
    index: number; // 排序索引
    name: string; // 业务名称
    defaultIcon?: string; // 默认状态图标
    activeIcon?: string; // 激活状态图标
    defaultLevel?: {
      name: string; // 场景名称
      level: string; // 层级分类
      [key: string]: any;
    };
    moduleList?: {
      moduleName: string; // 模块名称
      params?: any; // 函数传参
      funName?: string; //函数名称
    }[]; // 对应的业务功能函数模块
    view?: {
      position: number[];
      target: number[];
      [key: string]: any;
    };
    chartViews?: {
      left: chartType[];
      right: chartType[];
    };
    children: businessType[];
  }

  interface Window {
    [key: string]: any;
    vm: unknown;
    uino: Uino;
    app: THING.App;
    data: any;
    JSPlugin: any;
    scale: number | string;
    UE_SCENE: any;
    mockDataListMap: any;
    initThingJsTip: any;
    screenSizeObj: any;
  }

  interface Uino {
    [x: string]: any;

    app: THING.App;
    systemRunDays: number;
    isUseSunnyServer: any;
    thingJsAuthUrl: string;
    // 管理器群组
    manager: any;
    sunnyMessage: {
      config: (obj: { duration?: number }) => void;
      info: (
        param1: number | string | HTMLDivElement,
        param2?: number | string,
        param3?: function
      ) => function;
      success: (
        param1: number | string | HTMLDivElement,
        param2?: number | string,
        param3?: function
      ) => function;
      warning: (
        param1: number | string | HTMLDivElement,
        param2?: number | string,
        param3?: function
      ) => function;
      error: (
        param1: number | string | HTMLDivElement,
        param2?: number | string,
        param3?: function
      ) => function;
      loading: (
        param1?: number | string | boolean,
        param2?: number | string,
        param3?: function
      ) => function;
      destroyAll: function;
    };
    uePostMessage: (e: any) => void;
  }

  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  // vue
  declare type PropType<T> = VuePropType<T>;

  declare type Recordable<T = any> = Record<string, T>;
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };

  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_USE_RSM_PROXY: boolean;
    VITE_ENV: string;
    VITE_OUTPUT_DIR: string;
    VITE_PUBLIC_PATH: string;
    VITE_USE_MOCK: boolean;
    VITE_PORT: string;
    VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_BASE_API: string;
  }
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
