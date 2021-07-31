window.onload = () => {
    let time = document.getElementById('text')
    let get = () => {
        let date = new Date();
        time.innerText = date.toLocaleString()
    }
    setInterval(get, 1000);
    //windows提示对象
    let notice = body => {
        let options = {
            title: '大笨峰提示您',
            body: body,
        };
       //windows提示对象
        new window.Notification(options.title, options);
    }
    let date1 = new Date();
    let hour = date1.getHours();
    console.log(hour)
    switch (hour) {
        case (12 > hour && hour >= 8):
            notice('加油打工人')
            break;
        case 14:
            notice('准备饮茶')
            break;
        case 15:
            notice('三点几嚟，做卵啊做，饮茶先啦')
            break;
        case 12:
            notice('吃饱饭才有力气干活！')
            break;
        case 17:
            notice('下班时间快到了，准备溜')
            break;
        default:
            break;
    }
}
