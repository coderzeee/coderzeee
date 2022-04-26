/**
 * 将字符串类型转成日期类型
 * @param fmt
 * @param dateStr
 * @returns {*}
 */
export function comParse(dateStr){
  const s = dateStr.replace(/-/g,"/");
  const date = new Date(s);
  return date
}

/**
 * 时间格式化成字符串
 * @param fmt
 * @param dateStr
 * @returns {*}
 */
export function comDateFormat(fmt,date){
  const o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "H+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds()                 //秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}

/**
 * 获取两个时间月份间隔列表
 * @param start 时间字符
 * @param end 时间字符
 * @returns {*}
 */
export function comIntervalMonth(start, end){
  let result = [];
  let starts = start.split('-');
  let ends = end.split('-');
  let staYear = starts[0]*1;
  let staMon = starts[1]*1 < 10? starts[1]:starts[1];
  let endYear = ends[0]*1;
  let endMon = ends[1]*1 < 10? ends[1]:ends[1];;
  result.push(staYear+'-'+staMon);
  while (staYear <= endYear) {
    if (staYear === endYear) {
      while (staMon < endMon) {
        staMon++;
        if(staMon < 10){
          result.push(staYear+'-0'+staMon);
        }else{
          result.push(staYear+'-'+staMon);
        }
      }
      staYear++;
    } else {
      staMon++;
      if (staMon > 12) {
        staMon = 1;
        staYear++;
      }
      if(staMon < 10){
        result.push(staYear+'-0'+staMon);
      }else{
        result.push(staYear+'-'+staMon);
      }
    }
  }
  return result;
}

/**
 * 获取时间后一个月的结束时间
 * 如 开始时间为2020-02-02 00:00:00 则返回 2020-03-31 23:59:59
 * @param start
 * @returns {*}
 */
export function comNextMonthLastDay(start){
  let current = new Date(start);
  current.setMonth(current.getMonth() + 1);
  let currentMonth = current.getMonth();
  let nextMonth =++ currentMonth;
  let nextMonthDayOne = new Date(current.getFullYear(),nextMonth,1);
  let minusDate = 1000*60*60*24;
  return comDateFormat('yyyy-MM-dd 23:59:59',new Date(nextMonthDayOne.getTime()-minusDate));
}

export function dateFormat(date) {
  let format = 'yyyy-MM-dd hh:mm:ss'
  if (date !== 'Invalid Date') {
    var o = {
      'M+': date.getMonth() + 1, // month
      'd+': date.getDate(), // day
      'h+': date.getHours(), // hour
      'm+': date.getMinutes(), // minute
      's+': date.getSeconds(), // second
      'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
      'S': date.getMilliseconds() // millisecond
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1,
          RegExp.$1.length === 1 ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  }
  return ''
}