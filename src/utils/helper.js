export const getLastMonthStartEnd = () => {
    //获取上个月最后一天
    let date = new Date();
    // console.log(date);
    date.setDate(0); //setDate(day) 方法用于设置一个月的某一天。day取1-31表示对应的天数，另外0 为上一个月的最后一天，-1 为上一个月最后一天之前的一天，32 为下个月的第一天或者第二天
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month > 9 ? month : '0' + month;
    var day = date.getDate();  //getDate() 方法可返回月份的某一天。也就是当前date的当前天数
    day = day > 9 ? day : '0' + day;
    // console.log("year:" + year + "month:" + month + "day:" + day)
    return [`${year}-${month}-01`, `${year}-${month}-${day}`]
}

// 返回从当天开始计算到指定天数的日期
export const getDate = (AddDayCount) => {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
    return y + "-" + m + "-" + d;
}

// 返回当月一号到当天的日期，array
export const getMonthStartToToday = () => {
    var dd = new Date();
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0

    var firstDay = y + "-" + m + "-01";
    var curDay = y + "-" + m + "-" + d;
    return [firstDay, curDay]
}

export const exportCsv = (filename, data) => {
    const blobData = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), data], { type: 'text/csv' });
    if (blobData != null && navigator.msSaveBlob) {
        navigator.msSaveBlob(blobData, filename);
        return;
    }
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blobData);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
}

/**
 * 获取文件后缀名   getExt("1.mp4") //->mp4
 * @param {String} filename
 */
export function getFileExt(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}

/**
 * 数组去重  uniqueArray([1,1,1,1,1])//[1]  原理是利用Set中不能出现重复元素的特性
 * @param {*} arr
 */
export function uniqueArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The first parameter must be an array')
    }
    if (arr.length === 1) {
        return arr
    }
    return [...new Set(arr)]
}

// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
    if (typeof number != 'number') {
        number = Number(number)
    }
    return Number(number.toFixed(no))
}

export function formatDate(date) {
    date = new Date(Date.parse(date)); //转换成Data();.replace(/-/g, "/")
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

// 执行组合排列的函数
export function doExchangeArray(arr) {
    var len = arr.length;
    // 当数组大于等于2个的时候
    if (len >= 2) {
        // 第一个数组的长度
        var len1 = arr[0].length;
        // 第二个数组的长度
        var len2 = arr[1].length;
        // 2个数组产生的组合数
        var lenBoth = len1 * len2;
        //  申明一个新数组,做数据暂存
        var items = new Array(lenBoth);
        // 申明新数组的索引
        var index = 0;
        var i = 0;
        // 2层嵌套循环,将组合放到新数组中
        for (i = 0; i < len1; i++) {
            for (var j = 0; j < len2; j++) {
                // items[index] = arr[0][i] +"|"+ arr[1][j];
                items[index] = [...arr[0][i], ...arr[1][j]];
                index++;
            }
        }
        // 将新组合的数组并到原数组中
        var newArr = new Array(len - 1);
        for (i = 2; i < arr.length; i++) {
            newArr[i - 1] = arr[i];
        }
        newArr[0] = items;
        // 执行回调
        return doExchangeArray(newArr);
    } else {
        return arr[0];
    }
}

