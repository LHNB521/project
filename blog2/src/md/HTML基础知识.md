---
title: HTML基础知识
date: 2021-01-20 15:44:15
tags: html
---
# HTML基础知识
## HTML结构
HTML的结构一般包括`<head>`标签和`<body>`标签，`<head>`和`<body>`这两个标记符分别表示网页的头部和正文。头部中可包含页面的标题、关键词、描述说明等内容，他本身不作为内容显示，但影响网页显示的效果。`<body></body>`当中是网页实际显示的内容，正文标记符又被称为实体标记。
## 实例
```html
<!DOCTYPE html>
<html>
<head>
<title>页面标题</title>
</head>
<body>
<h1>我的第一个标题</h1>
<p>我的第一个段落。</p>
</body>
</html>
```
- `DOCTYPE`声明了文档的类型
- `<html>`标签是HTML页面的根元素，该标签的结束标志位`</html>`、
- `<head>`标签包含了文档的元数据（`meta`），如`<meta charset="utf-8">`式为utf-8。