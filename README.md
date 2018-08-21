# react-native的总结

##### ①init新项目不能用新版本，要用v0.55.4

react-native init --version="0.55.4" myprojectname

##### ②项目新建后要做index.js对Android.index.js和ios.index.js的兼容

cd myprojectname
mkdir android\app\src\main\assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

##### ③如果不能直接在VSCode中运行项目，要先在cmd运行一次以激活node.js服务器，之后才可以在VSCode运行

****否则报no response error：500错误

##### ④如果加入插件后报Could not expand ZIP，尝试

***1.cd android
***2.gradlew clean
***3.cd ..
***4.react-native run-android

##### ⑤实现全面屏可以

看看这个https://github.com/mockingbot/react-native-immersive

##### ⑥轮播图
可以看看这个https://github.com/leecade/react-native-swiper

##### ⑦关于手机webview内核实现
看看这个http://www.miui.com/thread-15406109-1-1.html

##### ⑧常用的插件库npm，rnpm

##### ⑨关于PWA技术：

https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=zh-cn

# BUG汇总：

##### ①chrome禁止本地浏览时加载本地其他文件

可以采用添加启动参数的方式来支持，添加参数为 --allow-file-access-from-files  或者　--disable-web-security
https://blog.csdn.net/zhishiqu/article/details/79657786

##### ②抛出Error: java.util.zip.ZipException: Not in GZIP format

→将数据分批引入发现是.gz模型的数据文件无法解析
→→不能解决×

##### ③移动目录的文件后出现java.io.IOException: Could not delete path 'D:\...\android\app\build\intermediates\assets\debug\web\i\models'.

→上次build完缓存没清除
***1.cd android
***2.gradlew clean
***3.cd ..
***4.react-native run-android

##### ④XMLHttpRequest cannot load file:///.../.../.../XXXX.json Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

→安全问题：https://blog.csdn.net/zhangcanyan/article/details/51930775
→全面理解0x02，Android 下的跨域问题：https://www.cnblogs.com/zhengyun_ustc/p/5088251.html
→webView.getSettings().setAllowUniversalAccessFromFileURLs(true);

##### ⑥Execution failed for task ':app:installDebug'.

##### com.android.builder.testing.api.DeviceException: No connected devices!

连接出问题或者多个设备同时连接了



# 常用指令：

运行： react-native run-android

打包： D:\MagicLightExhibit>react-native bundle --entry-file D:/MagicLightExhibit/App.j
s --bundle-output D:/AndroidBuild --platform android --dev true

```
react-native bundle [参数]   
构建 js 离线包     
Options:      -h, --help                   输出如何使用的信息     
--entry-file <path>          RN入口文件的路径, 绝对路径或相对路径     
--platform [string]          ios 或 andorid     
--transformer [string]       Specify a custom transformer to be used     
--dev [boolean]              如果为false, 警告会不显示并且打出的包的大小会变小     
--prepack                    当通过时, 打包输出将使用Prepack格式化     
--bridge-config [string]     使用Prepack的一个json格式的文件__fbBatchedBridgeConfig 例如: ./bridgeconfig.json     
--bundle-output <string>     打包后的文件输出目录, 例: /tmp/groups.bundle     
--bundle-encoding [string]   打离线包的格式 可参考链接https://nodejs.org/api/buffer.html#buffer_buffer.     
--sourcemap-output [string]  生成Source Map，但0.14之后不再自动生成source map，需要手动指定这个参数。例: /tmp/groups.map     
--assets-dest [string]       打包时图片资源的存储路径     
--verbose                    显示打包过程     
--reset-cache                移除缓存文件     
--config [string]            命令行的配置文件路径
```

 

##### Android信息调试：

关于adb：https://developer.android.com/studio/command-line/adb?hl=zh-cn

##### ①adb devices

查看连接的设备

##### ②adb logcat *：E

会一直弹出所有的日志，而且不会停，如果只是想要刚刚崩溃掉的部分日志则可以选择使用 

 

 