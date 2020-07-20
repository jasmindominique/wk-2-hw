"use strict";

var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
//# sourceMappingURL=main.js.map
