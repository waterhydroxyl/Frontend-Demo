# Holiday-practice
假期随意练习
## 1.19
entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
    
在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

```JavaScript 
    for (const [index, image] of images.entries()) {
            offset *= 1.3

            let blurValue = (Math.pow((index / images.length - percentage),2)*blur)
            image.style.setProperty('--offset', `${offset}px`)
            image.style.setProperty('--blur', `${blurValue}px`)
    }
