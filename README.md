# Holiday-practice
假期随意练习
## 1.19
#### entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
    
#### 在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

```JavaScript 
    for (const [index, image] of images.entries()) {
        offset *= 1.3

        let blurValue = (Math.pow((index / images.length - percentage),2)*blur)
        image.style.setProperty('--offset', `${offset}px`)
        image.style.setProperty('--blur', `${blurValue}px`)
    }
```

## 1.25
### JavaScript高阶函数map、filter、reduce方法
#### map()函数用于对数组或对象进行处理,并返回处理之后的数组.
#### filter()函数用于筛选出符合要求的数据,并返回该数据集合.
#### reduce()函数用于把数组或对象归结为一个值,并返回这个值
array.reduce(function(total, currentValue, currentIndex, arr), initialValue) ~~initialValue值可缺省~~ （踩坑）涉及对象不可缺省.
```JavaScript
        let arr = [10, 20, 30, 40, 50, 60];
        // 要求找出小于40的元素*2再让这个数组的每个元素相加
        // 链式写法：
        let newArr = arr.filter(function(n) {
            return n < 40;
        }).map(function(n) {
            return n * 2;
        }).reduce(function(preValue, n) {
            return preValue + n
        }, 0);
        console.log(newArr);

        // 箭头函数写法 （可缺省initialValue）
        let new2Arr = arr.filter(n => n < 40).map(n => n * 2).reduce((pre, n) => pre + n);
        console.log(new2Arr);
```
```JavaScript
getTotal()
{
    return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
    }, 0)

    //return this.books.reduce((pre, book) => pre + book.price * book.count) 返回了 [object Object]000

    return this.books.reduce((preValue, item) => preValue + item.price * item.count, 0)
}
```

[208-图解 Map、Reduce 和 Filter 数组方法](https://cloud.tencent.com/developer/article/1470133)

## 2.7

### 视差滚动

1.建立一个容器元素，设置 overflow-y: scroll 使其可以滚动（同时可能需要 overflow-x: hidden）。

2.对于上面的元素, 我们会应用一个 perspective 值，然后设置 perspective-origin 到 top left, 或者 0 0。

3.对上面元素的子元素应用一个在 Z 轴的变换，然后把它们还原回来以实现视差效果，而没有影响它们在屏幕上的大小。

### 原理解析

这里把scale设为S，pespcetive->P,translateZ->D //注意D一般是负值 那么有公式S=(P-D)/P。

![RUNOOB 图标](https://upload-images.jianshu.io/upload_images/23336154-6d92346175afc4b3.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

```css
/*父元素*/
perspective:

1
px

;
/*子元素*/
transform:

translateZ
(
-
2
px

)
scale
(
3
)
;
/*缩小比例=滚动速度比=P/(P-D)*/
```
