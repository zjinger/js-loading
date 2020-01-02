# spin loader

表格数据中页面加载动画

1、基于原生的JavaScript，无需jQuery以及第三方库

2、样式参考 ant-design

3、使用步骤

引入文件

```
<link rel="stylesheet" href="spin.css">
<script src="spin.js"></script>
```

使用方法

```
<!--html-->
<div id="demo"><div>
<!--javascript-->
<script>
	var myspin1 = new SpinLoading('demo1');
</script>
```

## 效果图

![效果图](https://raw.githubusercontent.com/zjinger/js-loading/master/loader.gif)
![效果图2](https://github.com/zjinger/js-loading/blob/master/loader2.gif)
## 更新
- 自定义遮罩层 opacity，默认 0.6
- 加载后是否打开遮罩 autoShow

