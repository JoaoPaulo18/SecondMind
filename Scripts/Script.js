import Menu from "./Menu.js";
import Scroll from "./Scroll.js";

const menu = new Menu('.BtnBox','.Background');
menu.init();

const ItensMenu = new Menu('.DropDown');
ItensMenu.init()

const scroll = new Scroll('.Header_bg','section')
scroll.init()