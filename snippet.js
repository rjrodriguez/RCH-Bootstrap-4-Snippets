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

    // Snippets!
    var snippets = {};
    
    //-------------------------
    // Utilities for templating
    //-------------------------
    
    var imgLand = 'https://via.placeholder.com/800x500';
    var imgSquare = 'https://via.placeholder.com/150';
    //var imgPort = 'https://via.placeholder.com/500x800';
    
    var dummy = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';
    
    var dummyLong = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS';

    
    //---------------------------------------------------
    // Bootstrap 4 - HTML5 Templates and Minimum Template
    //---------------------------------------------------
    
    // Variables for CDNs
    var csscdn = '\t<!-- Bootstrap CSS -->\n' +
        '\t<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n' +
        '\t<!-- Link to your css file -->\n' +
        '\t<link rel="stylesheet" href="">\n';
    var jscdn = '\t<!-- jQuery first, then Popper.js, then Bootstrap JS -->\n' +
        '\t<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>\n' +
        '\t<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>\n' +
        '\t<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>\n';

    // Variables for local assets
    var csslocal = '\t<link rel="stylesheet" href="css/bootstrap.min.css">\n' +
        '\t<!-- Link to your css file -->\n' +
        '\t<link rel="stylesheet" href="">\n';
    var jslocal = '\t<!-- do not forget download jquery (http://jquery.com/download/)-->\n' +
        '\t<script src="js/jquery-3.4.1.min.js"></script>\n' +
        '\t<!-- Bootstrap bundle for full components support -->\n' +
        '\t<script src="js/bootstrap.bundle.min.js"></script>\n';

    snippets.bs4 = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '\t<!-- Required meta tags -->\n' +
        '\t<meta charset="utf-8">\n' +
        '\t<meta name="description" content="">\n' +
        '\t<meta name="author" content="">\n' +
        '\t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\n' +
        '\t<title>Bootstrap 4 Minimal Template</title>\n\n' +
        '\t<link rel="shortcut icon" href="" type="image/x-icon">\n' +
        '\t<link rel="apple-touch-icon" href="">\n\n' +
        csslocal +
        '\n' +
        '</head>\n\n' +
        '<body>\n' +
        '\t<!-- Start coding here -->\n\n' +
        '\t<h1>Hello, world!</h1>\n\n' +
        '\t<!-- Coding End -->\n\n' +
        jslocal +
        '</body>\n</html>';

    snippets.bs4html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '\t<!-- Required meta tags -->\n' +
        '\t<meta charset="utf-8">\n' +
        '\t<meta name="description" content="">\n' +
        '\t<meta name="author" content="">\n' +
        '\t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n\n' +
        '\t<title>Bootstrap 4 Minimal Template</title>\n\n' +
        '\t<link rel="shortcut icon" href="" type="image/x-icon">\n' +
        '\t<link rel="apple-touch-icon" href="">\n\n' +
        csscdn +
        '\n' +
        '</head>\n\n' +
        '<body>\n' +
        '\t<!-- Start coding here -->\n\n' +
        '\t<h1>Hello, world!</h1>\n\n' +
        '\t<!-- Coding End -->\n\n' +
        jscdn +
        '</body>\n</html>';

    snippets.bs4template = snippets.bs4html;
    snippets.bs4html_local = snippets.bs4;
    
    //--------------------------------------------------------------
    // Alerts (https://getbootstrap.com/docs/4.1/components/alerts/)
    //--------------------------------------------------------------
    
    var alertbasiccontent = '\t\tA simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.\n\t';
    
    var alertdismissiblecontent = '\t\t<strong>Holy guacamole!</strong> You should check in on some of those fields below.\n\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close">\n\t\t\t<span aria-hidden="true">&times;</span>\n\t\t</button>\n';
    
    var alertboxcontent = '\t\t<h4 class="alert-heading">Well done!</h4>\n\t\t<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n\t\t<hr>\n\t\t<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n\t';
    
    snippets.bs4alertbasic = '<div class="alert alert-primary" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_danger = '<div class="alert alert-danger" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_dark = '<div class="alert alert-dark" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_info = '<div class="alert alert-info" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_light = '<div class="alert alert-light" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_secondary = '<div class="alert alert-secondary" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_success = '<div class="alert alert-success" role="alert">\n' + alertbasiccontent + '</div>';
    snippets.bs4alertbasic_warning = '<div class="alert alert-warning" role="alert">\n' + alertbasiccontent + '</div>';
    
    snippets.bs4alert = '<div class="alert alert-primary alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_danger = '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_dark = '<div class="alert alert-dark alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_info = '<div class="alert alert-info alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_light = '<div class="alert alert-light alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_secondary = '<div class="alert alert-secondary alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_success = '<div class="alert alert-success alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';
    snippets.bs4alert_warning = '<div class="alert alert-warning alert-dismissible fade show" role="alert">\n' + alertdismissiblecontent + '</div>';

    snippets.bs4alertbox = '<div class="alert alert-primary" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_danger = '<div class="alert alert-danger" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_dark = '<div class="alert alert-dark" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_info = '<div class="alert alert-info" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_light = '<div class="alert alert-light" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_secondary = '<div class="alert alert-secondary" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_success = '<div class="alert alert-success" role="alert">\n' + alertboxcontent + '</div>';
    snippets.bs4alertbox_warning = '<div class="alert alert-warning" role="alert">\n' + alertboxcontent + '</div>';
    
    //-------------------------------------------------------------
    // Badges (https://getbootstrap.com/docs/4.1/components/badge/)
    //-------------------------------------------------------------

    var badge = 'badge badge-primary';
    var badgeDanger = 'badge badge-danger';
    var badgeDark = 'badge badge-dark';
    var badgeInfo = 'badge badge-info';
    var badgeLight = 'badge badge-light';
    var badgeSecondary = 'badge badge-secondary';
    var badgeSuccess = 'badge badge-success';
    var badgeWarning = 'badge badge-warning';
    var pill = ' badge-pill';

    snippets.bs4badge = '<span class="' + badge + '">Primary</span>';
    snippets.bs4badge_danger = '<span class="' + badgeDanger + '">Danger</span>';
    snippets.bs4badge_dark = '<span class="' + badgeDark + '">Dark</span>';
    snippets.bs4badge_info = '<span class="' + badgeInfo + '">Info</span>';
    snippets.bs4badge_light = '<span class="' + badgeLight + '">Light</span>';
    snippets.bs4badge_secondary = '<span class="' + badgeSecondary + '">Secondary</span>';
    snippets.bs4badge_success = '<span class="' + badgeSuccess + '">Success</span>';
    snippets.bs4badge_warning = '<span class="' + badgeWarning + '">Warning</span>';

    snippets.bs4badgepill = '<span class="' + badge + pill + '">Pill Primary</span>';
    snippets.bs4badgepill_danger = '<span class="' + badgeDanger + pill + '">Pill Danger</span>';
    snippets.bs4badgepill_dark = '<span class="' + badgeDark + pill + '">Pill Dark</span>';
    snippets.bs4badgepill_info = '<span class="' + badgeInfo + pill + '">Pill Info</span>';
    snippets.bs4badgepill_light = '<span class="' + badgeLight + pill + '">Pill Light</span>';
    snippets.bs4badgepill_secondary = '<span class="' + badgeSecondary + pill + '">Pill Secondary</span>';
    snippets.bs4badgepill_success = '<span class="' + badgeSuccess + pill + '">Pill Success</span>';
    snippets.bs4badgepill_warning = '<span class="' + badgeWarning + pill + '">Pill Warning</span>';

    snippets.bs4badgelink = '<a href="#" class="' + badge + '">Badge link Primary</a>';
    snippets.bs4badgelink_danger = '<a href="#" class="' + badgeDanger + '">Badge link Danger</a>';
    snippets.bs4badgelink_dark = '<a href="#" class="' + badgeDark + '">Badge link Dark</a>';
    snippets.bs4badgelink_info = '<a href="#" class="' + badgeInfo + '">Badge link Info</a>';
    snippets.bs4badgelink_light = '<a href="#" class="' + badgeLight + '">Badge link Light</a>';
    snippets.bs4badgelink_secondary = '<a href="#" class="' + badgeSecondary + '">Badge link Secondary</a>';
    snippets.bs4badgelink_success = '<a href="#" class="' + badgeSuccess + '">Badge link Success</a>';
    snippets.bs4badgelink_warning = '<a href="#" class="' + badgeWarning + '">Badge link Warning</a>';
    
    //-----------------------------------------------------------------------
    // Breadcrumbs (https://getbootstrap.com/docs/4.1/components/breadcrumb/)
    //-----------------------------------------------------------------------

    snippets.bs4breadcrumbs = '<nav aria-label="breadcrumb" role="navigation">\n\t\t<ol class="breadcrumb">\n\t\t\t<li class="breadcrumb-item"><a href="#">1st level</a></li>\n\t\t\t<li class="breadcrumb-item"><a href="#">2nd level</a></li>\n\t\t\t<li class="breadcrumb-item active">3rd level</li>\n\t\t</ol>\n\t</nav>';
    
    //----------------------------------------------------------------
    // Buttons (https://getbootstrap.com/docs/4.1/components/buttons/)
    //----------------------------------------------------------------

    // variables for btns styles
    var btnPrimary = 'btn btn-primary';
    var btnDanger = 'btn btn-danger';
    var btnDark = 'btn btn-dark';
    var btnInfo = 'btn btn-info';
    var btnLight = 'btn btn-light';
    var btnLink = 'btn btn-link';
    var btnSecondary = 'btn btn-secondary';
    var btnSuccess = 'btn btn-success';
    var btnWarning = 'btn btn-warning';
    var btnOPrimary = 'btn btn-outline-primary';
    var btnODanger = 'btn btn-outline-danger';
    var btnODark = 'btn btn-outline-dark';
    var btnOInfo = 'btn btn-outline-info';
    var btnOLight = 'btn btn-outline-light';
    var btnOLink = 'btn btn-outline-link';
    var btnOSecondary = 'btn btn-outline-secondary';
    var btnOSuccess = 'btn btn-outline-success';
    var btnOWarning = 'btn btn-outline-warning';
    
    // variables for sizes and displays
    var block = ' btn-block';
    var sm = ' btn-sm';
    var lg = ' btn-lg';
    
    // Link buttons
    snippets.bs4abtn = '<a class="' + btnPrimary + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_danger = '<a class="' + btnDanger + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_dark = '<a class="' + btnDark + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_info = '<a class="' + btnInfo + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_light = '<a class="' + btnLight + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_link = '<a class="' + btnLink + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_secondary = '<a class="' + btnSecondary + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_success = '<a class="' + btnSuccess + '" href="#" role="button">Link button</a>';
    snippets.bs4abtn_warning = '<a class="' + btnWarning + '" href="#" role="button">Link button</a>';
    
    // Small link buttons
    snippets.bs4abtnsm = '<a class="' + btnPrimary + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_danger = '<a class="' + btnDanger + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_dark = '<a class="' + btnDark + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_info = '<a class="' + btnInfo + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_light = '<a class="' + btnLight + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_link = '<a class="' + btnLink + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_secondary = '<a class="' + btnSecondary + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_success = '<a class="' + btnSuccess + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnsm_warning = '<a class="' + btnWarning + sm + '" href="#" role="button">Small link button</a>';

    // Large link buttons
    snippets.bs4abtnlg = '<a class="' + btnPrimary + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_danger = '<a class="' + btnDanger + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_dark = '<a class="' + btnDark + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_info = '<a class="' + btnInfo + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_light = '<a class="' + btnLight + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_link = '<a class="' + btnLink + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_secondary = '<a class="' + btnSecondary + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_success = '<a class="' + btnSuccess + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnlg_warning = '<a class="' + btnWarning + lg + '" href="#" role="button">Large link button</a>';

    // Block link buttons
    snippets.bs4abtnblock = '<a class="' + btnPrimary + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_danger = '<a class="' + btnDanger + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_dark = '<a class="' + btnDark + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_info = '<a class="' + btnInfo + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_light = '<a class="' + btnLight + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_link = '<a class="' + btnLink + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_secondary = '<a class="' + btnSecondary + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_success = '<a class="' + btnSuccess + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnblock_warning = '<a class="' + btnWarning + block + '" href="#" role="button">Block link button</a>';

    // Outlined link buttons
    snippets.bs4abtnol = '<a class="' + btnOPrimary + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_danger = '<a class="' + btnODanger + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_dark = '<a class="' + btnODark + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_info = '<a class="' + btnOInfo + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_light = '<a class="' + btnOLight + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_link = '<a class="' + btnOLink + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_secondary = '<a class="' + btnOSecondary + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_success = '<a class="' + btnOSuccess + '" href="#" role="button">Link button</a>';
    snippets.bs4abtnol_warning = '<a class="' + btnOWarning + '" href="#" role="button">Link button</a>';

    snippets.bs4abtnolsm = '<a class="' + btnOPrimary + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_danger = '<a class="' + btnODanger + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_dark = '<a class="' + btnODark + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_info = '<a class="' + btnOInfo + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_light = '<a class="' + btnOLight + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_link = '<a class="' + btnOLink + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_secondary = '<a class="' + btnOSecondary + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_success = '<a class="' + btnOSuccess + sm + '" href="#" role="button">Small link button</a>';
    snippets.bs4abtnolsm_warning = '<a class="' + btnOWarning + sm + '" href="#" role="button">Small link button</a>';

    snippets.bs4abtnollg = '<a class="' + btnOPrimary + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_danger = '<a class="' + btnODanger + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_dark = '<a class="' + btnODark + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_info = '<a class="' + btnOInfo + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_light = '<a class="' + btnOLight + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_link = '<a class="' + btnOLink + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_secondary = '<a class="' + btnOSecondary + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_success = '<a class="' + btnOSuccess + lg + '" href="#" role="button">Large link button</a>';
    snippets.bs4abtnollg_warning = '<a class="' + btnOWarning + lg + '" href="#" role="button">Large link button</a>';

    snippets.bs4abtnolblock = '<a class="' + btnOPrimary + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_danger = '<a class="' + btnODanger + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_dark = '<a class="' + btnODark + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_info = '<a class="' + btnOInfo + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_light = '<a class="' + btnOLight + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_link = '<a class="' + btnOLink + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_secondary = '<a class="' + btnOSecondary + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_success = '<a class="' + btnOSuccess + block + '" href="#" role="button">Block link button</a>';
    snippets.bs4abtnolblock_warning = '<a class="' + btnOWarning + block + '" href="#" role="button">Block link button</a>';

    // Buttons
    snippets.bs4btn = '<button type="button" class="' + btnPrimary + '">button</button>';
    snippets.bs4btn_secondary = '<button type="button" class="' + btnSecondary + '">button</button>';
    snippets.bs4btn_success = '<button type="button" class="' + btnSuccess + '">button</button>';
    snippets.bs4btn_danger = '<button type="button" class="' + btnDanger + '">button</button>';
    snippets.bs4btn_warning = '<button type="button" class="' + btnWarning + '">button</button>';
    snippets.bs4btn_info = '<button type="button" class="' + btnInfo + '">button</button>';
    snippets.bs4btn_light = '<button type="button" class="' + btnLight + '">button</button>';
    snippets.bs4btn_dark = '<button type="button" class="' + btnDark + '">button</button>';
    snippets.bs4btn_link = '<button type="button" class="' + btnLink + '">button</button>';

    snippets.bs4btnsm = '<button type="button" class="' + btnPrimary + sm + '">Small button</button>';
    snippets.bs4btnsm_secondary = '<button type="button" class="' + btnSecondary + sm + '">Small button</button>';
    snippets.bs4btnsm_success = '<button type="button" class="' + btnSuccess + sm + '">Small button</button>';
    snippets.bs4btnsm_danger = '<button type="button" class="' + btnDanger + sm + '">Small button</button>';
    snippets.bs4btnsm_warning = '<button type="button" class="' + btnWarning + sm + '">Small button</button>';
    snippets.bs4btnsm_info = '<button type="button" class="' + btnInfo + sm + '">Small button</button>';
    snippets.bs4btnsm_light = '<button type="button" class="' + btnLight + sm + '">Small button</button>';
    snippets.bs4btnsm_dark = '<button type="button" class="' + btnDark + sm + '">Small button</button>';
    snippets.bs4btnsm_link = '<button type="button" class="' + btnLink + sm + '">Small button</button>';

    snippets.bs4btnlg = '<button type="button" class="' + btnPrimary + lg + '">Large button</button>';
    snippets.bs4btnlg_secondary = '<button type="button" class="' + btnSecondary + lg + '">Large button</button>';
    snippets.bs4btnlg_success = '<button type="button" class="' + btnSuccess + lg + '">Large button</button>';
    snippets.bs4btnlg_danger = '<button type="button" class="' + btnDanger + lg + '">Large button</button>';
    snippets.bs4btnlg_warning = '<button type="button" class="' + btnWarning + lg + '">Large button</button>';
    snippets.bs4btnlg_info = '<button type="button" class="' + btnInfo + lg + '">Large button</button>';
    snippets.bs4btnlg_light = '<button type="button" class="' + btnLight + lg + '">Large button</button>';
    snippets.bs4btnlg_dark = '<button type="button" class="' + btnDark + lg + '">Large button</button>';
    snippets.bs4btnlg_link = '<button type="button" class="' + btnLink + lg + '">Large button</button>';

    snippets.bs4btnblock = '<button type="button" class="' + btnPrimary + block + '">Block button</button>';
    snippets.bs4btnblock_secondary = '<button type="button" class="' + btnSecondary + block + '">Block button</button>';
    snippets.bs4btnblock_success = '<button type="button" class="' + btnSuccess + block + '">Block button</button>';
    snippets.bs4btnblock_danger = '<button type="button" class="' + btnDanger + block + '">Block button</button>';
    snippets.bs4btnblock_warning = '<button type="button" class="' + btnWarning + block + '">Block button</button>';
    snippets.bs4btnblock_info = '<button type="button" class="' + btnInfo + block + '">Block button</button>';
    snippets.bs4btnblock_light = '<button type="button" class="' + btnLight + block + '">Block button</button>';
    snippets.bs4btnblock_dark = '<button type="button" class="' + btnDark + block + '">Block button</button>';
    snippets.bs4btnblock_link = '<button type="button" class="' + btnLink + block + '">Block button</button>';

    // Outlined buttons
    snippets.bs4btnol = '<button type="button" class="' + btnOPrimary + '">button</button>';
    snippets.bs4btnol_secondary = '<button type="button" class="' + btnOSecondary + '">button</button>';
    snippets.bs4btnol_success = '<button type="button" class="' + btnOSuccess + '">button</button>';
    snippets.bs4btnol_danger = '<button type="button" class="' + btnODanger + '">button</button>';
    snippets.bs4btnol_warning = '<button type="button" class="' + btnOWarning + '">button</button>';
    snippets.bs4btnol_info = '<button type="button" class="' + btnOInfo + '">button</button>';
    snippets.bs4btnol_light = '<button type="button" class="' + btnOLight + '">button</button>';
    snippets.bs4btnol_dark = '<button type="button" class="' + btnODark + '">button</button>';
    snippets.bs4btnol_link = '<button type="button" class="' + btnOLink + '">button</button>';

    snippets.bs4btnolsm = '<button type="button" class="' + btnOPrimary + sm + '">Small button</button>';
    snippets.bs4btnolsm_secondary = '<button type="button" class="' + btnOSecondary + sm + '">Small button</button>';
    snippets.bs4btnolsm_success = '<button type="button" class="' + btnOSuccess + sm + '">Small button</button>';
    snippets.bs4btnolsm_danger = '<button type="button" class="' + btnODanger + sm + '">Small button</button>';
    snippets.bs4btnolsm_warning = '<button type="button" class="' + btnOWarning + sm + '">Small button</button>';
    snippets.bs4btnolsm_info = '<button type="button" class="' + btnOInfo + sm + '">Small button</button>';
    snippets.bs4btnolsm_light = '<button type="button" class="' + btnOLight + sm + '">Small button</button>';
    snippets.bs4btnolsm_dark = '<button type="button" class="' + btnODark + sm + '">Small button</button>';
    snippets.bs4btnolsm_link = '<button type="button" class="' + btnOLink + sm + '">Small button</button>';

    snippets.bs4btnollg = '<button type="button" class="' + btnOPrimary + lg + '">Large button</button>';
    snippets.bs4btnollg_secondary = '<button type="button" class="' + btnOSecondary + lg + '">Large button</button>';
    snippets.bs4btnollg_success = '<button type="button" class="' + btnOSuccess + lg + '">Large button</button>';
    snippets.bs4btnollg_danger = '<button type="button" class="' + btnODanger + lg + '">Large button</button>';
    snippets.bs4btnollg_warning = '<button type="button" class="' + btnOWarning + lg + '">Large button</button>';
    snippets.bs4btnollg_info = '<button type="button" class="' + btnOInfo + lg + '">Large button</button>';
    snippets.bs4btnollg_light = '<button type="button" class="' + btnOLight + lg + '">Large button</button>';
    snippets.bs4btnollg_dark = '<button type="button" class="' + btnODark + lg + '">Large button</button>';
    snippets.bs4btnollg_link = '<button type="button" class="' + btnOLink + lg + '">Large button</button>';

    snippets.bs4btnolblock = '<button type="button" class="' + btnOPrimary + block + '">Block button</button>';
    snippets.bs4btnolblock_secondary = '<button type="button" class="' + btnOSecondary + block + '">Block button</button>';
    snippets.bs4btnolblock_success = '<button type="button" class="' + btnOSuccess + block + '">Block button</button>';
    snippets.bs4btnolblock_danger = '<button type="button" class="' + btnODanger + block + '">Block button</button>';
    snippets.bs4btnolblock_warning = '<button type="button" class="' + btnOWarning + block + '">Block button</button>';
    snippets.bs4btnolblock_info = '<button type="button" class="' + btnOInfo + block + '">Block button</button>';
    snippets.bs4btnolblock_light = '<button type="button" class="' + btnOLight + block + '">Block button</button>';
    snippets.bs4btnolblock_dark = '<button type="button" class="' + btnODark + block + '">Block button</button>';
    snippets.bs4btnolblock_link = '<button type="button" class="' + btnOLink + block + '">Block button</button>';

    //--------------------------------------------------------------------------
    // Button Group (https://getbootstrap.com/docs/4.1/components/button-group/)
    //--------------------------------------------------------------------------

    var btnsimplegroupcontent = '\t\t<button type="button" class="btn btn-secondary">Left</button>\n\t\t<button type="button" class="btn btn-secondary">Middle</button>\n\t\t<button type="button" class="btn btn-secondary">Right</button>\n\t';
    
    snippets.bs4btngroup = '<div class="btn-group" role="group" aria-label="Basic example">\n' + btnsimplegroupcontent + '</div>';
    snippets.bs4btngrouplg = '<div class="btn-group btn-group-lg" role="group" aria-label="Basic example">\n' + btnsimplegroupcontent + '</div>';
    snippets.bs4btngroupsm = '<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n' + btnsimplegroupcontent + '</div>';

    snippets.bs4btngroup_bar = '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\n\t\t<div class="btn-group mr-2" role="group" aria-label="First group">\n\t\t\t<button type="button" class="btn btn-secondary">1</button>\n\t\t\t<button type="button" class="btn btn-secondary">2</button>\n\t\t\t<button type="button" class="btn btn-secondary">3</button>\n\t\t\t<button type="button" class="btn btn-secondary">4</button>\n\t\t</div>\n\t\t<div class="btn-group mr-2" role="group" aria-label="Second group">\n\t\t\t<button type="button" class="btn btn-secondary">5</button>\n\t\t\t<button type="button" class="btn btn-secondary">6</button>\n\t\t\t<button type="button" class="btn btn-secondary">7</button>\n\t\t</div>\n\t\t<div class="btn-group" role="group" aria-label="Third group">\n\t\t\t<button type="button" class="btn btn-secondary">8</button>\n\t\t</div>\n\t</div>';

    snippets.bs4btngroup_nested = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">\n\t\t<button type="button" class="btn btn-secondary">1</button>\n\t\t<button type="button" class="btn btn-secondary">2</button>\n\t\t<div class="btn-group" role="group">\n\t\t\t<button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>\n\t\t\t<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">\n\t\t\t\t<a class="dropdown-item" href="#">Dropdown link</a>\n\t\t\t\t<a class="dropdown-item" href="#">Dropdown link</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>';

    snippets.bs4btngroup_vertical = '<div class="btn-group-vertical" role="group" aria-label="Basic example">\n\t\t<button type="button" class="btn btn-secondary">Link 1</button>\n\t\t<button type="button" class="btn btn-secondary">Link 2</button>\n\t\t<button type="button" class="btn btn-secondary">Link 3</button>\n\t</div>';
    
    // Cards
    // https://getbootstrap.com/docs/4.0/components/card/

    snippets.bs4card = '<div class="card">\n\t\t<img class="card-img-top" src="' + imgLand + '" alt="Card image">\n\t\t<div class="card-body">\n\t\t\t<h4 class="card-title">Card title</h4>\n\t\t\t<p class="card-text">Some quick example text to build on the card title and content.</p>\n\t\t\t' + snippets.bs4abtn + '\n\t\t</div>\n\t</div>';

    snippets.bs4cardfull = '<div class="card">\n' +
        '       <img class="card-img-top" src="" alt="Card image">\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Card title</h4>\n' +
        '           <p class="card-text">Some quick example text to build on the card title and content.</p>\n' +
        '       </div>\n' +
        '       <ul class="list-group list-group-flush">\n' +
        '           <li class="list-group-item">Cras justo odio</li>\n' +
        '           <li class="list-group-item">Dapibus ac facilisis in</li>\n' +
        '           <li class="list-group-item">Vestibulum at eros</li>\n' +
        '       </ul>\n' +
        '       <div class="card-body">\n' +
        '           <a href="#" class="card-link">Card link</a>\n' +
        '           <a href="#" class="card-link">Another link</a>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardtext = '<div class="card">\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Card title</h4>\n' +
        '           <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>\n' +
        '           <p class="card-text">Some quick example text to build on the card title and content.</p>\n' +
        '           <a href="#" class="card-link">Card link</a>\n' +
        '           <a href="#" class="card-link">Another link</a>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardimage = '<div class="card mb-3">\n' +
        '       <img class="card-img-top" src="" alt="Card image cap">\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Card title</h4>\n' +
        '           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardimage_bottom = '<div class="card">\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Card title</h4>\n' +
        '           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '       </div>\n' +
        '       <img class="card-img-bottom" src="" alt="Card image cap">\n' +
        '   </div>';


    snippets.bs4cardimage_overlay = '<div class="card bg-dark text-white">\n' +
        '       <img class="card-img" src="" alt="Card image">\n' +
        '       <div class="card-img-overlay">\n' +
        '           <h4 class="card-title">Card title</h4>\n' +
        '           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '           <p class="card-text">Last updated 3 mins ago</p>\n' +
        '       </div>\n' +
        '   </div>';

    // Card panels
    snippets.bs4cardpanel = '<div class="card">\n' +
        '   <div class="card-header">Featured</div>\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Special title treatment</h4>\n' +
        '           <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
        '           <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardpanel_minimal = '<div class="card card-body">\n' +
        '       With supporting text below as a natural lead-in to additional content.\n' +
        '   </div>';

    snippets.bs4cardquote = '<div class="card">\n' +
        '   <div class="card-header">Quote</div>\n' +
        '       <div class="card-body">\n' +
        '           <blockquote class="blockquote mb-0">\n' +
        '               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
        '               <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n' +
        '           </blockquote>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardfeatured = '<div class="card text-center">\n' +
        '   <div class="card-header">Featured</div>\n' +
        '       <div class="card-body">\n' +
        '           <h4 class="card-title">Special title treatment</h4>\n' +
        '           <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
        '           <a href="#" class="btn btn-primary">Go somewhere</a>\n' +
        '       </div>\n' +
        '       <div class="card-footer text-muted">2 days ago</div>\n' +
        '   </div>';

    // Cards Layouts
    snippets.bs4cardgroup = '   <div class="card-group">\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardgroup_footer = '   <div class="card-group">\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4carddeck = '   <div class="card-deck">\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4carddeck_footer = '   <div class="card-deck">\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '           <div class="card-footer">\n' +
        '               <small class="text-muted">Last updated 3 mins ago</small>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4cardcolumns = ' <div class="card-columns">\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title that wraps to a new line</h4>\n' +
        '               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card p-3">\n' +
        '           <blockquote class="blockquote mb-0 card-body">\n' +
        '               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
        '               <footer class="blockquote-footer">\n' +
        '                   <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>\n' +
        '               </footer>\n' +
        '           </blockquote>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img-top" src="" alt="Card image cap">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card bg-primary text-white text-center p-3">\n' +
        '           <blockquote class="blockquote mb-0">\n' +
        '               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n' +
        '               <footer class="blockquote-footer">\n' +
        '                   <small class="text-white"> Someone famous in <cite title="Source Title">Source Title</cite></small>\n' +
        '               </footer>\n' +
        '           </blockquote>\n' +
        '       </div>\n' +
        '       <div class="card text-center">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <img class="card-img" src="" alt="Card image">\n' +
        '       </div>\n' +
        '       <div class="card p-3 text-right">\n' +
        '           <blockquote class="blockquote mb-0">\n' +
        '               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
        '               <footer class="blockquote-footer">\n' +
        '                   <small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>\n' +
        '               </footer>\n' +
        '           </blockquote>\n' +
        '       </div>\n' +
        '       <div class="card">\n' +
        '           <div class="card-body">\n' +
        '               <h4 class="card-title">Card title</h4>\n' +
        '               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n' +
        '               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';
    
    //------------------------------------------------------------------
    // Carousel (https://getbootstrap.com/docs/4.1/components/carousel/)
    //------------------------------------------------------------------
    
    var carouselcaption = '<div class="carousel-caption d-none d-md-block">\n\t\t\t\t\t<h5>Caption Title</h5>\n\t\t\t\t\t<p>Caption text</p>\n\t\t\t\t</div>';
    
    var carousel3slides = '\t\t<div class="carousel-inner">\n\t\t\t<div class="carousel-item active">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="First slide">\n\t\t\t</div>\n\t\t\t<div class="carousel-item">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="Second slide">\n\t\t\t</div>\n\t\t\t<div class="carousel-item">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="Third slide">\n\t\t\t</div>\n\t\t</div>\n';
    
    var carousel3slidescaptioned = '\t\t<div class="carousel-inner">\n\t\t\t<div class="carousel-item active">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="First slide">\n\t\t\t\t' + carouselcaption + '\n\t\t\t</div>\n\t\t\t<div class="carousel-item">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="Second slide">\n\t\t\t\t' + carouselcaption + '\n\t\t\t</div>\n\t\t\t<div class="carousel-item">\n\t\t\t\t<img class="d-block w-100" src="' + imgLand + '" alt="Third slide">\n\t\t\t\t' + carouselcaption + '\n\t\t\t</div>\n\t\t</div>\n';

    var carouselcontrols = '<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">\n\t\t\t<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n\t\t\t<span class="sr-only">Previous</span>\n\t\t</a>\n\t\t<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">\n\t\t\t<span class="carousel-control-next-icon" aria-hidden="true"></span>\n\t\t\t<span class="sr-only">Next</span>\n\t\t</a>\n';
    
    var carouselindicators = '<ol class="carousel-indicators">\n\t\t\t<li data-target="#carousel" data-slide-to="0" class="active"></li>\n\t\t\t<li data-target="#carousel" data-slide-to="1"></li>\n\t\t\t<li data-target="#carousel" data-slide-to="2"></li>\n\t\t</ol>\n';

    snippets.bs4carousel = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' + carousel3slides + '\t</div>';
    
    snippets.bs4carousel_fade = '<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">\n' + carousel3slides + '\t</div>';
    
    snippets.bs4carouselwcaptions = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' + carousel3slidescaptioned + '\t</div>';
    
    snippets.bs4carouselwcaptions_fade = '<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">\n' + carousel3slidescaptioned + '\t</div>';

    snippets.bs4carouselwcontrols = '<div id="carousel" class="carousel slide" data-ride="carousel">\n' + carousel3slides + '\t\t' + carouselcontrols + '\t</div>';
    
    snippets.bs4carouselwcontrols_fade = '<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">\n' + carousel3slides + '\t\t' + carouselcontrols + '\t</div>';
    
    snippets.bs4carouselwindicators = '<div id="carousel" class="carousel slide" data-ride="carousel">\n\t\t'  + carouselindicators + carousel3slides + '\t</div>';
    
    snippets.bs4carouselwindicators_fade = '<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">\n\t\t'  + carouselindicators + carousel3slides + '\t</div>';
    
    snippets.bs4carouselfull = '<div id="carousel" class="carousel slide" data-ride="carousel">\n\t\t' + carouselindicators + carousel3slidescaptioned + '\t\t' + carouselcontrols + '\t</div>';
     
    snippets.bs4carouselfull_fade = '<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">\n\t\t' + carouselindicators + carousel3slidescaptioned + '\t\t' + carouselcontrols + '\t</div>';

    //-------------------------------------------------------------------------------
    // CDN (https://getbootstrap.com/docs/4.1/getting-started/download/#bootstrapcdn)
    //-------------------------------------------------------------------------------

    snippets.bs4cdnjs = jscdn;
    snippets.bs4cdncss = csscdn;

    //---------------------------------------------------------------------------------
    // Collapse and accordions (https://getbootstrap.com/docs/4.1/components/collapse/)
    //---------------------------------------------------------------------------------
    
    var collapsecontent = '\t<div class="collapse" id="collapseExample">\n\t\t<div class="card card-body">' + dummy + '</div>\n\t</div>';
    
    snippets.bs4collapse_link = '<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Link with href</a>\n' + collapsecontent;

    snippets.bs4collapse_btn = '<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-target</button>\n' + collapsecontent;
    
    snippets.bs4collapse_panel = '<div class="card">\n\t\t<div class="card-header">\n\t\t\t<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsePanel">Collapsible Panel</button>\n\t\t</div>\n\t\t<div id="collapsePanel" class="collapse">\n\t\t\t<div class="card-body">' + dummyLong + '.</div>\n\t\t</div>\n\t</div>';

    snippets.bs4accordion = '<div id="accordion" role="tablist">\n\t\t<div class="card">\n\t\t\t<div class="card-header" role="tab" id="headingOne">\n\t\t\t\t<a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</a>\n\t\t\t</div>\n\t\t\t<!-- Add .show class to this item to make it visible on page load -->\n\t\t\t<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">\n\t\t\t\t<div class="card-body">' + dummyLong + '</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="card">\n\t\t\t<div class="card-header" role="tab" id="headingTwo">\n\t\t\t\t<a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #2</a>\n\t\t\t</div>\n\t\t\t<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">\n\t\t\t\t<div class="card-body">' + dummyLong + '</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="card">\n\t\t\t<div class="card-header" role="tab" id="headingThree">\n\t\t\t\t<a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #3</a>\n\t\t\t</div>\n\t\t\t<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">\n\t\t\t\t<div class="card-body">' + dummyLong + '</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
    
    snippets.bs4accordion_minimal = '<div id="accordion" role="tablist">\n\t\t<a class="d-block border" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</a>\n\t\t<!-- Add .show class to this item to make it visible on page load -->\n\t\t<div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">\n\t\t\t' + dummyLong + '\n\t\t</div>\n\t\t<a class="collapsed d-block border" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #2</a>\n\t\t<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">\n\t\t\t' + dummyLong + '\n\t\t</div>\n\t\t<a class="collapsed d-block border" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #3</a>\n\t\t<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">\n\t\t\t' + dummyLong + '\n\t\t</div>\n\t</div>\n';

    //------------------------------------------------------------
    // Embeds (https://getbootstrap.com/docs/4.1/utilities/embed/)
    //------------------------------------------------------------

    snippets.bs4embed = '<div class="embed-responsive embed-responsive-1by1">\n\t\t<iframe class="embed-responsive-item" src=""></iframe>\n\t</div>';
    snippets.bs4embed_4x3 = '<div class="embed-responsive embed-responsive-4by3">\n\t\t<iframe class="embed-responsive-item" src=""></iframe>\n\t</div>';
    snippets.bs4embed_16x9 = '<div class="embed-responsive embed-responsive-16by9">\n\t\t<iframe class="embed-responsive-item" src=""></iframe>\n\t</div>';
    snippets.bs4embed_21x9 = '<div class="embed-responsive embed-responsive-21by9">\n\t\t<iframe class="embed-responsive-item" src=""></iframe>\n\t</div>';
    
    //------------------------------------------------------------------------
    // Images and Pictures (https://getbootstrap.com/docs/4.1/content/images/)
    //------------------------------------------------------------------------

    snippets.bs4image = '<img class="img-fluid" src="' + imgLand + '" alt="image">';
    snippets.bs4image_rounded = '<img class="img-fluid rounded" src="' + imgLand + '" alt="image">';
    snippets.bs4image_circle = '<img class="img-fluid rounded-circle" src="' + imgSquare + '" alt="image">';
    snippets.bs4imagethumbnail = '<img class="img-fluid img-thumbnail" src="' + imgLand + '" alt="image">';
    snippets.bs4imagethumbnail_rounded = '<img class="img-fluid rounded img-thumbnail" src="' + imgLand + '" alt="image">';
    snippets.bs4imagethumbnail_circle = '<img class="img-fluid rounded-circle img-thumbnail" src="' + imgSquare + '" alt="image">';
    snippets.bs4image_picture = '<picture>\n\t\t<!-- Extra Large Desktops -->\n\t\t<source media="(min-width: 1200px)" srcset="' + imgLand + '">\n\t\t<!-- Desktops -->\n\t\t<source media="(min-width: 992px)" srcset="' + imgLand + '">\n\t\t<!-- Tablets -->\n\t\t<source media="(min-width: 768px)" srcset="' + imgLand + '">\n\t\t<!-- Landscape Phones -->\n\t\t<source media="(min-width: 576px)" srcset="' + imgLand + '">\n\t\t<!-- Portrait Phones -->\n\t\t<img src="' + imgLand + '" class="img-fluid">\n\t</picture>\n';
    
    //-------------------------------------------------------------
    // Figures (https://getbootstrap.com/docs/4.1/content/figures/)
    //-------------------------------------------------------------
    
    snippets.bs4figure = '<figure class="figure">\n\t\t' + snippets.bs4image_rounded  + '\n\t\t<figcaption class="figure-caption">A caption for the above image.</figcaption>\n\t</figure>\n';
    
    //--------------------------------------------------------------------
    // Form controls (https://getbootstrap.com/docs/4.0/components/forms/)
    //--------------------------------------------------------------------

    snippets.bs4formcontrol_input = '<div class="form-group">\n' +
        '       <label for="exampleFormControlInput1">Name</label>\n' +
        '       <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">\n' +
        '   </div>\n';

    snippets.bs4formcontrol_password = '<div class="form-group">\n' +
        '       <label for="exampleInputPassword1">Password</label>\n' +
        '       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
        '   </div>\n';

    snippets.bs4formcontrol_email = '<div class="form-group">\n' +
        '       <label for="exampleFormControlInput2">Email address</label>\n' +
        '       <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">\n' +
        '   </div>\n';

    snippets.bs4formcontrol_readonly = '<div class="form-group">\n' +
        '       <label for="exampleFormControlInput3">Read only</label>\n' +
        '       <input class="form-control" type="text" id="exampleFormControlInput3" placeholder="Readonly input here…" readonly>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_select = '<div class="form-group">\n' +
        '       <label for="exampleFormControlSelect1">Example select</label>\n' +
        '       <select class="form-control" id="exampleFormControlSelect1">\n' +
        '           <option>1</option>\n' +
        '           <option>2</option>\n' +
        '           <option>3</option>\n' +
        '           <option>4</option>\n' +
        '           <option>5</option>\n' +
        '       </select>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_selectmultiple = '<div class="form-group">\n' +
        '       <label for="exampleFormControlSelect1">Example multiple select</label>\n' +
        '       <select multiple class="form-control" id="exampleFormControlSelect1">\n' +
        '           <option>1</option>\n' +
        '           <option>2</option>\n' +
        '           <option>3</option>\n' +
        '           <option>4</option>\n' +
        '           <option>5</option>\n' +
        '       </select>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_textarea = '<div class="form-group">\n' +
        '       <label for="exampleFormControlTextarea1">Example textarea</label>\n' +
        '       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_file = '<div class="form-group">\n' +
        '       <label for="exampleFormControlFile1">Example file input</label>\n' +
        '       <input type="file" class="form-control-file" id="exampleFormControlFile1">\n' +
        '   </div>\n';

    snippets.bs4formcontrol_checkbox = '<div class="form-check">\n' +
        '       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n' +
        '       <label class="form-check-label" for="defaultCheck1">Default checkbox</label>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_checkbox_group = '<div class="form-check">\n' +
        '       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">\n' +
        '       <label class="form-check-label" for="defaultCheck1">Default checkbox</label>\n' +
        '   </div>\n' +
        '   <div class="form-check">\n' +
        '       <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">\n' +
        '       <label class="form-check-label" for="defaultCheck2">Default checkbox</label>\n' +
        '   </div>\n' +
        '   <div class="form-check">\n' +
        '       <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" disabled>\n' +
        '       <label class="form-check-label" for="defaultCheck3">Disabled checkbox</label>\n' +
        '</div>\n';

    snippets.bs4formcontrol_radio = '<div class="form-check">\n' +
        '       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>\n' +
        '       <label class="form-check-label" for="exampleRadios1">Default radio</label>\n' +
        '   </div>\n';

    snippets.bs4formcontrol_radio_group = '<div class="form-check">\n' +
        '       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>\n' +
        '       <label class="form-check-label" for="exampleRadios1">Default radio</label>\n' +
        '   </div>\n' +
        '   <div class="form-check">\n' +
        '       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">\n' +
        '       <label class="form-check-label" for="exampleRadios2">Second default radio</label>\n' +
        '   </div>\n' +
        '   <div class="form-check disabled">\n' +
        '       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>\n' +
        '       <label class="form-check-label" for="exampleRadios3">Disabled radio</label>\n' +
        '   </div>\n';

    // Forms

    snippets.bs4form_contact = '<form action="" method="post" enctype="multipart/form-data">\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleFormControlInput1">Name</label>\n' +
        '           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleInputEmail1">Email address</label>\n' +
        '           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleFormControlTextarea1">Message</label>\n' +
        '           <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n' +
        '       </div>\n' +
        '       <button type="submit" class="btn btn-primary">Submit</button>\n' +
        '   </form>\n';

    snippets.bs4form_suscribe_inline = '<form class="form-inline" action="" method="post" enctype="multipart/form-data">\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleFormControlInput1">Name</label>\n' +
        '           <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleInputEmail1">Email address</label>\n' +
        '           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n' +
        '       </div>\n' +
        '       <button type="submit" class="btn btn-primary">Submit</button>\n' +
        '   </form>\n';

    snippets.bs4form_login = '<form action="" method="post" enctype="multipart/form-data">\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleInputEmail1">Email address</label>\n' +
        '           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n' +
        '           <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="exampleInputPassword1">Password</label>\n' +
        '           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
        '       </div>\n' +
        '       <div class="form-check">\n' +
        '           <input type="checkbox" class="form-check-input" id="exampleCheck1">\n' +
        '           <label class="form-check-label" for="exampleCheck1">Check me out</label>\n' +
        '       </div>\n' +
        '       <button type="submit" class="btn btn-primary">Submit</button>\n' +
        '   </form>\n';

    snippets.bs4form_full = '<form action="" method="post" enctype="multipart/form-data">\n' +
        '       <div class="form-row">\n' +
        '           <div class="form-group col-md-6">\n' +
        '               <label for="inputEmail4">Email</label>\n' +
        '               <input type="email" class="form-control" id="inputEmail4" placeholder="Email">\n' +
        '           </div>\n' +
        '           <div class="form-group col-md-6">\n' +
        '               <label for="inputPassword4">Password</label>\n' +
        '               <input type="password" class="form-control" id="inputPassword4" placeholder="Password">\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="inputAddress">Address</label>\n' +
        '           <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <label for="inputAddress2">Address 2</label>\n' +
        '           <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">\n' +
        '       </div>\n' +
        '       <div class="form-row">\n' +
        '           <div class="form-group col-md-6">\n' +
        '               <label for="inputCity">City</label>\n' +
        '               <input type="text" class="form-control" id="inputCity">\n' +
        '           </div>\n' +
        '           <div class="form-group col-md-4">\n' +
        '               <label for="inputState">State</label>\n' +
        '               <select id="inputState" class="form-control">\n' +
        '                   <option selected>Choose...</option>\n' +
        '                   <option>...</option>\n' +
        '               </select>\n' +
        '           </div>\n' +
        '           <div class="form-group col-md-2">\n' +
        '               <label for="inputZip">Zip</label>\n' +
        '               <input type="text" class="form-control" id="inputZip">\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="form-group">\n' +
        '           <div class="form-check">\n' +
        '               <input class="form-check-input" type="checkbox" id="gridCheck">\n' +
        '               <label class="form-check-label" for="gridCheck">Check me out</label>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <button type="submit" class="btn btn-primary">Sign in</button>\n' +
        '   </form>\n';

    // Jumbotron
    // https://getbootstrap.com/docs/4.0/components/jumbotron/

    snippets.bs4jumbotron = '<div class="container">\n\t\t<div class="jumbotron">\n\t\t\t<h1 class="display-3">Hello, world!</h1>\n\t\t\t<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n\t\t\t<hr class="my-4">\n\t\t\t<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\t\t\t<p class="lead">\n\t\t\t\t<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>';

    snippets.bs4jumbotron_fluid = '<div class="jumbotron jumbotron-fluid">\n\t\t<div class="container">\n\t\t\t<h1 class="display-3">Hello, world!</h1>\n\t\t\t<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n\t\t\t<hr class="my-4">\n\t\t\t<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n\t\t\t<p class="lead">\n\t\t\t\t<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>';

    // List Groups
    // https://getbootstrap.com/docs/4.0/components/list-group/

    snippets.bs4listgroup = '<ul class="list-group">\n' +
        '       <li class="list-group-item active">Cras justo odio</li>\n' +
        '       <li class="list-group-item">Dapibus ac facilisis in</li>\n' +
        '       <li class="list-group-item">Morbi leo risus</li>\n' +
        '       <li class="list-group-item">Porta ac consectetur ac</li>\n' +
        '       <li class="list-group-item disable">Vestibulum at eros</li>\n' +
        '   </ul>';

    snippets.bs4listgroup_links = '<div class="list-group">\n' +
        '       <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>\n' +
        '   </div>';

    snippets.bs4listgroup_badges = '<ul class="list-group">\n' +
        '       <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-primary badge-pill">14</span></li>\n' +
        '       <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-primary badge-pill">2</span></li>\n' +
        '       <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span class="badge badge-primary badge-pill">1</span></li>\n' +
        '   </ul>';

    snippets.bs4listgroup_content = '<div class="list-group">\n' +
        '       <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">\n' +
        '           <div class="d-flex w-100 justify-content-between">\n' +
        '               <h5 class="mb-1">List group item heading</h5>\n' +
        '               <small>3 days ago</small>\n' +
        '           </div>\n' +
        '           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '           <small>Donec id elit non mi porta.</small>\n' +
        '       </a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">\n' +
        '           <div class="d-flex w-100 justify-content-between">\n' +
        '               <h5 class="mb-1">List group item heading</h5>\n' +
        '               <small class="text-muted">3 days ago</small>\n' +
        '           </div>\n' +
        '           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '           <small class="text-muted">Donec id elit non mi porta.</small>\n' +
        '       </a>\n' +
        '       <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">\n' +
        '           <div class="d-flex w-100 justify-content-between">\n' +
        '               <h5 class="mb-1">List group item heading</h5>\n' +
        '               <small class="text-muted">3 days ago</small>\n' +
        '           </div>\n' +
        '           <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
        '           <small class="text-muted">Donec id elit non mi porta.</small>\n' +
        '       </a>\n' +
        '   </div>';

    //------
    // Local
    //------

    snippets.bs4localcss = csslocal;
    snippets.bs4localjs = jslocal;

    //---------------------------------------------------------------
    // Media (https://getbootstrap.com/docs/4.1/layout/media-object/)
    //---------------------------------------------------------------
    
    snippets.bs4mediaobject = '<div class="media">\n\t\t<img class="mr-3" src="' + imgSquare + '" alt="Generic placeholder image">\n\t\t<div class="media-body">\n\t\t\t<h5 class="mt-0">Media heading</h5>\n\t\t\t' + dummy + '\n\t\t</div>\n\t</div>\n';

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
        '               <!-- Insert content here -->\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
        '               <button type="button" class="btn btn-primary">Save changes</button>\n' +
        '            </div>\n' +
        '         </div>\n' +
        '      </div>\n' +
        '   </div>';

    // Navs
    var navlinks = '       <a class="nav-link active" href="#">Active</a>\n' +
        '       <a class="nav-link" href="#">Link</a>\n' +
        '       <a class="nav-link" href="#">Link</a>\n' +
        '       <a class="nav-link disabled" href="#">Disabled</a>\n';

    var navlist = '       <li class="nav-item">\n' +
        '           <a class="nav-link active" href="#">Active</a>\n' +
        '       </li>\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link" href="#">Link</a>\n' +
        '       </li>\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link" href="#">Link</a>\n' +
        '       </li>\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link disabled" href="#">Disabled</a>\n' +
        '       </li>\n';

    snippets.bs4nav = '<nav class="nav">\n' +
        navlinks +
        '   </nav>';

    snippets.bs4nav_center = '<ul class="nav justify-content-center">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4nav_right = '<ul class="nav justify-content-end">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4nav_vertical = '<ul class="nav flex-column">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4navlist = '<ul class="nav">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navlist_center = '<ul class="nav justify-content-center">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navlist_right = '<ul class="nav justify-content-end">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navlist_vertical = '<ul class="nav flex-column">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navpills = '<nav class="nav nav-pills">\n' +
        navlinks +
        '   </nav>';

    snippets.bs4navpills_center = '<ul class="nav nav-pills justify-content-center">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4navpills_right = '<ul class="nav nav-pills justify-content-end">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4navpills_vertical = '<ul class="nav nav-pills flex-column">\n' +
        navlinks +
        '   </ul>';

    snippets.bs4navpillslist = '<ul class="nav nav-pills">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navpillslist_center = '<ul class="nav nav-pills justify-content-center">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navpillslist_right = '<ul class="nav nav-pills justify-content-end">\n' +
        navlist +
        '   </ul>';

    snippets.bs4navpillslist_vertical = '<ul class="nav nav-pills flex-column">\n' +
        navlist +
        '   </ul>';


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

    snippets.bs4navbar_basic = '<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">\n' +
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

    snippets.bs4navbar_centered = '<nav class="navbar navbar-expand-md navbar-dark bg-dark">\n' +
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

    snippets.bs4pagination_icons = '<nav aria-label="Page navigation example">\n' +
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

    snippets.bs4pagination_centered = '<nav aria-label="Page navigation example">\n' +
        '       <ul class="pagination  justify-content-center">\n' +
        '           <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">1</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">2</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">3</a></li>\n' +
        '           <li class="page-item"><a class="page-link" href="#">Next</a></li>\n' +
        '       </ul>\n' +
        '   </nav>';

    snippets.bs4pagination_right = '<nav aria-label="Page navigation example">\n' +
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
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n';

    snippets.bs4table_dark = '<table class="table table-dark">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n';

    snippets.bs4table_striped = '<table class="table table-striped">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n';

    snippets.bs4table_bordered = '<table class="table table-bordered">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n';
    
    snippets.bs4table_borderless = '<table class="table table-borderless">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n';

    snippets.bs4table_responsive = '<div class="table-responsive">' +
        '<table class="table">\n' +
        '       <thead>\n' +
        '           <tr>\n' +
        '               <th scope="col">#</th>\n' +
        '               <th scope="col">First</th>\n' +
        '               <th scope="col">Last</th>\n' +
        '               <th scope="col">Handle</th>\n' +
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
        '   </table>\n' +
        '</div>\n';

    // Tabs (TODO)

    snippets.bs4tabsvertical = '<div class="row">\n' +
        '       <div class="col-4">\n' +
        '           <div class="list-group" id="list-tab" role="tablist">\n' +
        '               <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>\n' +
        '               <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>\n' +
        '               <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>\n' +
        '               <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '       <div class="col-8">\n' +
        '           <div class="tab-content" id="nav-tabContent">\n' +
        '               <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">' +
        '                   <!-- Inser content here -->' +
        '               </div>\n' +
        '               <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">' +
        '                   <!-- Inser content here -->' +
        '               </div>\n' +
        '               <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">' +
        '                   <!-- Inser content here -->' +
        '               </div>\n' +
        '               <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">' +
        '                   <!-- Inser content here -->' +
        '               </div>\n' +
        '           </div>\n' +
        '       </div>\n' +
        '   </div>';

    snippets.bs4tabs = '<ul class="nav nav-tabs" id="myTab" role="tablist">\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>\n' +
        '       </li>\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>\n' +
        '       </li>\n' +
        '       <li class="nav-item">\n' +
        '           <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>\n' +
        '       </li>\n' +
        '   </ul>\n' +
        '   <div class="tab-content" id="myTabContent">\n' +
        '       <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">' +
        '           <!-- Inser content here -->' +
        '       </div>\n' +
        '       <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">' +
        '           <!-- Inser content here -->' +
        '       </div>\n' +
        '       <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">' +
        '           <!-- Inser content here -->' +
        '       </div>\n' +
        '   </div>';

    // Tables

    module.exports = snippets;
});
