/*
 * @Author: wsy
 * @Date: 2023-06-27 18:34:50
 * @LastEditors: wsy
 * @LastEditTime: 2023-06-27 18:34:50
 * @FilePath: sunny_vue_template/src/interface/index
 * @Description:
 */
import { camelCase } from 'lodash-es';

interface IModule {
    moduleName: string;
    funName: string;
    params?: {
        [x: string]: any;
    };
}

export class ModuleManager {
    keys: {
        [key: string]: any;
    };

    constructor() {
        // this.modules = require("require-all")({ dirname: `${ __dirname }/group` });
        this.keys = {};
    }

    init() {
        this.registerModule();
    }

    registerModule() {
        const modules = import.meta.glob('./group/*.ts', { eager: true }) as any;
        const xxvMessage = import.meta.glob('./xxvMessage/*.ts', { eager: true }) as any;
        let arr = [modules, xxvMessage];
        for (const prop of arr) {
            Object.entries(prop).forEach(([fileName, mod]: [string, any]) => {
                // 驼峰命名
                const moduleName = camelCase(
                    // 获取和目录深度无关的文件名
                    fileName
                        ?.split('/')
                        ?.pop()
                        // Remove the file extension from the end
                        ?.replace(/\.\w+$/, '')
                );
                this.keys[moduleName] = mod.default;
            });
        }
    }

    /**
     * 根据模块遍历执行功能
     * @param moduleList 模块列表
     * [
     {
          ueModuleName: 'xxx模块',
          funName: 'xxx函数',
          params: { name: '123' }
        }
     ]
     * @returns {Promise<void>}
     */
    async interfaceFun(moduleList: Array<IModule>) {
        for (let i = 0; i < moduleList.length; i++) {
            let item = moduleList[i];
            let temp = this.keys[item.moduleName];
            if (temp && temp[item.funName]) {
                await temp[item.funName](item.params);
            }
        }
    }
}
