type MenuOption = '' | 'home' | 'cad' | 'menu' | 'sobre'

export const createMenuObject = (activeMenu: MenuOption) => {
  let returnObject = {
    home: false,
    cad: false,
    manu: false,
    sobre: false,
    activeMenu: false
}
   if (activeMenu != '') {
      returnObject.activeMenu = true;
   }
      return returnObject;
}