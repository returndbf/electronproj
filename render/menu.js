
const {Menu} = require('electron');
let template =[{
    label:'菜单一'
}
]
const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)