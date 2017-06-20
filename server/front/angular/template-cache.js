angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/footer.html",
    "<footer class=\"page-footer home-footer\">\n" +
    "    <div class=\"footer-copyright\">\n" +
    "        <div class=\"container\">\n" +
    "          <p>\n" +
    "            © 2017 Copyright, Saminemjo\n" +
    "            <img class=\"right built_with\" src='http://forthebadge.com/images/badges/built-with-love.svg'>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>\n"
  );

  $templateCache.put("anon/home.html",
    "<div class=\"container-fluid home-bground\">\n" +
    "    <div class=\"row home-title\">\n" +
    "        <div class=\"col s10 m10 l10\">\n" +
    "            <p class=\"home-text1\"><i>What's Up Bro ? Wanna to keep in touch with your webpics ?</i></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row home_register\">\n" +
    "        <div class=\"col s12 m6 l6 center-align\">\n" +
    "            <p class=\"home-keepics\">KEEPICS</p>\n" +
    "            <p class=\"home-call\"><i>Your Best WebPics hosting</i></p>\n" +
    "            <div class=\"row\">\n" +
    "                <form class=\"col s12 form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12 offset-m2 m8\">\n" +
    "                            <input id=\"email\" type=\"email\" class=\"validate\" ng-model=\"user.email\" required>\n" +
    "                            <label for=\"email\">Email</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12 offset-m2 m8\">\n" +
    "                            <input id=\"pass\" type=\"password\" class=\"validate\" ng-model=\"user.password\" required>\n" +
    "                            <label for=\"pass\">Password</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12 offset-m2 m8\">\n" +
    "                            <p>\n" +
    "                                <input type=\"checkbox\" id=\"remember\">\n" +
    "                                <label for=\"remember\">Remember me</label>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col offset-s4 s4 m12\">\n" +
    "                            <p class=\"center-align\">\n" +
    "                                <button class=\" btn-large waves-effect waves-light\" type=\"submit\" name=\"action\">Login</button>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col s12 m12\">\n" +
    "                                <p class=\"center-align\">\n" +
    "                                    <button class=\"btn-large waves-effect waves-light button_newaccount\" type=\"submit\" name=\"action\" ui-sref=\"anon.register\">Creer un compte</button>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"container login_container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"offset-m3 col m6\">\n" +
    "            <h2 class=\"center-align\">Login</h2>\n" +
    "            <div class=\"row\">\n" +
    "                <form class=\"col s12 form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"email\" type=\"email\" class=\"validate\" ng-model=\"user.email\" required>\n" +
    "                            <label for=\"email\">Email</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12\">\n" +
    "                            <input id=\"pass\" type=\"password\" class=\"validate\" ng-model=\"user.password\" required>\n" +
    "                            <label for=\"pass\">Password</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                            <p>\n" +
    "                                <input type=\"checkbox\" id=\"remember\">\n" +
    "                                <label for=\"remember\">Remember me</label>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"divider\"></div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col offset-s4 s4 m12\">\n" +
    "                            <p class=\"center-align\">\n" +
    "                                <button class=\"btn-orange btn-large waves-effect waves-light orange\" type=\"submit\" name=\"action\">Login</button>\n" +
    "                            </p>\n" +
    "                          </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col s12 m12\">\n" +
    "                                    <p class=\"center-align\">\n" +
    "                                        <button class=\"btn-orange btn-large waves-effect waves-light orange button_newaccount\" type=\"submit\" name=\"action\" ui-sref=\"anon.register\">Creer un compte</button>\n" +
    "                                    </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<div class=\"navbar-fixed\">\n" +
    "    <nav>\n" +
    "      <div class=\"nav-wrapper\">\n" +
    "          <img class=\"navbar-logo left\" src=\"../../img/grumpycat.png\" alt=\"\">\n" +
    "          <a href=\"#\" class=\"brand-logo left keepics-logo\">KEEPICS <i class=\"material-icons right\">favorite border</i></a>\n" +
    "          <div class=\"brand-logo navbar_slogan\">\n" +
    "              <i>Register now to share pics & comments with your friends</i>\n" +
    "          </div>\n" +
    "\n" +
    "            <ul class=\"right hide-on-med-and-down \">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\">Register</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/profile.html",
    "<div class=\"home-container\">\n" +
    "    <div class=\"profile_container\">\n" +
    "        <img class=\"profile_img\" src=\"../../img/grumpy_vador.png\" alt=\"\">\n" +
    "        <div class=\"profile_title\">\n" +
    "            <p><span style=\"color:red\">{{user.name}}</span></b> 's Pics</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container-fluid home\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\" col s12 m4 l2 card sticky-action home-carte\" ng-repeat=\"picture in user.pictures track by $index\">\n" +
    "                <div class=\"card-image waves-effect waves-block waves-light \">\n" +
    "                    <img class=\"activator carte\" style=\"background-image:url({{picture.url}})\">\n" +
    "                </div>\n" +
    "                <div class=\"card-action\">\n" +
    "                    <span class=\"card-title activator grey-text text-darken-4\">{{picture.picname}}<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                    <p><a class=\"click\" ng-click=\"openLink($index)\">Lien vers l'image</a></p>\n" +
    "                </div>\n" +
    "                <div class=\"card-reveal\">\n" +
    "                    <span class=\"card-title grey-text text-darken-4\">{{picture.picname}}<i class=\"material-icons right\">close</i></span>\n" +
    "                    <p>{{picture.description}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"container-fluid register_container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col s12\">\n" +
    "                <h2 class=\"center-align\"><i>Ho Yeah, join me Bro!</i></h2>\n" +
    "                    <img class=\"register_img\" src=\"../../img/love.png\" alt=\"\">\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <form class=\"col s12 form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12 offset-m3 m6 offset-l4 l4\">\n" +
    "                            <input id=\"name\" type=\"text\" class=\"validate\" ng-model=\"user.name\" required>\n" +
    "                            <label for=\"name\">Username</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12 offset-m3 m6 offset-l4 l4\">\n" +
    "                            <input id=\"email\" type=\"email\" class=\"validate\" ng-model=\"user.email\" required>\n" +
    "                            <label for=\"email\">Email</label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"input-field col s12 offset-m3 m6 offset-l4 l4\">\n" +
    "                            <input id=\"pass\" type=\"password\" class=\"validate\" ng-model=\"user.password\" required>\n" +
    "                            <label for=\"pass\">Password</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col offset-s4 s4 m12\">\n" +
    "                                <p class=\"center-align\">\n" +
    "                                    <button class=\"btn btn-large waves-effect waves-light\" type=\"submit\" name=\"action\">Register</button>\n" +
    "                                </p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/footer.html",
    "<footer class=\"page-footer footer\">\n" +
    "    <div class=\"footer-copyright\">\n" +
    "        <div class=\"container\">\n" +
    "          <p>\n" +
    "            © 2017 Copyright, Saminemjo\n" +
    "            <img class=\"right built_with\" src='http://forthebadge.com/images/badges/built-with-love.svg'>\n" +
    "          </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>\n"
  );

  $templateCache.put("user/home.html",
    "<div class=\"home-container container-fluid\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col s12  home-text\">\n" +
    "                <p> Click on the <b><span style=\"color:red\">RED</span></b> button to <del><i>destroy the World</i></del> add a new pic on your board...</p>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\" col s12 home-boutons\">\n" +
    "                    <a class=\"btn-floating btn-large waves-effect waves-light red\" data-target=\"modal1\"><i class=\"material-icons\">add</i></a>\n" +
    "                    <a class=\"waves-effect waves-light btn\" ng-click=\"copyLink()\"><i class=\"material-icons left\">share</i>share with friends</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container home\">\n"
  );

  $templateCache.put("user/navbar.html",
    "<div class=\"navbar-fixed\">\n" +
    "    <nav>\n" +
    "        <div class=\"nav-wrapper navbar\">\n" +
    "            <img class=\"navbar-logo left\" src=\"../../img/grumpycat.png\" alt=\"\">\n" +
    "            <a  class=\"brand-logo left keepics-logo\">KEEPICS <i class=\"material-icons right\">favorite border</i></a>\n" +
    "            <a class=\"brand-logo navbar-name left\" ng-click=\"goProfile()\">{{user.name}}</a>\n" +
    "            <div class=\"searchbar\">\n" +
    "                <form ng-submit=\"searchName()\">\n" +
    "                    <div class=\"input-field \">\n" +
    "                        <input id=\"autocomplete\" class=\"autocomplete\" ng-model=\"nameSearch\" placeholder=\"Search for user profile\" required>\n" +
    "                        <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <ul class=\"right hide-on-med-and-down \">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.home\">Home</a></li>\n" +
    "                <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</div>\n"
  );

  $templateCache.put("user/profile.html",
    "<div class=\"home-container container-fluid\">\n" +
    "\n" +
    "    <div class=\"profile_container container\">\n" +
    "        <div class=\"row\">\n" +
    "            <img class=\"profile_img\" src=\"../../img/grumpy_vador.png\" alt=\"\">\n" +
    "            <div class=\"profile_title\">\n" +
    "                <p><span style=\"color:red\">{{user.name}}</span></b> 's Pics</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container home\" >\n" +
    "        <div class=\"row\" ng-show=\"isAuthor()\">\n" +
    "            <div class=\"col s12  home-text\">\n" +
    "                <p> Click on the <b><span style=\"color:red\">RED</span></b> button to <del><i>destroy the World</i></del> add a new pic on your board...</p>\n" +
    "            </div>\n" +
    "            <div class=\" col s12 home-boutons\">\n" +
    "                <a class=\"btn-floating btn-large waves-effect waves-light red\" data-target=\"modal1\"><i class=\"material-icons\">add</i></a>\n" +
    "                <a class=\"waves-effect waves-light btn\" ng-click=\"copyLink()\"><i class=\"material-icons left\">share</i>share with friends</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\" col s12 m6 l6 card sticky-action home-carte\" ng-repeat=\"picture in user.pictures track by $index\">\n" +
    "                <div class=\"card-image waves-effect waves-block waves-light \">\n" +
    "                    <img class=\"activator carte\" style=\"background-image:url({{picture.url}})\">\n" +
    "                </div>\n" +
    "                <div class=\"card-action\">\n" +
    "                    <span class=\"card-title activator grey-text text-darken-4\">{{picture.picname}}<i class=\"material-icons right\">more_vert</i></span>\n" +
    "                    <p><a class=\"click\" ng-click=\"openLink($index)\">Lien vers l'image</a></p>\n" +
    "                    <div class=\"\">\n" +
    "                        <span class=\"\">Like : {{picture.likes}}<i class=\"material-icons md-10 right click\" ng-click=\"like($index)\" ng-class=\"getClass($index)\">favorite</i></span>\n" +
    "                    </div>\n" +
    "                    <form ng-submit=\"addComment($index)\" class=\"input-field row\">\n" +
    "                        <input ng-model=\"picture.commentR\" id=\"{{$index}}\" type=\"text\" class=\"validate col s10\">\n" +
    "                        <label for=\"{{$index}}\">Comment</label>\n" +
    "                        <button class=\"btn waves-effect waves-light right col s2\" type=\"submit\" name=\"action\"><i class=\"material-icons right\">send</i></button>\n" +
    "                    </form>\n" +
    "                    <div class=\"click\">\n" +
    "                        <a ng-click=\"showme=false\" ng-show=\"showme\">close comments</a>\n" +
    "                        <a ng-click=\"showme=true\" ng-hide=\"showme\">See comments</a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"showme\" class=\"\">\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"comment in picture.comments\">\n" +
    "                                <i> {{comment.date | date:' dd/MM/yyyy, \\à HH:mm'}} par {{comment.author}} :</i></br>\n" +
    "                                {{comment.text}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card-action\">\n" +
    "                    <div  ng-show=\"isAuthor()\"class=\"click\" ng-click=\"removePic($index)\">\n" +
    "                        <span class=\"carteclose\">DELETE MY PIC<i class=\"material-icons md-10 right \">close</i></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card-reveal\">\n" +
    "                    <span class=\"card-title grey-text text-darken-4\">{{picture.picname}}<i class=\"material-icons right\">close</i></span>\n" +
    "                    <p>{{picture.description}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- Modal Structure -->\n" +
    "    <div id=\"modal1\" class=\"modal\">\n" +
    "        <form novalidate ng-submit=\"addPic()\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"input-field\">\n" +
    "                    <input id=\"url\" type=\"text\" name=\"\" value=\"\" ng-model=\"newPic.url\">\n" +
    "                    <label for=\"url\">Copiez l'url de votre image ici</label>\n" +
    "                </div>\n" +
    "                <div class=\"input-field\">\n" +
    "                    <input type=\"text\" id=\"name\" name=\"\" value=\"\" ng-model=\"newPic.picname\">\n" +
    "                    <label for=\"name\">Nom de votre image</label>\n" +
    "                </div>\n" +
    "                <div class=\"input-field\">\n" +
    "                    <label for=\"description\">description</label>\n" +
    "                    <input type=\"text\" id=\"description\" name=\"\" value=\"\" ng-model=\"newPic.description\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit<i class=\"material-icons right\">send</i></button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
