# networker-fe

DN42 config generate Sever (Fontend)

一个用于自动收集 DN42 Peer 友友们配置的 Web 服务

带有自动导出朋友们配置数据的管理功能

## 使用方法

由于是前后端分离项目

需要编辑一下

/src/setting.js 将部署的后端 api 地址进行重写 跨域在配置在后端的 配置文件中

修改完毕后 运行

```shell
sh setup.sh
```