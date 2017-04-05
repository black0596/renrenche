off()
trigger---主动触发  $('#input').trigger('click')--调用input的点击事件|| $('#input').click()--调用input的点击事件
命名空间---$('div').on('click.abc',function(){})--加命名空间 还是原来的点击事件 只不过加了个识别符--trigger('click.abc')--区别对待

JS中的运动
.hide||show('normal'):--正常速度 默认400 改变-时间  宽高  背景色 里面可以直接添加时间 改变时间的值
toggle()-如果元素隐藏就让他显示 如果显示就让他隐藏 hide()/show()合体
fadeOut() || fadeIn()淡入淡出 -默认时间400
fadeToggle()--淡入淡出 fadeOut() || fadeIn()-合体版
sideUp()||sideDown()---显示隐藏 改变高度
sideToggle---显示隐藏-合体版
animate()-**-参数: 1、对象{width:'300',height:'300'}设置样式属性 和值
                   2、时间 默认是400
                   3、运动形式 --swing(缓冲-快慢快)--linear(匀速)
                   4、回调函数 --
                   5、数值运算--{width:'+=100'}--每次触发事件 width会累加
                   6、json 形式-{duration:1000,easing:'linear',complete:function(){alert('回调')}}
                   7、step--可以检测定时器的每一次的变化-（可拓展-非常有意思 里面有一个比例值-pos）配置参数×
                   8、delay()--在链式运动中 可以起到 延时的作用括号内接受时间值
stop()--停止运动 默认情况下 只停止当前运动（在链式运动中只停止当前的链的运动 不会影响后面的运动）如果接受一个true 就会全部停止
        如果接受值为两个 true（stop(true,true)）那么就会停止到当前链式的运动的目标点，不会影响后面的运动
        清空队列行为--
finish()--停止运动效果 所有运动都会到达指定目标点
parseJSON--把类似json形式的字符串转换成真正的json




