

# 问卷页面 - Datepicker

之前提到 Input 介绍当 `<input type>` 设为 date 时，会依照浏览器的不同生产不一样的日期显示方式，为了消除这种浏览器间的差异，我们会选择不使用原生的页面，而是自己画（或找三方的）的组件来选择日期。

而在日期选择方面，Material Design 也有指出一些设计参考，同时 Angular Material 提供了一个 Datepicker，方便我们可以快速的选择日期。

## Material Design 中的 Pickers

在 [Material Design 的 Pickers 设计指南](https://material.io/guidelines/components/pickers.html)中，针对时间和日期，都提供了一些设计的参考，主要的方向是提供一个给使用者选择日期或时间的工具，选择的方式必须直接好理解。

在移动端可以用 dialog 的方式显示；在屏幕比较大的页面，可以在输入框下直接显示。

![material-design-components-pickers](assets/material-design-components-pickers.png)

## 开始使用 Angular Material 的 Datepicker

使用 Datepicker，必须先引入 `MatDatepickerModule`。

不过对于 Datepicker 来说，这样不太够，因为**跟日期有关的部分虽然 JavaScript 有原生的 Date 类型，但 Date 在不同浏览器中有不同的实现方式，而且还会遇到兼容性问题等等**，因此比较常见的做法是使用 [Moment.js](https://momentjs.com/) 来处理日期相关的资讯，这部分 Angular Material 也都设计好了，对于日期处理的部分，我们可以选择要使用原生的处理日期方式 `MatMomentDateModule`，为了让页面对日期显示有更好的支持，我们选择使用 `MatMomentDateModule`，不过 `MatMomentDateModule` 没有内建在 Angular Material 中，需要通过 npm 安装：

```sh
npm i @angular/material-moment-adapter --save
```

安装完成后再讲 `MatMomentDateModule` 加入我们共用的 Module 中！