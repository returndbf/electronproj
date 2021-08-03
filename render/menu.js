/*
 * @Author: dabenfeng
 * @Date: 2021-07-31 15:09:05
 * @LastEditTime: 2021-07-31 19:12:56
 * @LastEditors: Please set LastEditors
 * @Description: 自定义菜单栏
 * @FilePath: \electrondemo\render\menu.js
 */

const {Menu} = require('electron');
let template =[{
    label:'菜单一'
}
]
const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)