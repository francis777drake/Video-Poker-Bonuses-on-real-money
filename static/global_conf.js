const GlobalConfigs = {
  pageTitle: "Video Poker Bonuses on real money!",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://dimano.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://dimano.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://dimano.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://dimano.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://dimano.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://dimano.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple lighten-2", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



