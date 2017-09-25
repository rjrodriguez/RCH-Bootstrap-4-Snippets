/*
 * The MIT License (MIT)
 * Copyright (c) 2017 Ricardo Javier Rodriguez.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';

    var snippets = {};
    var cdncss = '    <!-- Bootstrap CSS -->\n' +
        '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">\n';
    var cdnjs = '    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n' +
        '    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n' +
        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>\n' +
        '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>\n';

    // Bootstrap 4 - HTML5 Templates and Minimum Template

    snippets.bs4 = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <!-- Required meta tags -->\n' +
        '    <meta charset="utf-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n' +
        '    <title>Bootstrap 4 Minimal Template</title>\n' +
        cdncss +
        '\n' +
        '</head>\n\n' +
        '<body>\n' +
        '    <h1>Hello, world!</h1>\n\n' +
        cdnjs +
        '</body>\n</html>';

    snippets.bs4html = '<!DOCTYPE html>\n' +
        '<html lang="">\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <title>Bootstrap 4 Template</title>\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n' +
        '    <meta name="description" content="">\n' +
        '    <meta name="author" content="">\n\n' +
        '    <link rel="apple-touch-icon" href="">\n\n' +
        cdncss +
        '\n' +
        '    <!-- Link to your CSS file -->\n' +
        '    <link rel="stylesheet" href="">\n' +
        '</head>\n\n' +
        '<body>\n\n' +
        '    <!-- Start coding here -->\n\n\n' +
        '    <!-- Coding End -->\n\n' +
        cdnjs +
        '</body>\n</html>\n';

    snippets.bs4template = snippets.bs4html;

    // Alerts
    // https://getbootstrap.com/docs/4.0/components/alerts/
    
    
    snippets.bs4alertlink = '<a href="#" class="alert-link">an example link</a>';
    
    snippets.bs4alertdismiss = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    
    snippets.bs4alert = '<div class="alert alert-primary alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Primary alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';
    
    snippets.bs4alertsecondary = '<div class="alert alert-secondary alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Secondary alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';

    snippets.bs4alertdanger = '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Danger alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';

    snippets.bs4alertinfo = '<div class="alert alert-info alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Info alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';

    snippets.bs4alertsuccess = '<div class="alert alert-success alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Success alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';

    snippets.bs4alertwarning = '<div class="alert alert-warning alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Warning alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';

    snippets.bs4alertlight = '<div class="alert alert-light alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Light alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';
    
    snippets.bs4alertdark = '<div class="alert alert-dark alert-dismissible fade show" role="alert">\n' +
        '		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '		<strong>Dark alert!</strong> You should check <a href="#" class="alert-link">this link</a>.\n' +
        '	</div>\n';
    
    snippets.bs4alertbasic = '<div class="alert alert-primary" role="alert">\n' +
        '       This is a primary alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicsecondary = '<div class="alert alert-secondary" role="alert">\n' +
        '       This is a secondary alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicdanger = '<div class="alert alert-danger" role="alert">\n' +
        '       This is a danger alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicinfo = '<div class="alert alert-info" role="alert">\n' +
        '       This is a info alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicsuccess = '<div class="alert alert-success" role="alert">\n' +
        '       This is a success alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicwarning = '<div class="alert alert-warning" role="alert">\n' +
        '       This is a warning alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasicdark = '<div class="alert alert-dark" role="alert">\n' +
        '       This is a dark alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbasiclight = '<div class="alert alert-light" role="alert">\n' +
        '       This is a light alert—check it out!\n' +
        '   </div>';
    
    snippets.bs4alertbox = '<div class="alert alert-primary" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxsecondary = '<div class="alert alert-secondary" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxdanger = '<div class="alert alert-danger" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxinfo = '<div class="alert alert-info" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxsuccess = '<div class="alert alert-success" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxwarning = '<div class="alert alert-warning" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxdark = '<div class="alert alert-dark" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';
    
    snippets.bs4alertboxlight = '<div class="alert alert-light" role="alert">\n' +
        '       <h4 class="alert-heading">Well done!</h4>\n' +
        '       <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
        '       <hr>\n' +
        '       <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
        '   </div>';

    // Badge
    // https://getbootstrap.com/docs/4.0/components/badge/

    snippets.bs4badge = '<span class="badge badge-primary">Primary</span>';
    snippets.bs4badgesecondary = '<span class="badge badge-secondary">Secondary</span>';
    snippets.bs4badgesuccess = '<span class="badge badge-success">Success</span>';
    snippets.bs4badgedanger = '<span class="badge badge-danger">Danger</span>';
    snippets.bs4badgewarning = '<span class="badge badge-warning">Warning</span>';
    snippets.bs4badgeinfo = '<span class="badge badge-info">Info</span>';
    snippets.bs4badgelight = '<span class="badge badge-light">Light</span>';
    snippets.bs4badgedark = '<span class="badge badge-dark">Dark</span>';
    snippets.bs4badgepill = '<span class="badge badge-pill badge-primary">Primary</span>';
    snippets.bs4badgepillsecondary = '<span class="badge badge-pill badge-secondary">Pill Secondary</span>';
    snippets.bs4badgepillsuccess = '<span class="badge badge-pill badge-success">Pill Success</span>';
    snippets.bs4badgepilldanger = '<span class="badge badge-pill badge-danger">Pill Danger</span>';
    snippets.bs4badgepillwarning = '<span class="badge badge-pill badge-warning">Pill Warning</span>';
    snippets.bs4badgepillinfo = '<span class="badge badge-pill badge-info">Pill Info</span>';
    snippets.bs4badgepilllight = '<span class="badge badge-pill badge-light">Pill Light</span>';
    snippets.bs4badgepilldark = '<span class="badge badge-pill badge-dark">Pill Dark</span>';
    snippets.bs4badgelink = '<a href="#" class="badge badge-primary">Badge link Primary</a>';
    snippets.bs4badgelinksecondary = '<a href="#" class="badge badge-secondary">Badge link Secondary</a>';
    snippets.bs4badgelinksuccess = '<a href="#" class="badge badge-success">Badge link Success</a>';
    snippets.bs4badgelinkdanger = '<a href="#" class="badge badge-danger">Badge link Danger</a>';
    snippets.bs4badgelinkwarning = '<a href="#" class="badge badge-warning">Badge link Warning</a>';
    snippets.bs4badgelinkinfo = '<a href="#" class="badge badge-info">Badge link Info</a>';
    snippets.bs4badgelinklight = '<a href="#" class="badge badge-light">Badge link Light</a>';
    snippets.bs4badgelinkdark = '<a href="#" class="badge badge-dark">Badge link Dark</a>';

    // Breadcrumbs
    // https://getbootstrap.com/docs/4.0/components/breadcrumb/

    snippets.bs4breadcrumbs = '<nav class="breadcrumb">\n' +
        '		<a class="breadcrumb-item" href="#">1st level</a>\n' +
        '		<a class="breadcrumb-item" href="#">2nd level</a>\n' +
        '		<a class="breadcrumb-item" href="#">3rd level</a>\n' +
        '		<span class="breadcrumb-item active">item</span>\n' +
        '	</nav>';
    
    snippets.bs4breadcrumbslist = '<ol class="breadcrumb">\n' +
        '		<li class="breadcrumb-item"><a href="#">1st level</a></li>\n' +
        '		<li class="breadcrumb-item"><a href="#">2nd level</a></li>\n' +
        '		<li class="breadcrumb-item active">3rd level</li>\n' +
        '	</ol>';
    
    // Buttons (TODO)
    // https://getbootstrap.com/docs/4.0/components/buttons/

    snippets.bs4blockbuttondanger = '<button type="button" class="btn btn-large btn-block btn-danger">[button]</button>\n';
    snippets.bs4blockbuttondefault = '<button type="button" class="btn btn-large btn-block btn-default">[button]</button>\n';
    snippets.bs4blockbuttondisabled = '<button type="button" class="btn btn-large btn-block btn-{2:default} disabled">[button]</button>\n';
    snippets.bs4blockbuttoninfo = '<a class="btn btn-large btn-block btn-info" href="#" role="button">[button]</a>\n';
    snippets.bs4blockbuttonprimary = '<button type="button" class="btn btn-large btn-block btn-primary">[button]</button>\n';
    snippets.bs4blockbuttonsuccess = '<a class="btn btn-large btn-block btn-success" href="#" role="button">[button]</a>\n';
    snippets.bs4blockbuttonwarning = '<a class="btn btn-large btn-block btn-warning" href="#" role="button">[button]</a>\n';
    snippets.bs4blockbutton = '<button type="button" class="btn btn-large btn-block btn-default">[button]</button>\n';
    snippets.bs4buttondanger = '<button type="button" class="btn btn-danger">[button]</button>\n';
    snippets.bs4buttondefault = '<button type="button" class="btn btn-default">[button]</button>\n';
    snippets.bs4buttondisabled = '<button type="button" class="btn btn-primary disabled">[button]</button>\n';
    
    // Button Groups (TODO)
    // https://getbootstrap.com/docs/4.0/components/button-group/
    
    snippets.bs4buttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<button type="button" class="btn btn-default">[Top]</button>\n' +
        '	<button type="button" class="btn btn-default">[Middle]</button>\n' +
        '   <button type="button" class="btn btn-default">[Bottom]</button>\n' +
        '</div>\n';
    snippets.bs4buttongroup = '<div class="btn-group">\n' +
        '	<button type="button" class="btn btn-default">[Left]</button>\n' +
        '	<button type="button" class="btn btn-default">[Middle]</button>\n' +
        '	<button type="button" class="btn btn-default">[Right]</button>\n' +
        '</div>';
    snippets.bs4buttoninfo = '<button type="button" class="btn btn-info">[button]</button>';
    snippets.bs4buttonprimary = '<button type="button" class="btn btn-primary">[button]</button>';
    snippets.bs4buttonsuccess = '<button type="button" class="btn btn-success">[button]</button>';
    snippets.bs4buttontoolbar = '<div class="btn-toolbar">\n' +
        '	<div class="btn-group"></div>\n' +
        '	<div class="btn-group"></div>\n' +
        '	<div class="btn-group"></div>\n' +
        '</div>';
    snippets.bs4buttonwarning = '<button type="button" class="btn btn-warning">[button]</button>\n';
    snippets.bs4button = '<button type="button" class="btn btn-default">[button]</button>\n';
    snippets.bs4lgbuttondanger = '<button type="button" class="btn btn-danger">[button]</button>\n';
    snippets.bs4lgbuttondisabled = '<button type="button" class="btn btn-lg btn-default disabled">[button]</button>\n';
    snippets.bs4lgbuttoninfo = '<a class="btn btn-lg btn-info" href="#" role="button">button</a>\n';
    snippets.bs4lgbuttonprimary = '<button type="button" class="btn btn-lg btn-primary">[button]</button>\n';
    snippets.bs4lgbuttonsuccess = '<button type="button" class="btn btn-lg btn-success">[button]</button>\n';
    snippets.bs4lgbuttonwarning = '<a class="btn btn-lg btn-warning" href="#" role="button">button</a>\n';
    snippets.bs4lgbutton = '<button type="button" class="btn btn-lg btn-default">[button]</button>\n';
    snippets.bs4lgbuttondefault = '<button type="button" class="btn btn-lg btn-default">[button]</button>\n';
    snippets.bs4minibuttondanger = '<button type="button" class="btn btn-xs btn-danger">[button]</button>\n';
    snippets.bs4minibuttondefault = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs4minibuttondisabled = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs4minibuttoninfo = '<button type="button" class="btn btn-xs btn-info">[button]</button>\n';
    snippets.bs4minibuttonprimary = '<button type="button" class="btn btn-xs btn-primary">[button]</button>\n';
    snippets.bs4minibuttonsuccess = '<button type="button" class="btn btn-xs btn-success">[button]</button>\n';
    snippets.bs4minibuttonwarning = '<button type="button" class="btn btn-xs btn-warning">[button]</button>\n';
    snippets.bs4minibutton = '<button type="button" class="btn btn-xs btn-default">[button]</button>\n';
    snippets.bs4smbuttondanger = '<button type="button" class="btn btn-sm btn-danger">[button]</button>\n';
    snippets.bs4smbuttondefault = '<button type="button" class="btn btn-sm btn-default">[button]</button>\n';
    snippets.bs4smbuttondisabled = '<button type="button" class="btn btn-sm btn-default disabled">[button]</button>\n';
    snippets.bs4smbuttoninfo = '<button type="button" class="btn btn-sm btn-info">[button]</button>\n';
    snippets.bs4smbuttonprimary = '<button type="button" class="btn btn-sm btn-primary">[button]</button>\n';
    snippets.bs4smbuttonsuccess = '<button type="button" class="btn btn-sm btn-success">[button]</button>\n';
    snippets.bs4smbuttonwarning = '<button type="button" class="btn btn-sm btn-warning">[button]</button>\n';
    snippets.bs4smbutton = '<button type="button" class="btn btn-sm btn-default">[button]</button>\n';

    // Cards
    // https://getbootstrap.com/docs/4.0/components/card/
    // TODO
    
    // Carousel
    // https://getbootstrap.com/docs/4.0/components/carousel/
    
    var carouselcontrols = '       <a class="carousel-control-prev" href="#carouselFull" role="button" data-slide="prev">\n' +
        '           <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
        '           <span class="sr-only">Previous</span>\n' +
        '       </a>\n' +
        '       <a class="carousel-control-next" href="#carouselFull" role="button" data-slide="next">\n' +
        '           <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
        '           <span class="sr-only">Next</span>\n' +
        '       </a>\n';
    var carouselindicators = '       <ol class="carousel-indicators">\n' +
        '           <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>\n' +
        '           <li data-target="#carouselIndicators" data-slide-to="1"></li>\n' +
        '           <li data-target="#carouselIndicators" data-slide-to="2"></li>\n' +
        '       </ol>\n';
    
    snippets.bs4carousel = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' +
        '		<div class="carousel-inner">\n' +
        '           <div class="carousel-item active">\n' +
        '               <img class="d-block w-100" src="" alt="First slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Second slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Third slide">\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';
    
    snippets.bs4carouselwcontrols = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' +
        '       <div class="carousel-inner">\n' +
        '           <div class="carousel-item active">\n' +
        '               <img class="d-block w-100" src="" alt="First slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Second slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Third slide">\n' +
        '           </div>\n' +
        '       </div>\n' +
        carouselcontrols +
        '   </div>';
    
    snippets.bs4carouselwindicators = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' +
        carouselindicators +
        '       <div class="carousel-inner">\n' +
        '           <div class="carousel-item active">\n' +
        '               <img class="d-block w-100" src="" alt="First slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Second slide">\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Third slide">\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';
    
    snippets.bs4carouselwcaptions = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' +
        '       <div class="carousel-inner">\n' +
        '           <div class="carousel-item active">\n' +
        '               <img class="d-block w-100" src="" alt="First slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>First slide</h3>\n' +
        '                   <p>First caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Second slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>Second slide</h3>\n' +
        '                   <p>Second caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Third slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>Third slide</h3>\n' +
        '                   <p>Third caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';
    
    snippets.bs4carouselfull = '<div id="carouselFull" class="carousel slide" data-ride="carousel">\n' +
        carouselindicators +
        '       <div class="carousel-inner">\n' +
        '           <div class="carousel-item active">\n' +
        '               <img class="d-block w-100" src="" alt="First slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>First slide</h3>\n' +
        '                   <p>First caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Second slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>Second slide</h3>\n' +
        '                   <p>Second caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '           <div class="carousel-item">\n' +
        '               <img class="d-block w-100" src="" alt="Third slide">\n' +
        '               <div class="carousel-caption d-none d-md-block">\n' +
        '                   <h3>Third slide</h3>\n' +
        '                   <p>Third caption</p>\n' +
        '               </div>\n' +
        '           </div>\n' +
        '       </div>\n' +
        carouselcontrols +
        '   </div>';

    // CDN

    snippets.bs4cdn = cdncss + cdnjs;
    snippets.bs4cdnjs = cdnjs;
    snippets.bs4cdncss = cdncss;
    
    // Figures
    
    snippets.bs4figure = '<figure class="figure">\n' +
        '       <img src="" class="figure-img img-fluid rounded" alt="A generic image with.">\n' +
        '       <figcaption class="figure-caption">A caption for the above image.</figcaption>\n' +
        '   </figure>\n';

    // Forms (TODO)
    // https://getbootstrap.com/docs/4.0/components/forms/

    snippets.bs4formhorizontal = '<form action="" method="POST" class="form-horizontal" role="form">\n' +
        '		<div class="form-group">\n' +
        '			<legend>[Form title]</legend>\n' +
        '		</div>\n\n\n\n' +
        '		<div class="form-group">\n' +
        '			<div class="col-sm-10 col-sm-offset-2">\n' +
        '				<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '			</div>\n' +
        '		</div>\n' +
        '</form>\n';

    snippets.bs4forminline = '<form action="" method="POST" class="form-inline" role="form">\n\n' +
        '	<div class="form-group">\n' +
        '		<label class="sr-only" for="">label</label>\n' +
        '		<input type="email" class="form-control" id="" placeholder="Input field">\n' +
        '	</div>\n\n\n' +
        '	<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '</form>\n';

    snippets.bs4formlabel = '<label for="input-id" class="col-sm-2">[label]</label>\n';

    snippets.bs4form = '<form action="" method="POST" role="form">\n' +
        '	<legend>Form title</legend>\n\n' +
        '	<div class="form-group">\n' +
        '		<label for="">label</label>\n' +
        '		<input type="text" class="form-control" id="" placeholder="Input field">\n' +
        '	</div>\n\n\n\n' +
        '	<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '</form>\n';
    
    // Images

    snippets.bs4image = '<img src="#" class="img-fluid" alt="">\n';
    snippets.bs4imagerounded = '<img src="" class="rounded" alt="">\n';
    snippets.bs4imagecircle = '<img src="" class="rounded-circle" alt="">\n';

    // Inputs (TODO)
    
    snippets.bs4inputcheckbox = '<div class="checkbox">\n' +
        '	<label>\n' +
        '		<input type="checkbox" value="">\n' +
        '		Checkbox\n' +
        '	</label>\n' +
        '</div>\n';

    snippets.bs4inputcolorh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="color" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputcolor = '<input type="color" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputdateh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="date" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputdate = '<input type="date" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputemailh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="email" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputemail = '<input type="email" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputhidden = '<input type="hidden" name="" id="input" class="form-control" value="">\n';

    snippets.bs4inputlabel = '<label for="input-id" class="col-sm-2"></label>\n';

    snippets.bs4inputmonthh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="month" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputmonth = '<input type="month" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputnumberh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="number" name="" id="input" class="form-control" value="min="{6" min="{6"} max="" step="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputnumber = '<input type="number" name="" id="input" class="form-control" value="" min="[MIN]" max="[MAX]" step="" required="required" title="">\n';

    snippets.bs4inputpasswordh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="password" name="" id="input" class="form-control" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputpassword = '<input type="password" name="" id="input" class="form-control" required="required" title="">\n';

    snippets.bs4inputradio = '<div class="radio">\n' +
        '	<label>\n' +
        '		<input type="radio" name="" id="input" value="" checked="checked">\n' +
        '		Radio Box\n' +
        '	</label>\n' +
        '</div>\n';

    snippets.bs4inputrangeh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="range" name="" id="input" class="form-control" value="min="{6" min="{6"} max="" step="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputrange = '<input type="range" name="" id="input" class="form-control" value="" min="{5"} max="" step="" required="required" title="">\n';

    snippets.bs4inputreseth = '<div class="form-group">\n' +
        '	<div class="col-sm-10 col-offset-2">\n' +
        '		<input type="reset" value="Reset" class="btn btn-default">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputreset = '<input type="reset" value="Reset" class="btn btn-default">\n';

    snippets.bs4inputsearchh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="search" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputsearch = '<input type="search" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputselecth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<select name="" id="input" class="form-control">\n' +
        '			<option value="">-- Select One --</option>\n' +
        '		</select>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputselect = '<select name="" id="input" class="form-control">\n' +
        '	    <option value="">-- Select One --</option>\n' +
        '</select>\n';

    snippets.bs4inputsubmith = '<div class="form-group">\n' +
        '	<div class="col-sm-10 col-offset-2">\n' +
        '		<button type="submit" class="btn btn-primary">Submit</button>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputsubmit = '<button type="submit" class="btn btn-primary">Submit</button>\n';

    snippets.bs4inputtelh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="tel" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputtel = '<input type="tel" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputtexth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputtext = '<input type="text" name="" id="input" class="form-control" value="" required="required" pattern="" title="">\n';

    snippets.bs4inputtimeh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="time" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputtime = '<input type="time" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputurlh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="url" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputurl = '<input type="url" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4inputweekh = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<input type="week" name="" id="input" class="form-control" value="" required="required" title="">\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4inputweek = '<input type="week" name="" id="input" class="form-control" value="" required="required" title="">\n';

    snippets.bs4selecth = '<div class="form-group">\n' +
        '	<label for="input" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-2">\n' +
        '		<select name="" id="input" class="form-control" required="required">\n' +
        '			<option value=""></option>\n' +
        '		</select>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4select = '<select name="" id="input" class="form-control" required="required">\n' +
        '      <option value=""></option>\n' +
        '</select>\n';

    snippets.bs4textareah = '<div class="form-group">\n' +
        '	<label for="textarea" class="col-sm-2 control-label">:</label>\n' +
        '	<div class="col-sm-10">\n' +
        '		<textarea name="" id="textarea" class="form-control" rows="3" required="required"></textarea>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4textarea = '<textarea name="" id="input" class="form-control" rows="3" required="required"></textarea>\n';

    // Input Groups

    snippets.bs4inputgroupaddontext = '<div class="input-group">\n' +
        '	<div class="input-group-addon">$</div>\n' +
        '	<input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">\n' +
        '</div>\n';

    snippets.bs4inputgroupaddon = '<div class="input-group-addon">[CHANGE HERE]</div>\n';

    snippets.bs4inputgroupbtn = '<span class="input-group-btn">\n' +
        '	<button type="button" class="btn btn-default">Go!</button>\n' +
        '</span>\n';

    snippets.bs4inputgrouptextbtn = '\n';

    snippets.bs4inputgroup = '<div class="input-group">\n' +
        '	<input type="text" class="form-control" id="exampleInputAmount" placeholder="Search">\n' +
        '	<span class="input-group-btn">\n' +
        '		<button type="button" class="btn btn-default">Go!</button>\n' +
        '	</span>\n' +
        '</div>\n';

    // Jumbotron
    // https://getbootstrap.com/docs/4.0/components/jumbotron/

    snippets.bs4jumbotron = '<div class="jumbotron">\n' +
        '       <h1 class="display-3">Hello, world!</h1>\n' +
        '       <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n' +
        '       <hr class="my-4">\n' +
        '       <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n' +
        '       <p class="lead">\n' +
        '           <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
        '       </p>\n' +
        '   </div>';
    
    snippets.bs4jumbotronfluid = '<div class="jumbotron jumbotron-fluid">\n' +
        '       <div class="container">\n' +
        '           <h1 class="display-3">Hello, world!</h1>\n' +
        '           <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n' +
        '           <hr class="my-4">\n' +
        '           <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n' +
        '           <p class="lead">\n' +
        '               <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n' +
        '           </p>\n' +
        '       </div>\n' +
        '   </div>';


    // Link Buttons (TODO)

    snippets.bs4blocklinkbuttondanger = '<a class="btn btn-large btn-block btn-danger" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttondefault = '<a class="btn btn-large btn-block btn-default" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttondisabled = '<a class="btn btn-large btn-block btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttoninfo = '<a class="btn btn-large btn-block btn-info" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonprimary = '<a class="btn btn-large btn-block btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonsuccess = '<a class="btn btn-large btn-block btn-success" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbuttonwarning = '<a class="btn btn-large btn-block btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4blocklinkbutton = '<a class="btn btn-large btn-block btn-default" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttondanger = '<a class="btn btn-lg btn-danger" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttondefault = '<a class="btn btn-lg btn-default" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttondisabled = '<a class="btn btn-lg btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttoninfo = '<a class="btn btn-lg btn-info" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttonprimary = '<a class="btn btn-lg btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttonsuccess = '<a class="btn btn-lg btn-success" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbuttonwarning = '<a class="btn btn-lg btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4lglinkbutton = '<a class="btn btn-lg btn-default" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttondanger = '<a class="btn btn-danger" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttondefault = '<a class="btn btn-default" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttondisabled = '<a class="btn btn-primary disabled" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttongroupvertical = '<div class="btn-group-vertical">\n' +
        '	<a class="btn btn-default" href="#" role="button">Top</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Bottom</a>\n' +
        '</div>\n';

    snippets.bs4linkbuttongroup = '<div class="btn-group">\n' +
        '	<a class="btn btn-default" href="#" role="button">Left</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Middle</a>\n' +
        '	<a class="btn btn-default" href="#" role="button">Right</a>\n' +
        '</div>\n';

    snippets.bs4linkbuttoninfo = '<a class="btn btn-info" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonprimary = '<a class="btn btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonsuccess = '<a class="btn btn-success" href="#" role="button">button</a>\n';

    snippets.bs4linkbuttonwarning = '<a class="btn btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4linkbutton = '<a class="btn btn-default" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttondanger = '<a class="btn btn-xs btn-danger" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttondefault = '<a class="btn btn-xs btn-default" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttondisabled = '<a class="btn btn-xs btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttoninfo = '<a class="btn btn-xs btn-info" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttonprimary = '<button type="button" class="btn btn-xs btn-primary">button</button>\n';

    snippets.bs4minilinkbuttonsuccess = '<a class="btn btn-xs btn-success" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbuttonwarning = '<a class="btn btn-xs btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4minilinkbutton = '<a class="btn btn-xs btn-default" href="#" role="button">button</a>\n';

    snippets.bs4smlinkbuttondanger = '<button type="button" class="btn btn-sm btn-danger">button</button>\n';

    snippets.bs4smlinkbuttondefault = '<button type="button" class="btn btn-sm btn-default">button</button>\n';

    snippets.bs4smlinkbuttondisabled = '<a class="btn btn-sm btn-default disabled" href="#" role="button">button</a>\n';

    snippets.bs4smlinkbuttoninfo = '<button type="button" class="btn btn-sm btn-info">button</button>\n';

    snippets.bs4smlinkbuttonprimary = '<a class="btn btn-sm btn-primary" href="#" role="button">button</a>\n';

    snippets.bs4smlinkbuttonsuccess = '<a class="btn btn-sm btn-success" href="#" role="button">button</a>\n';

    snippets.bs4smlinkbuttonwarning = '<a class="btn btn-sm btn-warning" href="#" role="button">button</a>\n';

    snippets.bs4smlinkbutton = '<a class="btn btn-sm btn-default" href="#" role="button">button</a>\n';

    // List Groups (TODO)
    // https://getbootstrap.com/docs/4.0/components/list-group/

    snippets.bs4listgroupbadges = '<ul class="list-group">\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">5</span>\n' +
        '		Item 1\n' +
        '	</li>\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">10</span>\n' +
        '		Item 2\n' +
        '	</li>\n' +
        '	<li class="list-group-item">\n' +
        '		<span class="badge">15</span>\n' +
        '		Item 3\n' +
        '	</li>\n' +
        '</ul>\n';

    snippets.bs4listgroupcontent = '<div class="list-group">\n' +
        '	<a href="#" class="list-group-item active">' +
        '		<h4 class="list-group-item-heading">List group item heading</h4>' +
        '		<p class="list-group-item-text">Content goes here</p>' +
        '	</a>' +
        '</div>\n';

    snippets.bs4listgrouplinked = '<div class="list-group">\n' +
        '	<a href="#" class="list-group-item active">Item 1</a>\n' +
        '	<a href="#" class="list-group-item">Item 2</a>\n' +
        '	<a href="#" class="list-group-item">Item 3</a>\n' +
        '</div>\n';

    snippets.bs4listgroup = '<ul class="list-group">\n' +
        '	<li class="list-group-item">Item 1</li>\n' +
        '	<li class="list-group-item">Item 2</li>\n' +
        '	<li class="list-group-item">Item 3</li>\n' +
        '</ul>\n';


    // Local (TODO)

    snippets.bs4localcss = '<link rel="stylesheet" media="screen" href="css/bootstrap.min.css">\n';

    snippets.bs4localjs = '<script src="js/jquery.js"></script>\n' +
        '<script src="js/bootstrap.min.js"></script>\n';


    // Media (TODO)
    // https://getbootstrap.com/docs/4.0/layout/media-object/
    
    snippets.bs4mediaobject = '<div class="media">\n' +
        '	<a class="pull-left" href="#">\n' +
        '		<img class="media-object" src="#" alt="Image">\n' +
        '	</a>\n' +
        '	<div class="media-body">\n' +
        '		<h4 class="media-heading">Media heading</h4>\n' +
        '		<p>Text goes here...</p>\n' +
        '	</div>\n' +
        '</div>\n';

    // Modal
    // https://getbootstrap.com/docs/4.0/components/modal/

    snippets.bs4modalbtn = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal">Launch demo modal</button>';

    snippets.bs4modal = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
        '       <div class="modal-dialog" role="document">\n' +
        '         <div class="modal-content">\n' +
        '            <div class="modal-header">\n' +
        '               <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>\n' +
        '               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '               ...\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
        '               <button type="button" class="btn btn-primary">Save changes</button>\n' +
        '            </div>\n' +
        '         </div>\n' +
        '      </div>\n' +
        '   </div>';

    // Navigation (TODO)
    // https://getbootstrap.com/docs/4.0/components/navbar/

    snippets.bs4navbar = '<nav class="navbar navbar-dark bg-dark">\n' +
        '       <a class="navbar-brand" href="#">Never expand</a>\n' +
        '       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '           <span class="navbar-toggler-icon"></span>\n' +
        '       </button>\n' +
        '       <div class="collapse navbar-collapse" id="navbarsExample01">\n' +
        '           <ul class="navbar-nav mr-auto">\n' +
        '               <li class="nav-item active">\n' +
        '                   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                   <a class="nav-link" href="#">Link</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                   <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item dropdown">\n' +
        '                   <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
        '                   <div class="dropdown-menu" aria-labelledby="dropdown01">\n' +
        '                       <a class="dropdown-item" href="#">Action</a>\n' +
        '                       <a class="dropdown-item" href="#">Another action</a>\n' +
        '                       <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                   </div>\n' +
        '               </li>\n' +
        '           </ul>\n' +
        '           <form class="form-inline my-2 my-md-0">\n' +
        '               <input class="form-control" type="text" placeholder="Search" aria-label="Search">\n' +
        '           </form>\n' +
        '       </div>\n' +
        '   </nav>';
    
    snippets.bs4navbarbasic = '<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">\n' +
        '      <div class="container">\n' +
        '         <a class="navbar-brand" href="#">Basic</a>\n' +
        '         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '            <span class="navbar-toggler-icon"></span>\n' +
        '         </button>\n' +
        '         <div class="collapse navbar-collapse" id="navbarResponsive">\n' +
        '            <ul class="navbar-nav ml-auto">\n' +
        '               <li class="nav-item active">\n' +
        '                  <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                  <a class="nav-link" href="#">About</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                  <a class="nav-link" href="#">Services</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                  <a class="nav-link" href="#">Portfolio</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                  <a class="nav-link" href="#">Contact</a>\n' +
        '               </li>\n' +
        '            </ul>\n' +
        '         </div>\n' +
        '      </div>\n' +
        '   </nav>';
    
    snippets.bs4navbarcentered = '<nav class="navbar navbar-expand-md navbar-dark bg-dark">\n' +
        '       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '           <span class="navbar-toggler-icon"></span>\n' +
        '       </button>\n' +
        '       <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample01">\n' +
        '           <ul class="navbar-nav">\n' +
        '               <li class="nav-item active">\n' +
        '                   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                   <a class="nav-link" href="#">Link</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item">\n' +
        '                   <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '               </li>\n' +
        '               <li class="nav-item dropdown">\n' +
        '                   <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
        '                   <div class="dropdown-menu" aria-labelledby="dropdown01">\n' +
        '                       <a class="dropdown-item" href="#">Action</a>\n' +
        '                       <a class="dropdown-item" href="#">Another action</a>\n' +
        '                       <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                   </div>\n' +
        '               </li>\n' +
        '           </ul>\n' +
        '       </div>\n' +
        '   </nav>';
    

    // Pagination (TODO)

    snippets.bs4pagination = '<nav aria-label="Page navigation example">\n' +
        '       <ul class="pagination">\n' +
        '           <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">Next</a></li>\n' +
        '       </ul>\n' +
        '   </nav>';
    
    snippets.bs4paginationicons = '<nav aria-label="Page navigation example">\n' +
        '       <ul class="pagination">\n' +
        '           <li class="page-item">\n' +
        '               <a class="page-link" href="#" aria-label="Previous">\n' +
        '                   <span aria-hidden="true">&laquo;</span>\n' +
        '                   <span class="sr-only">Previous</span>\n' +
        '               </a>\n' +
        '           </li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '           <li class="page-item">\n' +
        '               <a class="page-link" href="#" aria-label="Next">\n' +
        '                   <span aria-hidden="true">&raquo;</span>\n' +
        '                   <span class="sr-only">Next</span>\n' +
        '               </a>\n' +
        '           </li>\n' +
        '       </ul>\n' +
        '   </nav>';
    
    snippets.bs4paginationcentered = '<nav aria-label="Page navigation example">\n' +
        '       <ul class="pagination  justify-content-center">\n' +
        '           <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">Next</a></li>\n' +
        '       </ul>\n' +
        '   </nav>';
    
    snippets.bs4paginationright = '<nav aria-label="Page navigation example">\n' +
        '       <ul class="pagination  justify-content-end">\n' +
        '           <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">Next</a></li>\n' +
        '       </ul>\n' +
        '   </nav>';

   

    // Table (TODO)

    snippets.bs4table = '<table class="table">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';

    snippets.bs4tableinverse = '<table class="table table-inverse">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';
    
    snippets.bs4tablestriped = '<table class="table table-striped">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';
    
    snippets.bs4tablebordered = '<table class="table table-bordered">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';

    snippets.bs4tablehover = '<table class="table table-hover">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';
    
    snippets.bs4tablesmall = '<table class="table table-sm">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>First Name</th>\n' +
        '               <th>Last Name</th>\n' +
        '               <th>Username</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Mark</td>\n' +
        '               <td>Otto</td>\n' +
        '               <td>@mdo</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Jacob</td>\n' +
        '               <td>Thornton</td>\n' +
        '               <td>@fat</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Larry</td>\n' +
        '               <td>the Bird</td>\n' +
        '               <td>@twitter</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>';

    snippets.tableresponsive = '<table class="table table-responsive">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th>#</th>\n' +
        '               <th>Table heading</th>\n' +
        '               <th>Table heading</th>\n' +
        '               <th>Table heading</th>\n' +
        '               <th>Table heading</th>\n' +
        '               <th>Table heading</th>\n' +
        '               <th>Table heading</th>\n' +
        '           </tr>\n' +
        '       </thead>\n' +
        '       <tbody>\n' +
        '           <tr>\n' +
        '               <th scope="row">1</th>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">2</th>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '           </tr>\n' +
        '           <tr>\n' +
        '               <th scope="row">3</th>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '               <td>Table cell</td>\n' +
        '           </tr>\n' +
        '       </tbody>\n' +
        '   </table>\n';

    // Tabs (TODO)

    snippets.bs4tabs = '<div role="tabpanel">\n' +
        '    <!-- Nav tabs -->\n' +
        '    <ul class="nav nav-tabs" role="tablist">\n' +
        '        <li role="presentation" class="active">\n' +
        '            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">home</a>\n' +
        '        </li>\n' +
        '        <li role="presentation">\n' +
        '            <a href="#tab" aria-controls="tab" role="tab" data-toggle="tab">tab</a>\n' +
        '        </li>\n' +
        '    </ul>\n' +
        '\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content">\n' +
        '        <div role="tabpanel" class="tab-pane active" id="home">...</div>\n' +
        '        <div role="tabpanel" class="tab-pane" id="tab">...</div>\n' +
        '    </div>\n' +
        '</div>\n';

    snippets.bs4tabhover = '    <!-- Nav pills -->\n' +
        '    <ul class="nav nav-pills">\n' +
        '        <li class="active"><a href="#tab-1" data-toggle="tab">Tab 1</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-2" data-toggle="tab">Tab 2</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-3" data-toggle="tab">Tab 3</a>\n' +
        '        </li>\n' +
        '        <li><a href="#tab-4" data-toggle="tab">Tab 4</a>\n' +
        '        </li>\n' +
        '    </ul>\n\n' +
        '    <!-- Tab panes -->\n' +
        '    <div class="tab-content well">\n' +
        '        <div class="tab-pane active" id="tab-1">Content 1</div>\n' +
        '        <div class="tab-pane" id="tab-2">Content 2</div>\n' +
        '        <div class="tab-pane" id="tab-3">Content 3</div>\n' +
        '        <div class="tab-pane" id="tab-4">Content 4</div>\n' +
        '    </div>    \n' +
        '    <!-- Move this line to the last line of js declaration area -->\n' +
        '    <script src="https://cdn.rawgit.com/tonystar/bootstrap-hover-tabs/v3.1.1/bootstrap-hover-tabs.js"></script>\n';


    snippets.bs4tablesampleheader = '            <thead>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </thead>\n';

    snippets.bs4tablesamplefooter = '            <tfoot>\n' +
        '                <tr>\n' +
        '                    <th>Name</th>\n' +
        '                    <th>Position</th>\n' +
        '                    <th>Office</th>\n' +
        '                    <th>Age</th>\n' +
        '                    <th>Start date</th>\n' +
        '                    <th>Salary</th>\n' +
        '                </tr>\n' +
        '            </tfoot>\n';

    snippets.bs4tablesample = '<table class="table">\n' +
        '    <thead>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </thead>\n' +
        '\n' +
        '    <tfoot>\n' +
        '        <tr>\n' +
        '            <th>Name</th>\n' +
        '            <th>Position</th>\n' +
        '            <th>Office</th>\n' +
        '            <th>Age</th>\n' +
        '            <th>Start date</th>\n' +
        '            <th>Salary</th>\n' +
        '        </tr>\n' +
        '    </tfoot>\n' +
        '\n' +
        '    <tbody>\n' +
        '        \n' +
        '        [insert data here Ex: bs4tablesamplerows10 .. bs4tablesamplerows50]\n' +
        '        \n' +
        '    </tbody>\n' +
        '</table>\n';

    snippets.bs4tablesamplerows10 = '            <tr>\n' +
        '                <td>Tiger Nixon</td>\n' +
        '                <td>System Architect</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2011/04/25</td>\n' +
        '                <td>$320,800</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Garrett Winters</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>63</td>\n' +
        '                <td>2011/07/25</td>\n' +
        '                <td>$170,750</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Ashton Cox</td>\n' +
        '                <td>Junior Technical Author</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>66</td>\n' +
        '                <td>2009/01/12</td>\n' +
        '                <td>$86,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Cedric Kelly</td>\n' +
        '                <td>Senior Javascript Developer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>22</td>\n' +
        '                <td>2012/03/29</td>\n' +
        '                <td>$433,060</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Airi Satou</td>\n' +
        '                <td>Accountant</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>33</td>\n' +
        '                <td>2008/11/28</td>\n' +
        '                <td>$162,700</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Brielle Williamson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>New York</td>\n' +
        '                <td>61</td>\n' +
        '                <td>2012/12/02</td>\n' +
        '                <td>$372,000</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Herrod Chandler</td>\n' +
        '                <td>Sales Assistant</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>59</td>\n' +
        '                <td>2012/08/06</td>\n' +
        '                <td>$137,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Rhona Davidson</td>\n' +
        '                <td>Integration Specialist</td>\n' +
        '                <td>Tokyo</td>\n' +
        '                <td>55</td>\n' +
        '                <td>2010/10/14</td>\n' +
        '                <td>$327,900</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Colleen Hurst</td>\n' +
        '                <td>Javascript Developer</td>\n' +
        '                <td>San Francisco</td>\n' +
        '                <td>39</td>\n' +
        '                <td>2009/09/15</td>\n' +
        '                <td>$205,500</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>Sonya Frost</td>\n' +
        '                <td>Software Engineer</td>\n' +
        '                <td>Edinburgh</td>\n' +
        '                <td>23</td>\n' +
        '                <td>2008/12/13</td>\n' +
        '                <td>$103,600</td>\n' +
        '            </tr>\n';

    snippets.bs4tablesamplerows20 = snippets.bs4tablesamplerows10 + '                <tr>\n' +
        '                    <td>Jena Gaines</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2008/12/19</td>\n' +
        '                    <td>$90,560</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Quinn Flynn</td>\n' +
        '                    <td>Support Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2013/03/03</td>\n' +
        '                    <td>$342,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Charde Marshall</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>36</td>\n' +
        '                    <td>2008/10/16</td>\n' +
        '                    <td>$470,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Haley Kennedy</td>\n' +
        '                    <td>Senior Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2012/12/18</td>\n' +
        '                    <td>$313,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Tatyana Fitzpatrick</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>19</td>\n' +
        '                    <td>2010/03/17</td>\n' +
        '                    <td>$385,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Michael Silva</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>66</td>\n' +
        '                    <td>2012/11/27</td>\n' +
        '                    <td>$198,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Paul Byrd</td>\n' +
        '                    <td>Chief Financial Officer (CFO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2010/06/09</td>\n' +
        '                    <td>$725,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gloria Little</td>\n' +
        '                    <td>Systems Administrator</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>59</td>\n' +
        '                    <td>2009/04/10</td>\n' +
        '                    <td>$237,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bradley Greer</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2012/10/13</td>\n' +
        '                    <td>$132,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Dai Rios</td>\n' +
        '                    <td>Personnel Lead</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>35</td>\n' +
        '                    <td>2012/09/26</td>\n' +
        '                    <td>$217,500</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows30 = snippets.bs4tablesamplerows20 + '                <tr>\n' +
        '                    <td>Jenette Caldwell</td>\n' +
        '                    <td>Development Lead</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>30</td>\n' +
        '                    <td>2011/09/03</td>\n' +
        '                    <td>$345,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Yuri Berry</td>\n' +
        '                    <td>Chief Marketing Officer (CMO)</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>40</td>\n' +
        '                    <td>2009/06/25</td>\n' +
        '                    <td>$675,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Caesar Vance</td>\n' +
        '                    <td>Pre-Sales Support</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>21</td>\n' +
        '                    <td>2011/12/12</td>\n' +
        '                    <td>$106,450</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Doris Wilder</td>\n' +
        '                    <td>Sales Assistant</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>23</td>\n' +
        '                    <td>2010/09/20</td>\n' +
        '                    <td>$85,600</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Angelica Ramos</td>\n' +
        '                    <td>Chief Executive Officer (CEO)</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/10/09</td>\n' +
        '                    <td>$1,200,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Joyce</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>42</td>\n' +
        '                    <td>2010/12/22</td>\n' +
        '                    <td>$92,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Chang</td>\n' +
        '                    <td>Regional Director</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2010/11/14</td>\n' +
        '                    <td>$357,650</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Brenden Wagner</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>28</td>\n' +
        '                    <td>2011/06/07</td>\n' +
        '                    <td>$206,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Fiona Green</td>\n' +
        '                    <td>Chief Operating Officer (COO)</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>48</td>\n' +
        '                    <td>2010/03/11</td>\n' +
        '                    <td>$850,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Shou Itou</td>\n' +
        '                    <td>Regional Marketing</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>20</td>\n' +
        '                    <td>2011/08/14</td>\n' +
        '                    <td>$163,000</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows40 = snippets.bs4tablesamplerows30 + '                <tr>\n' +
        '                    <td>Michelle House</td>\n' +
        '                    <td>Integration Specialist</td>\n' +
        '                    <td>Sidney</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2011/06/02</td>\n' +
        '                    <td>$95,400</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Suki Burks</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>53</td>\n' +
        '                    <td>2009/10/22</td>\n' +
        '                    <td>$114,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Prescott Bartlett</td>\n' +
        '                    <td>Technical Author</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>27</td>\n' +
        '                    <td>2011/05/07</td>\n' +
        '                    <td>$145,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Gavin Cortez</td>\n' +
        '                    <td>Team Leader</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>22</td>\n' +
        '                    <td>2008/10/26</td>\n' +
        '                    <td>$235,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Martena Mccray</td>\n' +
        '                    <td>Post-Sales support</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>46</td>\n' +
        '                    <td>2011/03/09</td>\n' +
        '                    <td>$324,050</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Unity Butler</td>\n' +
        '                    <td>Marketing Designer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/12/09</td>\n' +
        '                    <td>$85,675</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Howard Hatfield</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>51</td>\n' +
        '                    <td>2008/12/16</td>\n' +
        '                    <td>$164,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Hope Fuentes</td>\n' +
        '                    <td>Secretary</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>41</td>\n' +
        '                    <td>2010/02/12</td>\n' +
        '                    <td>$109,850</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Vivian Harrell</td>\n' +
        '                    <td>Financial Controller</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>62</td>\n' +
        '                    <td>2009/02/14</td>\n' +
        '                    <td>$452,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Timothy Mooney</td>\n' +
        '                    <td>Office Manager</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2008/12/11</td>\n' +
        '                    <td>$136,200</td>\n' +
        '                </tr>\n';

    snippets.bs4tablesamplerows50 = snippets.bs4tablesamplerows40 + '                <tr>\n' +
        '                    <td>Jackson Bradshaw</td>\n' +
        '                    <td>Director</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>65</td>\n' +
        '                    <td>2008/09/26</td>\n' +
        '                    <td>$645,750</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Olivia Liang</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2011/02/03</td>\n' +
        '                    <td>$234,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Bruno Nash</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>London</td>\n' +
        '                    <td>38</td>\n' +
        '                    <td>2011/05/03</td>\n' +
        '                    <td>$163,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Sakura Yamamoto</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>Tokyo</td>\n' +
        '                    <td>37</td>\n' +
        '                    <td>2009/08/19</td>\n' +
        '                    <td>$139,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Thor Walton</td>\n' +
        '                    <td>Developer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>61</td>\n' +
        '                    <td>2013/08/11</td>\n' +
        '                    <td>$98,540</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Finn Camacho</td>\n' +
        '                    <td>Support Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>47</td>\n' +
        '                    <td>2009/07/07</td>\n' +
        '                    <td>$87,500</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Serge Baldwin</td>\n' +
        '                    <td>Data Coordinator</td>\n' +
        '                    <td>Singapore</td>\n' +
        '                    <td>64</td>\n' +
        '                    <td>2012/04/09</td>\n' +
        '                    <td>$138,575</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zenaida Frank</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>New York</td>\n' +
        '                    <td>63</td>\n' +
        '                    <td>2010/01/04</td>\n' +
        '                    <td>$125,250</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Zorita Serrano</td>\n' +
        '                    <td>Software Engineer</td>\n' +
        '                    <td>San Francisco</td>\n' +
        '                    <td>56</td>\n' +
        '                    <td>2012/06/01</td>\n' +
        '                    <td>$115,000</td>\n' +
        '                </tr>\n' +
        '                <tr>\n' +
        '                    <td>Jennifer Acosta</td>\n' +
        '                    <td>Junior Javascript Developer</td>\n' +
        '                    <td>Edinburgh</td>\n' +
        '                    <td>43</td>\n' +
        '                    <td>2013/02/01</td>\n' +
        '                    <td>$75,650</td>\n' +
        '                </tr>\n';

    snippets.bs4datatablesampledata = '<table id="example" class="table table-striped" cellspacing="0" width="100%">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        ' \n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>Name</th>\n' +
        '                <th>Position</th>\n' +
        '                <th>Office</th>\n' +
        '                <th>Age</th>\n' +
        '                <th>Start date</th>\n' +
        '                <th>Salary</th>\n' +
        '            </tr>\n' +
        '        </tfoot>\n' +
        ' \n' +
        '        <tbody>\n' +
        snippets.bs4tablesamplerows50 +
        '        </tbody>\n' +
        '    </table>\n';

    module.exports = snippets;
});
