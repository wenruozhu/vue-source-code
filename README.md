├── packages              
│   ├── compiler-core    // 核心编译器（平台无关）
│   ├── compiler-dom     // dom编译器
│   ├── compiler-sfc     // vue单文件编译器
│   ├── compiler-ssr     // 服务端渲染编译
│   ├── global.d.ts      // typescript声明文件
│   ├── reactivity       // 响应式模块，可以与任何框架配合使用
│   ├── runtime-core     // 运行时核心实例相关代码（平台无关）
│   ├── runtime-dom      // 运行时dom 关api，属性，事件处理
│   ├── runtime-test     // 运行时测试相关代码
│   ├── server-renderer   // 服务端渲染
│   ├── sfc-playground    // 单文件组件在线调试器
│   ├── shared             // 内部工具库,不对外暴露API
│   ├── size-check          // 简单应用，用来测试代码体积
│   ├── template-explorer  // 用于调试编译器输出的开发工具
│   └── vue                 // 面向公众的完整版本, 包含运行时和编译器