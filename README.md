# demo

## 对象关系
* app 在一个应用中，只会实例化一个，它继承自 Koa.Application
    * router
    * controller
        * app
        * ctx 请求级别的对象
            * service
            * helper
            * request & response  Request 是一个请求级别的对象，继承自 Koa.Request
        * service - 应用所有的 service。
        * logger - 为当前 controller 封装的 logger 对象。
    * config
    * logger

### config
我们可以通过 app.config 从 Application 实例上获取到 config 对象，也可以在 Controller, Service, Helper 的实例上通过 this.config 获取到 config 对象。


## 简单封装 eggjs 自动生成增删改查接口

* https://zhuanlan.zhihu.com/p/101090192
* https://github.com/yisbug/egg-mongoose-framework/blob/master/test/fixtures/example/app/service/mixin.js


ts支持：

egg-init --type=ts showcase

更完整例子：eggjs/examples/hackernews-async-ts

