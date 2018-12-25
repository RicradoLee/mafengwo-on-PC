/*
* 功能：给对象增加class
* @param object obj ：增加class的指定对象
* @param string className: 增加的class名字
* @return undefined
* */
function addClass(obj, className) {
    // 1.获取原来的class的值
    var oldClass = obj.className.trim();   // 字符串：'box a b c'

    // 2.将class的进行拆分
    var classArr = oldClass.split(/\s+/); // ['box','a','b','c']

    // 3.判断新的class是否在classArr中
    if (classArr.indexOf(className) == -1) {
        // active不在原来的class中，就增加进去
        classArr.push(className);    // classArr=['box','a','b','c','active']
        obj.className = classArr.join(' '); // 字符串：box a b c active
    }
}

/*
* 功能：给对象删除class
* @param object obj ：删除class的指定对象
* @param string className: 删除的class名字
* @return undefined
* */
function removeClass(obj, className) {
    // 删除active类
    var oldClass = obj.className;    // box a b c active

    // 将原来的class以' '切割
    var classArr = oldClass.split(' ');

    // 判断要删除的active是否在数组中
    if (classArr.indexOf(className) != -1) {
        // active类在classArr中
        classArr.splice(classArr.indexOf(className), 1);
        obj.className = classArr.join(' ');
    }
}

/*
* 增加绑定事件
* @param Object obj:绑定事件的对象
* @param String eventName:绑定的事件名称
* @param Function callback:绑定事件执行的函数
* */
function addEvent(obj, eventName, callback) {
    // 兼容所有的浏览器
    if (obj.addEventListener) {
        // 兼容IE9+，火狐，谷歌
        obj.addEventListener(eventName, callback, false);
    } else {
        // 支持IE8
        obj.attachEvent('on' + eventName, callback);
    }
}

/*
* 移除绑定事件
* @param Object obj:移除绑定事件的对象
* @param String eventName:移除绑定的事件名称
* @param Function callback:移除绑定事件执行的函数
* */
function removeEvent(obj, eventName, callback) {
    if (obj.removeEventListener) {
        obj.removeEventListener(eventName,callback);
    } else {
        obj.detachEvent('on'+eventName,callback);
    }
}

/*
* 获取样式
* @param Object obj:对象
* @param String attr:获取的css样式名称
* @return 获取的样式值
* */
function getStyle(obj,attr){
    // 此处只能使用[]
    // get：获取
    // computer:电脑 compute：计算 computed：计算过的，计算完成的
    // style:样式
    // 获取计算完成的样式
    return document.defaultView ? document.defaultView.getComputedStyle(obj, null)[attr] : obj.currentStyle[attr];
}