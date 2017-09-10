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
    var cdncss = '     <!-- Bootstrap CSS -->\n' +
        '       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">\n';
    var cdnjs = '    <!-- Optional JavaScript -->\n' +
    '    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n' +
    '    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n' +     
    '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>\n' +
        '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>\n';

    // Bootstrap 4 - Minimum Template

    snippets.bs4html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <!-- Required meta tags -->\n' + 
        '    <meta charset="utf-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n' +
        '    <title>Bootstrap 4 Minimal Template</title>\n' +
        cdncss +
        '\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '   <h1>Hello, world!</h1>\n' +
        '\n' +
        cdnjs +
        '</body>\n' +
        '</html>\n';

    snippets.bs4 = '<!DOCTYPE html>\n' +
        '<html lang="">\n' +
        '\n' +
        '<head>\n' +
        '    <meta charset="utf-8">\n' +
        '    <title>Bootstrap 4 Template</title>\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n' +
        '    <meta name="description" content="">\n' +
        '    <meta name="author" content="">\n' +
        '\n' +
        '    <link rel="apple-touch-icon" href="">\n' +
        cdncss +
        '\n' +
        '    <!-- Link to your CSS file -->\n' +
        '    <link rel="stylesheet" href="">\n\n' +
        '    <!-- This is necesary for de fixed navbar used in this template, you should move it to your CSS file -->\n' + 
        '    <style>\n' +
        '        body {\n' +
        '            padding-top: 50px;\n' +
        '        }\n' +
        '    </style>\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '\n' +
        '    <!-- Start coding here -->\n' +
        '\n' +
        '\n' +
        '    <!-- Coding End -->\n' +
        '\n' +
        cdnjs +
        '</body>\n' +
        '</html>\n';

    snippets.bs4template = snippets.bs4html;

    // Alerts
    // https://getbootstrap.com/docs/4.0/components/alerts/

    snippets.bs4alertdanger = '<div class="alert alert-danger">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '	<strong>INSERT TITLE HERE</strong>INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs4alertinfo = '<div class="alert alert-info">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '	<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs4alertsuccess = '<div class="alert alert-success">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs4alertwarning = '<div class="alert alert-warning">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    snippets.bs4alert = '<div class="alert">\n' +
        '	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;\n' +
        '</button>\n' +
        '<strong>INSERT TITLE HERE</strong> INSERT BODY HERE\n' +
        '</div>\n';

    // Badge
    // https://getbootstrap.com/docs/4.0/components/badge/

    snippets.bs4badge = '<span class="badge">INSERT BADGE HERE</span>';

    // Breadcrumbs
    // https://getbootstrap.com/docs/4.0/components/breadcrumb/

    snippets.bs4breadcrumbs = '<ol class="breadcrumb">\n' +
        '<li>\n' +
        '   <a href="#">[Home]</a>\n' +
        '</li>\n' +
        '<li>\n' +
        '   <a href="#">[About]</a>\n' +
        '</li>}\n' +
        '<li class="active">[Contact]</li>\n' +
        '</ol>\n';
    
    // Buttons
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
    
    // Button Groups
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
    
    // Carousel
    // https://getbootstrap.com/docs/4.0/components/carousel/

    // Sample Images
    //
    // https://pixabay.com/static/uploads/photo/2015/06/15/06/17/flowers-809927_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/02/10/16/07/tulips-263513_640.jpg
    // https://pixabay.com/static/uploads/photo/2014/04/10/10/00/tulip-320774_640.jpg
    //

    snippets.bs4carousel = '    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n' +
        '        <ol class="carousel-indicators">\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="1"> </li>\n' +
        '            <li data-target="#carousel-example-generic" data-slide-to="2"> </li>\n' +
        '        </ol>\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="item active">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="First slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Second slide"/>\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="[INSERT IMAGE HERE]" alt="Third slide"/>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>\n' +
        '        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>\n' +
        '    </div>\n';

    // CDN

    snippets.bs4cdn = cdncss + cdnjs;
    snippets.bs4cdnjs = cdnjs;
    snippets.bs4cdncss = cdncss;

    // Clearfix

    snippets.bs4clearfix = '<div class="clearfix">\n\n' +
        '</div>\n';

    // Forms

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

    // Grid System

    snippets.bs4col1 = '<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n\n</div>\n';

    snippets.bs4col10 = '<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">\n\n</div>\n';

    snippets.bs4col11 = '<div class="col-xs-11 col-sm-11 col-md-11 col-lg-11">\n\n</div>\n';

    snippets.bs4col12 = '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n\n</div>\n';

    snippets.bs4col2 = '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">\n\n</div>\n';

    snippets.bs4col3 = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n\n</div>\n';

    snippets.bs4col4 = '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n\n</div>\n';

    snippets.bs4col5 = '<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">\n\n</div>\n';

    snippets.bs4col6 = '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">\n\n</div>\n';

    snippets.bs4col7 = '<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">\n\n</div>\n';

    snippets.bs4col8 = '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">\n\n</div>\n';

    snippets.bs4col9 = '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">\n\n<div>\n';

    snippets.bs4container = '<div class="container">\n</div>\n';

    snippets.bs4rowcol = '<div class="row">\n' +
        '	<div class="col-xs- col-sm- col-md- col-lg-">\n' +
        '		\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4row = '<div class="row">\n\n</div>\n';

    // Work with columns

    snippets.bs4col3equal = ' <div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs4col3unequal = ' <div class="row">\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '  <div class="col-sm-6">.col-md-6</div>\n' +
        '  <div class="col-sm-3">.col-md-3</div>\n' +
        '</div>\n';

    snippets.bs4col2equal = '<div class="row">\n' +
        '  <div class="col-sm-4">.col-sm-4</div>\n' +
        '  <div class="col-sm-8">.col-sm-8</div>\n' +
        '</div>\n';

    snippets.bs4col2nested = '<div class="row">\n' +
        '  <div class="col-sm-8">' +
        '    .col-sm-8' +
        '    <div class="row">' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '      <div class="col-sm-6">.col-sm-6</div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="col-sm-4">.col-sm-4</div>' +
        '</div>\n';

    snippets.bs4colmobdesk = '<div class="row">\n' +
        '  <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '  <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '  <div class="col-xs-6">.col-xs-6</div>\n' +
        '</div>\n';

    snippets.bs4colmobtabdesk = ' <div class="row">\n' +
        '  <div class="col-xs-12 col-sm-6 col-lg-8">.col-xs-12 .col-sm-6 .col-lg-8</div>\n' +
        '  <div class="col-xs-6 col-lg-4">.col-xs-6 .col-lg-4</div>\n' +
        '</div>\n' +
        '<div class="row">\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '  <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n' +
        '</div>\n';

    snippets.bs4clearfloats = ' <div class="row">\n' +
        '  <div class="col-xs-6 col-sm-3">\n' +
        '    Column 1\n' +
        '    <br>\n' +
        '    Resize the browser window to see the effect.\n' +
        '  </div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 2</div>\n' +
        '  <!-- Add clearfix for only the required viewport -->\n' +
        '  <div class="clearfix visible-xs"></div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 3</div>\n' +
        '  <div class="col-xs-6 col-sm-3">Column 4</div>\n' +
        '</div>\n';

    snippets.bs4offsettingcol = ' <div class="row">\n' +
        '  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>\n' +
        '  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">\n' +
        '  .col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>\n' +
        '</div>\n';

    snippets.bs4pushandpullcol = ' <div class="row">\n' +
        '  <div class="col-sm-4 col-sm-push-8">.col-sm-4 .col-sm-push-8</div>\n' +
        '  <div class="col-sm-8 col-sm-pull-4">.col-sm-8 .col-sm-pull-4</div>\n' +
        '</div>\n';

    // Icons
    // https://getbootstrap.com/docs/4.0/extend/icons/
    
    // Images

    snippets.bs4image = '<img src="#" class="img-responsive" alt="Image">\n';

    // Thumbnails fue descartado 
    // https://getbootstrap.com/docs/4.0/migration/#panels-thumbnails-and-wells
    
    snippets.bs4thumbnailcontent = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<div class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '		<div class="caption">\n' +
        '			<h3>Title</h3>\n' +
        '			<p>\n' +
        '				...\n' +
        '			</p>\n' +
        '			<p>\n' +
        '				<a href="#" class="btn btn-primary">Action</a>\n' +
        '				<a href="#" class="btn btn-default">Action</a>\n' +
        '			</p>\n' +
        '		</div>\n' +
        '	</div>\n' +
        '</div>\n';

    snippets.bs4thumbnail = '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">\n' +
        '	<a href="#" class="thumbnail">\n' +
        '		<img data-src="#" alt="">\n' +
        '	</a>\n' +
        '</div>\n';

    snippets.bs4imagerounded = '<img src="[ENTER IMAGE HERE]" class="img-rounded" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imagecircle = '<img src="[ENTER IMAGE HERE]" class="img-circle" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imagethumbnail = '<img src="[ENTER IMAGE HERE]" class="img-thumbnail" alt="Cinque Terre" width="304" height="236">\n';

    snippets.bs4imageresponsive = '<img class="img-responsive" src="[ENTER IMAGE HERE]" alt="Chania">\n';

    snippets.bs4thumbnailgallerysample = '<!--\n' +
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '  <title>Bootstrap Image Gallery Sample</title>\n' +
        '  <meta charset="utf-8">\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
        cdncss + cdnjs +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '<div class="container">\n' +
        '  <h2>Image Gallery using Thumbnail Class</h2>\n' +
        '\n' +
        '  <div class="row">\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>    \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>\n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '    <div class="col-md-4">\n' +
        '      <a href="[ENTER IMAGE HERE]" class="thumbnail">\n' +
        '        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>      \n' +
        '        <img src="[ENTER IMAGE HERE]" alt="" style="width:150px;height:150px">\n' +
        '      </a>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>\n' +
        '-->\n';

    snippets.bs4responsiveembed16by9 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';

    snippets.bs4responsiveembed4by3 = '  <div class="embed-responsive embed-responsive-16by9">\n' +
        '    <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/[YOUTUBE VIDEO ID]"></iframe>\n' +
        '  </div>\n';

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
        '	<div class="container">\n' +
        '		<h1>[PUT TITLE HERE]</h1>\n' +
        '		<p>[INSERT CONTENT HERE ...]</p>\n' +
        '		<p>\n' +
        '			<a class="btn btn-primary btn-lg">Learn more</a>\n' +
        '		</p>\n' +
        '	</div>\n' +
        '</div>\n';

    // Labels
    // ??

    snippets.bs4labeldanger = '<span class="label label-danger">[Label]</span>\n';
    snippets.bs4labeldefault = '<span class="label label-default">[Label]</span>\n';
    snippets.bs4labelinfo = '<span class="label label-info">[Label]</span>\n';
    snippets.bs4labelsuccess = '<span class="label label-success">[Label]</span>\n';
    snippets.bs4labelwarning = '<span class="label label-warning">[Label]</span>\n';
    snippets.bs4label = '<span class="label label-[ENTER NAME HERE]">[Label]</span>\n';

    // Link Buttons

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

    // List Groups
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


    // Local

    snippets.bs4local = '<link rel="stylesheet" media="screen" href="css/bootstrap.min.css">\n' +
        '<script src="js/jquery.js"></script>\n' +
        '<script src="js/bootstrap.min.js"></script>\n';

    snippets.bs4localcss = '<link rel="stylesheet" media="screen" href="css/bootstrap.min.css">\n';

    snippets.bs4localjs = '<script src="js/jquery.js"></script>\n' +
        '<script src="js/bootstrap.min.js"></script>\n';


    // Media
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

    snippets.bs4modal = '<!-- Local bootstrap CSS & JS -->\n' +
        '<link rel="stylesheet" media="screen" href="bootstrap.min.css">' +
        '<script src="jquery.js"></script>' +
        '<script src="bootstrap.min.js"></script>\n';

    snippets.bs4modalstruct = '<!-- Local bootstrap CSS & JS -->\n' +
        '<link rel="stylesheet" media="screen" href="./css/bootstrap.min.css">' +
        '<script src="./js/jquery.js"></script>' +
        '<script src="./js/bootstrap.min.js"></script>\n';

    // Navigation
    // https://getbootstrap.com/docs/4.0/components/navbar/

    snippets.bs4navbarbasic = '<div class="navbar">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</div>\n';

    snippets.bs4navbarbrand = '<a class="navbar-brand" href="/">Title</a>\n';

    snippets.bs4navbarfixedbottom = '<nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs4navbarfixedtop = '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs4navbarform = '<form class="navbar-form pull-right">\n' +
        '	<input type="text" style="width: 200px;">\n' +
        '	<button type="submit" class="btn btn-default">Submit</button>\n' +
        '</form>\n';

    snippets.bs4navbarinverse = '<nav class="navbar navbar-inverse">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs4navbarlink = '<p class="navbar-text pull-right">\n' +
        '	<a href="#" class="navbar-link">Links</a>\n' +
        '</p>\n';

    snippets.bs4navbarlinks = '<ul class="nav navbar-nav">\n' +
        '	<li class="active">\n' +
        '		<a href="#">Home</a>\n' +
        '	</li>\n' +
        '	<li>\n' +
        '		<a href="#">Link</a>\n' +
        '	</li>\n' +
        '</ul>\n';

    snippets.bs4navbarresponsive = '<nav class="navbar navbar-default" role="navigation">\n' +
        '	<!-- Brand and toggle get grouped for better mobile display -->\n' +
        '	<div class="navbar-header">\n' +
        '		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' +
        '			<span class="sr-only">Toggle navigation</span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '		</button>\n' +
        '		<a class="navbar-brand" href="#">Title</a>\n' +
        '	</div>\n' +
        '\n' +
        '	<!-- Collect the nav links, forms, and other content for toggling -->\n' +
        '	<div class="collapse navbar-collapse navbar-ex1-collapse">\n' +
        '		<ul class="nav navbar-nav">\n' +
        '			<li class="active"><a href="#">Link</a></li>\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '		</ul>\n' +
        '		<form class="navbar-form navbar-left" role="search">\n' +
        '			<div class="form-group">\n' +
        '				<input type="text" class="form-control" placeholder="Search">\n' +
        '			</div>\n' +
        '			<button type="submit" class="btn btn-default">Submit</button>\n' +
        '		</form>\n' +
        '		<ul class="nav navbar-nav navbar-right">\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '			<li class="dropdown">\n' +
        '				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n' +
        '				<ul class="dropdown-menu">\n' +
        '					<li><a href="#">Action</a></li>\n' +
        '					<li><a href="#">Another action</a></li>\n' +
        '					<li><a href="#">Something else here</a></li>\n' +
        '					<li><a href="#">Separated link</a></li>\n' +
        '				</ul>\n' +
        '			</li>\n' +
        '		</ul>\n' +
        '	</div><!-- /.navbar-collapse -->\n' +
        '</nav>\n';

    snippets.bs4navbarstatictop = '<nav class="navbar navbar-default navbar-static-top" role="navigation">\n' +
        '	<a class="navbar-brand" href="#">Title</a>\n' +
        '	<ul class="nav navbar-nav">\n' +
        '		<li class="active">\n' +
        '			<a href="#">Home</a>\n' +
        '		</li>\n' +
        '		<li>\n' +
        '			<a href="#">Link</a>\n' +
        '		</li>\n' +
        '	</ul>\n' +
        '</nav>\n';

    snippets.bs4navbartext = '<p class="navbar-text">[Navbar text]</p>\n';

    snippets.bs4navbar = '<nav class="navbar navbar-default" role="navigation">\n' +
        '	<!-- Brand and toggle get grouped for better mobile display -->\n' +
        '	<div class="navbar-header">\n' +
        '		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n' +
        '			<span class="sr-only">Toggle navigation</span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '			<span class="icon-bar"></span>\n' +
        '		</button>\n' +
        '		<a class="navbar-brand" href="#">Title</a>\n' +
        '	</div>\n' +
        '\n' +
        '	<!-- Collect the nav links, forms, and other content for toggling -->\n' +
        '	<div class="collapse navbar-collapse navbar-ex1-collapse">\n' +
        '		<ul class="nav navbar-nav">\n' +
        '			<li class="active"><a href="#">Link</a></li>\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '		</ul>\n' +
        '		<form class="navbar-form navbar-left" role="search">\n' +
        '			<div class="form-group">\n' +
        '				<input type="text" class="form-control" placeholder="Search">\n' +
        '			</div>\n' +
        '			<button type="submit" class="btn btn-default">Submit</button>\n' +
        '		</form>\n' +
        '		<ul class="nav navbar-nav navbar-right">\n' +
        '			<li><a href="#">Link</a></li>\n' +
        '			<li class="dropdown">\n' +
        '				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n' +
        '				<ul class="dropdown-menu">\n' +
        '					<li><a href="#">Action</a></li>\n' +
        '					<li><a href="#">Another action</a></li>\n' +
        '					<li><a href="#">Something else here</a></li>\n' +
        '					<li><a href="#">Separated link</a></li>\n' +
        '				</ul>\n' +
        '			</li>\n' +
        '		</ul>\n' +
        '	</div><!-- /.navbar-collapse -->\n' +
        '</nav>\n';

    // Page Header

    snippets.bs4pageheader = '<div class="page-header">\n' +
        '  <h1>title<small>subtext</small></h1>\n' +
        '</div>\n';

    // Pagination

    snippets.bs4pageraligned = '<ul class="pager">\n' +
        '	<li class="previous"><a href="#">&larr; Older</a></li>\n' +
        '	<li class="next"><a href="#">Newer &rarr;</a></li>\n' +
        '</ul>\n';

    snippets.bs4pager = '<ul class="pager">\n' +
        '	<li><a href="#">Previous</a></li>\n' +
        '	<li><a href="#">Next</a></li>\n' +
        '</ul>\n';

    snippets.bs4paginationlarge = '<ul class="pagination pagination-lg">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    snippets.bs4paginationsmall = '<ul class="pagination pagination-sm">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    snippets.bs4pagination = '<ul class="pagination">\n' +
        '	<li><a href="#">&laquo;</a></li>\n' +
        '	<li><a href="#">1</a></li>\n' +
        '	<li><a href="#">2</a></li>\n' +
        '	<li><a href="#">3</a></li>\n' +
        '	<li><a href="#">4</a></li>\n' +
        '	<li><a href="#">5</a></li>\n' +
        '	<li><a href="#">&raquo;</a></li>\n' +
        '</ul>\n';

    // Panels
    // descartados 
    // https://getbootstrap.com/docs/4.0/migration/#panels-thumbnails-and-wells

    snippets.bs4paneldanger = '<div class="panel panel-danger">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4panelfooter = '<div class="panel panel-default">\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '	  <div class="panel-footer">\n' +
        '			Panel footer\n' +
        '		</div>\n' +
        '</div>\n';

    snippets.bs4panelheading = '<div class="panel panel-default">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4panelinfo = '<div class="panel panel-info">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4panelprimary = '<div class="panel panel-primary">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4panelsuccess = '<div class="panel panel-success">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4paneltable = '<div class="panel panel-default">\n' +
        '	<!-- Default panel contents -->\n' +
        '	<div class="panel-heading">Panel heading</div>\n' +
        '		<div class="panel-body">\n' +
        '			<p>Text goes here...</p>\n' +
        '		</div>\n' +
        '\n' +
        '		<!-- Table -->\n' +
        '		<table class="table">\n' +
        '			<thead>\n' +
        '				<tr>\n' +
        '					<th>Heading 1</th>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<th>Heading 2</th>\n' +
        '				</tr>\n' +
        '			</thead>\n' +
        '			<tbody>\n' +
        '				<tr>\n' +
        '					<td>Content 1</td>\n' +
        '				</tr>\n' +
        '				<tr>\n' +
        '					<td>Content 2</td>\n' +
        '				</tr>\n' +
        '			</tbody>\n' +
        '		</table>\n' +
        '</div>\n';

    snippets.bs4panelwarning = '<div class="panel panel-warning">\n' +
        '	  <div class="panel-heading">\n' +
        '			<h3 class="panel-title">Panel title</h3>\n' +
        '	  </div>\n' +
        '	  <div class="panel-body">\n' +
        '			Panel content\n' +
        '	  </div>\n' +
        '</div>\n';

    snippets.bs4panel = '<div class="panel panel-default">\n' +
        '	<div class="panel-body">\n' +
        '	   Basic panel example\n' +
        '	</div>\n' +
        '</div>\n';


    // Table

    snippets.bs4table = '<table class="table">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablehover = '<table class="table table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablehovercolor = '        .table-hover tbody tr:hover td,\n' +
        '        .table-hover tbody tr:hover th {\n' +
        '            background-color: #acb;\n' +
        '        }\n';


    snippets.bs4tablebordered = '    <table class="table table-bordered">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    // Revisar CSS
    
    snippets.bs4tableborderedcolor = '        .table {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n' +
        '        \n' +
        '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 2.5px solid red;\n' +
        '        }\n';


    snippets.bs4addroundpanelsolid = '<div class="panel panel-default addroundsolid">\n\n' +
        '</div>\n';

    snippets.bs4addroundsolid = '        .addroundsolid {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px solid #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpaneldashed = '<div class="panel panel-default addrounddashed">\n\n' +
        '</div>\n';

    snippets.bs4addrounddashed = '        .addrounddashed {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dashed #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpaneldotted = '<div class="panel panel-default addrounddotted">\n\n' +
        '</div>\n';

    snippets.bs4addrounddotted = '        .addrounddotted {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 2px dotted #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpaneldouble = '<div class="panel panel-default addrounddouble">\n\n' +
        '</div>\n';

    snippets.bs4addrounddouble = '        .addrounddouble {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px double #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpanelgroove = '<div class="panel panel-default addroundgroove">\n\n' +
        '</div>\n';

    snippets.bs4addroundgroove = '        .addroundgroove {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px groove #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpanelridge = '<div class="panel panel-default addroundridge">\n\n' +
        '</div>\n';

    snippets.bs4addroundridge = '        .addroundridge {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px ridge #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpanelinset = '<div class="panel panel-default addroundinset">\n\n' +
        '</div>\n';

    snippets.bs4addroundinset = '        .addroundinset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px inset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpaneloutset = '<div class="panel panel-default addroundoutset">\n\n' +
        '</div>\n';

    snippets.bs4addroundoutset = '        .addroundoutset {\n' +
        '            -webkit-border-radius: 16px;\n' +
        '            -khtml-border-radius: 16px;\n' +
        '            -moz-border-radius: 16px;\n' +
        '            border-radius: 16px;\n' +
        '            border: 5px outset #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';

    snippets.bs4addroundpanelhidden = '<div class="panel panel-default addroundhidden">\n\n' +
        '</div>\n';

    snippets.bs4addroundhidden = '        .addroundhidden {\n' +
        '            border: 0px hidden #acb;\n' +
        '            margin: 5px;\n' +
        '        }\n';


    snippets.bs4tableborderedhcolor = '        .table-bordered > thead > tr > th,\n' +
        '        .table-bordered > tbody > tr > th,\n' +
        '        .table-bordered > tfoot > tr > th,\n' +
        '        .table-bordered > thead > tr > td,\n' +
        '        .table-bordered > tbody > tr > td,\n' +
        '        .table-bordered > tfoot > tr > td {\n' +
        '            border: 1px solid red;\n' +
        '            border-right-width: 0px;\n' +
        '            border-left-width: 0px;\n' +
        '        }\n';

    snippets.bs4tableborderedhover = '<table class="table table-bordered table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecondensed = '<table class="table table-condensed">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecondensedhover = '<table class="table table-condensed table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';


    snippets.bs4tableresponsive = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tableresponsivehover = '<div class="table-responsive">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablestriped = '<table class="table table-striped">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablestripedbgcolor = '        .table-striped > tbody > tr:nth-child(2n+1) > td,\n' +
        '        .table-striped > tbody > tr:nth-child(2n+1) > th {\n' +
        '            background-color: #acbedc;\n' +
        '        }\n';

    snippets.bs4tablestripedcolumnodd = '        .table-striped-column > tbody > tr td:nth-of-type(odd) {\n' +
        '            background-color: #dceacb;\n' +
        '        }\n';

    snippets.bs4tablestripedcolumneven = '   .table-striped-column-odd > tbody > tr td:nth-of-type(even) {\n' +
        '       background-color: #dceacb;\n' +
        '   }\n';


    snippets.bs4tablestripedhover = '<table class="table table-striped table-hover">\n' +
        '        <thead>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>\n' +
        '        </thead>\n' +
        '        <tfoot>\n' +
        '            <tr>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '                <th>[Title]</th>\n' +
        '            </tr>        \n' +
        '        </tfoot>\n' +
        '        <tbody>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '            <tr>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '                <td>[data]</td>\n' +
        '            </tr>\n' +
        '        </tbody>\n' +
        '    </table>\n';

    snippets.bs4tablecontextual = '<table class="table">\n' +
        '    <thead>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </thead>\n' +
        '    <tfoot>\n' +
        '      <tr>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '        <th>[Title]</th>\n' +
        '      </tr>\n' +
        '    </foot>\n' +
        '    <tbody>\n' +
        '      <tr class="active">\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '        <td>[active data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="success">\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '        <td>[success data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="info">\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '        <td>[info data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="warning">\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '        <td>[warning data]</td>\n' +
        '      </tr>\n' +
        '      <tr class="danger">\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '        <td>[danger data]</td>\n' +
        '      </tr>\n' +
        '    </tbody>\n' +
        '  </table>\n';


    snippets.bs4tablecontextualtdcoloractive = '        .table tbody tr > td.active {\n' +
        '            background-color: #ced0cd !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.active {\n' +
        '            background-color: #a5a7a5 !important;\n' +
        '        }\n' +
        '\n';

    snippets.bs4tablecontextualtdcolorsuccess = '        .table tbody tr > td.success {\n' +
        '            background-color: #dff0d8 !important;\n' +
        '        }\n' +
        '\n' +
        '        .table-hover tbody tr:hover > td.success {\n' +
        '            background-color: #d0e9c6 !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolordanger = '        .table tbody tr > td.danger {\n' +
        '            background-color: #f2dede !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.danger {\n' +
        '            background-color: #ebcccc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolorwarning = '        .table tbody tr > td.warning {\n' +
        '            background-color: #fcf8e3 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.warning {\n' +
        '            background-color: #faf2cc !important;\n' +
        '        }\n' +
        '        \n';

    snippets.bs4tablecontextualtdcolorinfo = '        .table tbody tr > td.info {\n' +
        '            background-color: #d9edf7 !important;\n' +
        '        }\n' +
        '        .table-hover tbody tr:hover > td.info {\n' +
        '            background-color: #c4e3f3 !important;\n' +
        '        }\n';

    snippets.bs4tablecontextualtdcolorall = snippets.bs4tablecontextualtdcoloractive +
        snippets.bs4tablecontextualtdcolorsuccess +
        snippets.bs4tablecontextualtdcolordanger +
        snippets.bs4tablecontextualtdcolorwarning +
        snippets.bs4tablecontextualtdcolorinfo;

    // Tabs

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
    
    // HTML5 Tamplate
    snippets.bs4html5template = snippets.bs4html; 

    // Wells
    // Reemplazados por Cards
    // https://getbootstrap.com/docs/4.0/migration/#panels-thumbnails-and-wells

    snippets.bs4welllg = '<div class="well well-lg">\n\n' +
        '</div>\n';

    snippets.bs4wellsm = '<div class="well well-sm">\n\n' +
        '</div>\n';

    snippets.bs4well = '<div class="well">\n\n' +
        '</div>\n';

    // Portfolio Sample

    //
    // Site Blocks
    //

    snippets.bs4portfoliocss = '<!-- External Styles -->\n' +
        '<link href="assets/css/ionicons.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/font-awesome.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/source/jquery.fancybox.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/animate.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/animations.min.css" rel="stylesheet"/>\n' +
        '<link href="assets/css/style-blue.css" rel="stylesheet"/>\n' +
        '<link href="assets/js/vegas/jquery.vegas.min.css" rel="stylesheet"/>\n' +
        '<!-- End External Styles -->\n';

    snippets.bs4portfoliolibs = '<!-- External Libs -->\n' +
        '<script src="assets/js/vegas/jquery.vegas.min.js"></script>\n' +
        '<script src="assets/js/jquery.easing.min.jsj"></script>\n' +
        '<script src="assets/js/source/jquery.fancybox.js"></script>\n' +
        '<script src="assets/js/jquery.isotope.js"></script>\n' +
        '<script src="assets/js/appear.min.js"></script>\n' +
        '<script src="js/wow.min.js"></script>\n' +
        '<script src="assets/js/animations.min.js"></script>\n' +
        '<!-- End External Libs -->\n';

    snippets.bs4portfoliojs = '<!-- jQuery Functions inside tag <script> -->\n' +
        '$(document).ready(function () {\n' +
        '    // IMAGE BACKGROUND SLIDE SHOW\n' +
        '    $.vegas(\'slideshow\', {\n' +
        '        backgrounds: [\n' +
        '            {\n' +
        '                src: \'assets/img/background/1.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/2.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                },\n' +
        '            {\n' +
        '                src: \'assets/img/background/3.jpg\',\n' +
        '                fade: 1000,\n' +
        '                delay: 12000\n' +
        '                }\n' +
        '            ]\n' +
        '    })(\'overlay\', {\n' +
        '        /** SLIDESHOW OVERLAY IMAGE **/\n' +
        '        src: \'assets/js/vegas/overlays/11.png\'\n' +
        '    });\n' +
        '    // OUR WORK - IMAGE EFFECTS\n' +
        '    $(\'.fancybox-media\').fancybox({\n' +
        '        openEffect: \'elastic\',\n' +
        '        closeEffect: \'elastic\',\n' +
        '        helpers: {\n' +
        '            title: {\n' +
        '                type: \'inside\'\n' +
        '            }\n' +
        '        }\n' +
        '    });\n' +
        '    $(window).load(function () {\n' +
        '        var $container = $(\'#work-div\');\n' +
        '        $container.isotope({\n' +
        '            filter: \'*\',\n' +
        '            animationOptions: {\n' +
        '                duration: 750,\n' +
        '                easing: \'linear\',\n' +
        '                queue: false\n' +
        '            }\n' +
        '        });\n' +
        '        $(\'.caegories a\').click(function () {\n' +
        '            $(\'.caegories .active\').removeClass(\'active\');\n' +
        '            $(this).addClass(\'active\');\n' +
        '            var selector = $(this).attr(\'data-filter\');\n' +
        '            $container.isotope({\n' +
        '                filter: selector,\n' +
        '                animationOptions: {\n' +
        '                    duration: 750,\n' +
        '                    easing: \'linear\',\n' +
        '                    queue: false\n' +
        '                }\n' +
        '            });\n' +
        '            return false;\n' +
        '        });\n' +
        '    });\n' +
        '}); \n' +
        'new WOW().init();\n' +
        '<!-- jQuery Function </script> -->\n';

    snippets.bs4portfoliomenu = '<!-- Replace or adapt body tag as follow     \n' +
        '    <body data-spy="scroll" data-target="#menu-section">\n' +
        '-->\n' +
        '\n' +
        '<!--MENU SECTION START-->\n' +
        '<div class="navbar navbar-inverse navbar-fixed-top scroll-me" id="menu-section">\n' +
        '    <div class="container">\n' +
        '        <div class="navbar-header">\n' +
        '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '                <span class="icon-bar"></span>\n' +
        '            </button>\n' +
        '            <a class="navbar-brand" href="#">YOUR BRAND</a>\n' +
        '        </div>\n' +
        '        <div class="navbar-collapse collapse">\n' +
        '            <ul class="nav navbar-nav navbar-right">\n' +
        '                <li><a href="#home">HOME</a>\n' +
        '                </li>\n' +
        '                <li><a href="#services">SERVICES</a>\n' +
        '                </li>\n' +
        '                <li><a href="#pricing">PRICING</a>\n' +
        '                </li>\n' +
        '                <li><a href="#work">WORK</a>\n' +
        '                </li>\n' +
        '                <li><a href="#team">TEAM</a>\n' +
        '                </li>\n' +
        '                <li><a href="#contact">CONTACT</a>\n' +
        '                </li>\n' +
        '                <li><a href="#signup">SIGN UP</a>\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--MENU SECTION END-->\n';


    snippets.bs4portfoliocarouseltext = '<!-- Text Corousel -->\n' +
        '<div class="row">\n' +
        '    <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 ">\n' +
        '        <div id="carousel-slider" data-ride="carousel" class="carousel slide  animate-in" data-anim-type="fade-in-up">\n' +
        '            <div class="carousel-inner">\n' +
        '                <div class="item active">\n' +
        '                    <h3>Mussum ipsum cacilds</h3>\n' +
        '                    <p>ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. </p>\n' +
        '                </div>\n' +
        '                <div class="item">\n' +
        '                    <h3>Suco de cevadiss</h3>\n' +
        '                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. </p>\n' +
        '                </div>\n' +
        '                <!-- Add more Items as you want ... -->\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Text Carousel -->\n';

    snippets.bs4portfoliosocialbuttons = '<!-- Social Buttons -->\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2 scroll-me">\n' +
        '        <p>[INSERT A FIXED TEXT HERE]</p>\n' +
        '        <div class="social">\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-facebook "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-twitter"></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-google-plus "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-linkedin "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-pinterest "></i></a>\n' +
        '            <a href="#" class="btn button-custom btn-custom-one"><i class="fa fa-github "></i></a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- End Social Buttons -->\n';

    snippets.bs4portfolioservices = '<!-- SERVICE SECTION START -->\n' +
        '<div class="row text-center header">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 animate-in" data-anim-type="fade-in-up">\n' +
        '        <h3>Our Services</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-iphone"></i>\n' +
        '            <h3>iPhone Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-wrench"></i>\n' +
        '            <h3>Tools Development</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consecteturtellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cloud"></i>\n' +
        '            <h3>Cloud Support</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-chat"></i>\n' +
        '            <h3>Chat Applications</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-social-wordpress"></i>\n' +
        '            <h3>Word Press Portal</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-android-call"></i>\n' +
        '            <h3>VOIP Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellusnec, porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-university"></i>\n' +
        '            <h3>e-Learning Portals</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-map"></i>\n' +
        '            <h3>Geo-processing Systems</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec,  porttitor nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="services-wrapper">\n' +
        '            <i class="ion-cash"></i>\n' +
        '            <h3>Financial Apps</h3> Morbi mollis lectus et ipsum sollicitudin varius. Aliquam tempus ante placerat, consectetur tellus nec, porttitor  nulla.\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--SERVICE SECTION END-->\n';

    snippets.bs4portfoliopricetable = '<!-- PRICING SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Pricing Options</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row pad-bottom animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">\n' +
        '        <div class="row db-padding-btm db-attached">\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>199\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">STARTER</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>30 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>150 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>3 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing popular">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>499\n' +
        '                        <small>per month</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">PROFESSIONAL</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>50 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>300 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>2 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>1.999\n' +
        '                        <small>per year</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">EXPERT</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>250 Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>500 Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>1 year minimum</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '                <div class="light-pricing">\n' +
        '                    <div class="price">\n' +
        '                        <sup>$</sup>12,599\n' +
        '                        <small>one time</small>\n' +
        '                    </div>\n' +
        '                    <div class="type">CORPORATE</div>\n' +
        '                    <ul>\n' +
        '                        <li><i class="glyphicon glyphicon-user"></i>Unlimited Users </li>\n' +
        '                        <li><i class="glyphicon glyphicon-folder-open"></i>Unlimited Projects </li>\n' +
        '                        <li><i class="glyphicon glyphicon-tower"></i>Lead not Required</li>\n' +
        '                        <li><i class="glyphicon glyphicon-time"></i>No Obligation</li>\n' +
        '                    </ul>\n' +
        '                    <div class="pricing-footer">\n' +
        '                        <a href="#" class="btn button-custom btn-custom-one">ORDER</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- PRICING SECTION END -->\n';

    snippets.bs4portfoliowork = '<!-- WORK SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Works</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pad-bottom">\n' +
        '        <div class="caegories">\n' +
        '            <a href="#" data-filter="*" class="active btn btn-custom btn-custom-two btn-sm">All</a>\n' +
        '            <a href="#" data-filter=".hotsite" class="btn btn-custom btn-custom-two btn-sm">Hotsite</a>\n' +
        '            <a href="#" data-filter=".website" class="btn btn-custom btn-custom-two btn-sm">Website</a>\n' +
        '            <a href="#" data-filter=".iphone" class="btn btn-custom btn-custom-two btn-sm">iPhone</a>\n' +
        '            <a href="#" data-filter=".android" class="btn btn-custom btn-custom-two btn-sm">Android</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row text-center animate-in" data-anim-type="fade-in-up" id="work-div">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/1.jpg">\n' +
        '                <img src="assets/img/work/1.jpg" class="img-responsive img-rounded 1" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Lorem ipsum dolor sit amet</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/2.jpg">\n' +
        '                <img src="assets/img/work/2.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Integer blandit odio congue leo tristique tempus</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 iphone">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/3.jpg">\n' +
        '                <img src="assets/img/work/3.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Morbi mollis lectus et ipsum</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 hotsite">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/4.jpg">\n' +
        '                <img src="assets/img/work/4.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Ut tincidunt tortor sit amet sagittis sagittis</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 website">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/5.jpg">\n' +
        '                <img src="assets/img/work/5.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Aliquam sit amet libero eget nibh varius ultricies</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 android">\n' +
        '        <div class="work-wrapper">\n' +
        '            <a class="fancybox-media" title="Image Title Goes Here" href="assets/img/work/6.jpg">\n' +
        '                <img src="assets/img/work/6.jpg" class="img-responsive img-rounded" alt=""/>\n' +
        '            </a>\n' +
        '            <h4>Nunc eget ipsum eget odio ultrices molestie</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- WORK SECTION END -->\n';

    snippets.bs4portfolioteam = '<!-- TEAM SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Our Team</h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/1.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-star"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Larissa Carpenter</h3>\n' +
        '                <h5> <strong> Chief Executive Officer </strong></h5>\n' +
        '                <p>Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. </p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/2.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-monitor"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> John Doe</h3>\n' +
        '                <h5> <strong> Desktop Developer & Designer </strong></h5>\n' +
        '                <p>Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/3.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-iphone"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> Michael Lordman</h3>\n' +
        '                <h5> <strong> Mobile Developer & Designer </strong></h5>\n' +
        '                <p>Pharetra in mattis molestie, volutpat elementum justo.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">\n' +
        '        <div class="team-wrapper">\n' +
        '            <div class="team-inner" style="background-image: url(\'assets/img/team/4.jpg\')">\n' +
        '                <a href="#" target="_blank"> <i class="ion-briefcase"></i>\n' +
        '                </a>\n' +
        '            </div>\n' +
        '            <div class="description">\n' +
        '                <h3> James Shang</h3>\n' +
        '                <h5> <strong> Sales Representative </strong></h5>\n' +
        '                <p>Cevadis im ampola pa arma uma pindureta. Nam varius eleifend, sed viverra nisl condimentum ut.</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- TEAM SECTION END -->\n';

    snippets.bs4portfoliocontact = '<!-- CONTACT SECTION START -->\n' +
        '<div class="row text-center header animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\n' +
        '        <h3>Contact Details </h3>\n' +
        '        <hr/>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="row animate-in" data-anim-type="fade-in-up">\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>We Are Social</h3>\n' +
        '            <p>\n' +
        '                Aliquam tempus ante placerat, consectetur tellus nec, porttitor nulla.\n' +
        '            </p>\n' +
        '            <div class="social-below">\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Facebook</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Twitter</a>\n' +
        '                <a href="#" class="btn button-custom btn-custom-two"> Google +</a>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Quick Contact</h3>\n' +
        '            <h4><strong>Email : </strong> info@yuordomain.com </h4>\n' +
        '            <h4><strong>Call : </strong> +55-15-2102-6500 </h4>\n' +
        '            <h4><strong>Skype : </strong> YourSkypeHere </h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">\n' +
        '        <div class="contact-wrapper">\n' +
        '            <h3>Address : </h3>\n' +
        '            <h4>Rua Fernando Silva, 190</h4>\n' +
        '            <h4>Brazil</h4>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!--CONTACT SECTION END-->\n';

    snippets.bs4portfoliosignupform = '<!-- SECTION SIGN UP START -->\n' +
        '<!--\n' +
        '    Must use follow <style>\n' +
        '\n' +
        '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n' +
        '-->\n' +
        '<div class="contact-page">\n' +
        '    <div class="container">\n' +
        '        <div class="center">\n' +
        '            <h2>Sign up to be notified</h2>\n' +
        '        </div>\n' +
        '        <div class="row contact-wrap">\n' +
        '            <div class="status alert alert-success" style="display: none"></div>\n' +
        '            <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="[change.php]">\n' +
        '                <div class="wow fadeInDown">\n' +
        '                    <div class="col-sm-5 col-sm-offset-1">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Name *</label>\n' +
        '                            <input type="text" name="name" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Email *</label>\n' +
        '                            <input type="email" name="email" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Phone *</label> \n' +
        '                            <input type="tel" class="form-control" value="" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Company Name</label>\n' +
        '                            <input type="text" class="form-control">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="wow fadeInRight">\n' +
        '                    <div class="col-sm-5">\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Subject *</label>\n' +
        '                            <input type="text" name="subject" class="form-control" required="required">\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <label>Message *</label>\n' +
        '                            <textarea name="message" id="message" required="required" class="form-control" rows="8"></textarea>\n' +
        '                        </div>\n' +
        '                        <div class="form-group">\n' +
        '                            <button type="submit" name="submit" class="btn btn-primary btn-lg" required="required">Submit Message</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<!-- SECTION SIGN UP END -->\n';

    snippets.bs4portfoliocopyright = '<section id="copyright">\n' +
        '    <div class="container">\n' +
        '        <div class="footer-div center">\n' +
        '            &copy; 2015 YourDomain | <a href="http://www.YourDomain.com/" target="_blank">by Your Company Here</a>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</section>    \n';

    snippets.bs4portfoliosignupcss = '        .contact-page {\n' +
        '            padding-top: 20px;\n' +
        '            background: #a02d12;\n' +
        '            margin-top: -10px;\n' +
        '        }\n' +
        '        \n' +
        '        .center {\n' +
        '            font-size: 12px;\n' +
        '            margin-top: 0;\n' +
        '            margin-bottom: 10px;\n' +
        '            text-align: center;\n' +
        '            color: #fff;\n' +
        '            text-transform: uppercase;\n' +
        '        }\n';

    
    // Data Table and Table Smples- datatable.net

    snippets.bs4datatableinit = '$(document).ready(function() {\n' +
        '$(\'#example \').DataTable();\n' +
        '} );\n';

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

    snippets.bs4csvimportjs = '       $(document).ready(function() {\n' +
        '\n' +
        '            if (isAPIAvailable()) {\n' +
        '                $(\'#files\').bind(\'change\', handleFileSelect);\n' +
        '            }\n' +
        '\n' +
        '        });\n' +
        '\n' +
        '        function isAPIAvailable() {\n' +
        '            if (window.File && window.FileReader && window.FileList && window.Blob) {\n' +
        '                return true;\n' +
        '            } else {\n' +
        '                document.writeln(\'The HTML5 APIs used in this form are only available in the following browsers:<br />\');\n' +
        '                document.writeln(\' - Google Chrome: 13.0 or later<br />\');\n' +
        '                document.writeln(\' - Mozilla Firefox: 6.0 or later<br />\');\n' +
        '                document.writeln(\' - Internet Explorer: Not supported (partial support expected in 10.0)<br />\');\n' +
        '                document.writeln(\' - Safari: Not supported<br />\');\n' +
        '                document.writeln(\' - Opera: Not supported\');\n' +
        '                return false;\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '        function handleFileSelect(evt) {\n' +
        '            var files = evt.target.files;\n' +
        '            var file = files[0];\n' +
        '            var reader = new FileReader();\n' +
        '            reader.readAsText(file);\n' +
        '            reader.onload = function(event) {\n' +
        '                var csv = event.target.result;\n' +
        '                var data = $.csv.toArrays(csv);\n' +
        '                var html = \'<thead>\';\n' +
        '                var thend = \'</thead>\';\n' +
        '                var rowtag = \'th\';\n' +
        '\n' +
        '                for (var row in data) {\n' +
        '                    html += \'<tr>\';\n' +
        '                    for (var item in data[row]) {\n' +
        '                        html += \'<\' + rowtag + \'>\' + data[row][item] + \'</\' + rowtag + \'>\';\n' +
        '                    }\n' +
        '                    html += \'</tr>\';\n' +
        '                    html += thend;\n' +
        '                    thend = \'\';\n' +
        '                    rowtag = \'td\';\n' +
        '                }\n' +
        '                $(\'#contents\').html(html);\n' +
        '                $(\'#contents\').DataTable();\n' +
        '            };\n' +
        '            reader.onerror = function() {\n' +
        '                alert(\'Unable to read \' + file.fileName);\n' +
        '            };\n' +
        '        }\n';

    snippets.bs4fileupload = '        <div class="fileinput fileinput-new input-group" data-provides="fileinput">\n' +
        '            <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>\n' +
        '            <span class="input-group-addon btn btn-default btn-file"><span class="fileinput-new">Select file</span><span class="fileinput-exists">Change</span>\n' +
        '            <input id="files" type="file" class="file" name="files[]">\n' +
        '            </span>\n' +
        '            <a href="#" class="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>\n' +
        '        </div>        \n';

    // Bootstrap 4 Media Queries

    /*==========  Mobile First Method  ==========*/

    snippets.bs4mqfmdesktops = '@media only screen and (min-width : 992px) {\n\n}\n';
    snippets.bs4mqfmextrasmalldevices = '@media only screen and (min-width : 480px) {\n\n}';
    snippets.bs4mqfmiphoneretina = '@media only screen and (min-width : 320px) {\n\n}\n';
    snippets.bs4mqfmlargedevices = '@media only screen and (min-width : 1200px) {\n\n}\n';
    snippets.bs4mqfmmediumdevices = '@media only screen and (min-width : 992px) {\n\n}\n';
    snippets.bs4mqfmphones = '@media only screen and (min-width : 480px) {\n\n}';
    snippets.bs4mqfmsmalldevices = '@media only screen and (min-width : 768px) {\n\n}\n';
    snippets.bs4mqfmtablets = '@media only screen and (min-width : 768px) {\n\n}\n';
    snippets.bs4mqfmwidescreen = '@media only screen and (min-width : 1200px) {\n\n}\n';

    /*==========  Non-Mobile First Method  ==========*/

    snippets.bs4mqdesktops = '@media only screen and (max-width : 992px) {\n\n}\n';
    snippets.bs4mqextrasmalldevices = '@media only screen and (max-width : 480px) {\n\n}\n';
    snippets.bs4mqiphoneretina = '@media only screen and (max-width : 320px) {\n\n}\n';
    snippets.bs4mqlargedevices = '@media only screen and (max-width : 1200px) {\n\n}\n';
    snippets.bs4mqmediumdevices = '@media only screen and (max-width : 992px) {\n\n}\n';
    snippets.bs4mqphones = '@media only screen and (max-width : 480px) {\n\n}\n';
    snippets.bs4mqsmalldevices = '@media only screen and (max-width : 768px) {\n\n}\n';
    snippets.bs4mqtablets = '@media only screen and (max-width : 768px) {\n\n}\n';
    snippets.bs4mqwidescreens = '@media only screen and (max-width : 1200px) {\n\n}\n';


    /*============ Jasny Bootstrap ===================*/

    // Jasny Bootstrap
    //
    // Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one.
    //
    // Author: Arnold Daniels - arnold@jasny.net
    // http://www.jasny.net/
    // Project: https://github.com/jasny/bootstrap
    //


    // Jasny CDN
    //--------------------------------------------------------------------------

    snippets.bs4jsncdncss = '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css">\n';
    snippets.bs4jsncdnjs = '<script src="//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js"></script>\n';

    // Bootstrap Minimum Jasny Templates
    //--------------------------------------------------------------------------

    snippets.bs4jsnhtml = "<!DOCTYPE html>\n\n";
    snippets.bs4jsnhtml += "<html lang=\"en\">\n\n";
    snippets.bs4jsnhtml += "<head>\n\n";
    snippets.bs4jsnhtml += "    <meta charset=\"utf-8\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"description\" content=\"\">\n\n";
    snippets.bs4jsnhtml += "    <meta name=\"author\" content=\"\">\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n\n";
    snippets.bs4jsnhtml += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n\n";
    snippets.bs4jsnhtml += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <style>\n\n";
    snippets.bs4jsnhtml += "    <\/style>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n\n";
    snippets.bs4jsnhtml += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n\n";
    snippets.bs4jsnhtml += "    <!--[if lt IE 9]>\n\n";
    snippets.bs4jsnhtml += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <![endif]-->\n\n";
    snippets.bs4jsnhtml += "    \n\n";
    snippets.bs4jsnhtml += "<\/head>\n\n";
    snippets.bs4jsnhtml += "<body>\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "\n\n";
    snippets.bs4jsnhtml += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n\n";
    snippets.bs4jsnhtml += "    \n\n";
    snippets.bs4jsnhtml += "<\/body>\n\n";
    snippets.bs4jsnhtml += "<\/html>\n\n";


    snippets.bs4jsnhtmlnavbar = "<!DOCTYPE html>\n";
    snippets.bs4jsnhtmlnavbar += "<html lang=\"en\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<head>\n";
    snippets.bs4jsnhtmlnavbar += "    <meta charset=\"utf-8\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"description\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbar += "    <meta name=\"author\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbar += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-push\/navmenu-push.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu\/navmenu.css\"-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <style>\n";
    snippets.bs4jsnhtmlnavbar += "        body {\n";
    snippets.bs4jsnhtmlnavbar += "            padding-top: 50px;\n";
    snippets.bs4jsnhtmlnavbar += "        }\n";
    snippets.bs4jsnhtmlnavbar += "        \n";
    snippets.bs4jsnhtmlnavbar += "        .starter-template {\n";
    snippets.bs4jsnhtmlnavbar += "            padding: 40px 15px;\n";
    snippets.bs4jsnhtmlnavbar += "            text-align: center;\n";
    snippets.bs4jsnhtmlnavbar += "        }\n";
    snippets.bs4jsnhtmlnavbar += "    <\/style>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n";
    snippets.bs4jsnhtmlnavbar += "    <!--[if lt IE 9]>\n";
    snippets.bs4jsnhtmlnavbar += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <![endif]-->\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/head>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<body>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n";
    snippets.bs4jsnhtmlnavbar += "        <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbar += "            <div class=\"navbar-header\">\n";
    snippets.bs4jsnhtmlnavbar += "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbar += "                <\/button>\n";
    snippets.bs4jsnhtmlnavbar += "                <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbar += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "            <div class=\"collapse navbar-collapse\">\n";
    snippets.bs4jsnhtmlnavbar += "                <ul class=\"nav navbar-nav\">\n";
    snippets.bs4jsnhtmlnavbar += "                    <li class=\"active\"><a href=\"#\">Home<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                    <li><a href=\"#about\">About<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                    <li><a href=\"#contact\">Contact<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbar += "                <\/ul>\n";
    snippets.bs4jsnhtmlnavbar += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "            <!--\/.nav-collapse -->\n";
    snippets.bs4jsnhtmlnavbar += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "        <div class=\"starter-template\">\n";
    snippets.bs4jsnhtmlnavbar += "            <h1>Bootstrap starter template<\/h1>\n";
    snippets.bs4jsnhtmlnavbar += "            <p class=\"lead\">Use this document as a way to quickly start any new project.\n";
    snippets.bs4jsnhtmlnavbar += "                <br> All you get is this text and a mostly barebones HTML document.<\/p>\n";
    snippets.bs4jsnhtmlnavbar += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/body>\n";
    snippets.bs4jsnhtmlnavbar += "\n";
    snippets.bs4jsnhtmlnavbar += "<\/html>\n";


    snippets.bs4jsnhtmlnavbaroffcanvas = "<!DOCTYPE html>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<html lang=\"en\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<head>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta charset=\"utf-8\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"description\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <meta name=\"author\" content=\"\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <title>Bootstrap Jasny Minimum HTML Template<\/title>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <link rel=\"stylesheet\" media=\"screen\" href=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/css\/bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/dist\/css\/jasny-bootstrap.min.css\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-reveal\/navmenu-reveal.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu-push\/navmenu-push.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--link rel=\"stylesheet\" href=\"http:\/\/www.jasny.net\/bootstrap\/examples\/navmenu\/navmenu.css\"-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <style>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        body {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            padding-top: 80px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            padding-bottom: 20px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        \n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        @media (min-width: 992px) {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            .navbar {\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                padding-right: 15px;\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        }\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <\/style>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!-- Just for debugging purposes. Don't actually copy this line! -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--[if lt IE 9]><script src=\"..\/..\/docs-assets\/js\/ie8-responsive-file-warning.js\"><\/script><![endif]-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <!--[if lt IE 9]>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/html5shiv\/3.7.0\/html5shiv.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "      <script src=\"https:\/\/oss.maxcdn.com\/libs\/respond.js\/1.4.2\/respond.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <![endif]-->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/head>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<body>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <div class=\"container\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <div class=\"navbar navbar-fixed-top navbar-default\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <div class=\"navbar-header\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-target=\".navbar-offcanvas\" data-canvas=\"body\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <span class=\"icon-bar\"><\/span>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <\/button>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <div class=\"navbar-offcanvas offcanvas\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <a class=\"navmenu-brand\" href=\"#\">Project name<\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <ul class=\"nav navbar-nav\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Home<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Projects<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li><a href=\"#\">Portfolio<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li class=\"active\"><a href=\"#\">Our Team<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <li class=\"dropdown\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">More... <b class=\"caret\"><\/b><\/a>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <ul class=\"dropdown-menu\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Action<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Another action<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Something else here<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li class=\"divider\"><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li class=\"dropdown-header\">Nav header<\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">Separated link<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                            <li><a href=\"#\">One more separated link<\/a><\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                        <\/ul>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                    <\/li>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "                <\/ul>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <!-- Main component for a primary marketing message or call to action -->\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <div class=\"jumbotron\">\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <h1>Offcanvas Navbar example<\/h1>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            <p>This example demonstrates using the offcanvas plugin with the navbar.<\/p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "            By default the navbar is show on the right side of the screen. You can show it on the left side instead by adding <code>.navmenu-fixed-left<\/code> to the <code>.navbar-offcanvas<\/code>.\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "        <\/p>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <\/div>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.11.3\/jquery.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/twitter-bootstrap\/3.3.5\/js\/bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "    <script src=\"http:\/\/www.jasny.net\/bootstrap\/dist\/js\/jasny-bootstrap.min.js\"><\/script>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/body>\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "\n";
    snippets.bs4jsnhtmlnavbaroffcanvas += "<\/html>\n";


    // Container
    //-------------------------------------------------------------------------------------

    // Added .container-smooth a container to use the same max-width for all viewport sizes. This means that the container size won't jump at media query breakpoints.
    snippets.bs4jsncontainer = '<div class="container container-smooth">\n\n</div>\n\n\n';

    // Buttons
    //-------------------------------------------------------------------------------------

    // Standard button with label
    snippets.bs4jsnbtnleft = '<button type="button" class="btn btn-labeled btn-default"><span class="btn-label"><i class="glyphicon glyphicon-arrow-left"></i></span>Left</button>\n';

    // Standard button with label on the right side
    snippets.bs4jsnbtnright = '<button type="button" class="btn btn-labeled btn-default">Right<span class="btn-label btn-label-right"><i class="glyphicon glyphicon-arrow-right"></i></span></button>\n';

    // Success button with label
    snippets.bs4jsnbtnsuccess = '<button type="button" class="btn btn-labeled btn-success"><span class="btn-label"><i class="glyphicon glyphicon-ok"></i></span>Success</button>\n';

    // Danger button with label
    snippets.bs4jsnbtndanger = '<button type="button" class="btn btn-labeled btn-danger"><span class="btn-label"><i class="glyphicon glyphicon-remove"></i></span>Danger</button>\n';


    // Navmenu
    //--------------------------------------------------------------------------------------


    // Body padding required
    // The fixed navmenu will overlay your other content, unless you add padding to the left or right of the <body>. Try out your own values or use our snippet below. Tip: By default, the navmenu is 300px wide.
    //
    // @media (min-width: 992px) {
    //   body {
    //     padding-left: 300px;
    //  }
    // }
    snippets.bs4jsnnavmenumediaquery = "@media (min-width: 992px) {\n";
    snippets.bs4jsnnavmenumediaquery += "  body {\n";
    snippets.bs4jsnnavmenumediaquery += "    padding-left: 300px;\n";
    snippets.bs4jsnnavmenumediaquery += "  }\n";
    snippets.bs4jsnnavmenumediaquery += "}\n";

    // Default

    snippets.bs4jsnnavmenu = "<nav class=\"navmenu navmenu-default\" role=\"navigation\">\n\n";
    snippets.bs4jsnnavmenu += "  <a class=\"navmenu-brand\" href=\"#\">Brand<\/a>\n\n";
    snippets.bs4jsnnavmenu += "\n\n";
    snippets.bs4jsnnavmenu += "  <ul class=\"nav navmenu-nav\">\n\n";
    snippets.bs4jsnnavmenu += "    <li class=\"active\"><a href=\"#\">Link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "    <li><a href=\"#\">Link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "    <li class=\"dropdown\">\n\n";
    snippets.bs4jsnnavmenu += "      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n\n";
    snippets.bs4jsnnavmenu += "      <ul class=\"dropdown-menu navmenu-nav\" role=\"menu\">\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Action<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Another action<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Something else here<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">Separated link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "        <li><a href=\"#\">One more separated link<\/a><\/li>\n\n";
    snippets.bs4jsnnavmenu += "      <\/ul>\n\n";
    snippets.bs4jsnnavmenu += "    <\/li>\n\n";
    snippets.bs4jsnnavmenu += "  <\/ul>\n\n";
    snippets.bs4jsnnavmenu += "<\/nav>\n\n";


    // navmenu BODY
    var navmenubody = "        <a class=\"navmenu-brand visible-md visible-lg\" href=\"#\">Project name<\/a>\n";
    navmenubody += "        <ul class=\"nav navmenu-nav\">\n";
    navmenubody += "            <li class=\"active\"><a href=\"#\">Home<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Components<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Programming<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Tutorials<\/a><\/li>\n";
    navmenubody += "        <\/ul>\n";
    navmenubody += "        <ul class=\"nav navmenu-nav\">\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li><a href=\"#\">Link<\/a><\/li>\n";
    navmenubody += "            <li class=\"dropdown\">\n";
    navmenubody += "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n";
    navmenubody += "                <ul class=\"dropdown-menu navmenu-nav\">\n";
    navmenubody += "                    <li><a href=\"#\">Action<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Another action<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Something else here<\/a><\/li>\n";
    navmenubody += "                    <li class=\"divider\"><\/li>\n";
    navmenubody += "                    <li class=\"dropdown-header\">Nav header<\/li>\n";
    navmenubody += "                    <li><a href=\"#\">Separated link<\/a><\/li>\n";
    navmenubody += "                    <li><a href=\"#\">One more separated link<\/a><\/li>\n";
    navmenubody += "                <\/ul>\n";
    navmenubody += "            <\/li>\n";
    navmenubody += "        <\/ul>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";
    navmenubody += "    <div class=\"navbar navbar-default navbar-fixed-top hidden-md hidden-lg\">\n";
    navmenubody += "        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-target=\".navmenu\">\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "            <span class=\"icon-bar\"><\/span>\n";
    navmenubody += "        <\/button>\n";
    navmenubody += "        <a class=\"navbar-brand\" href=\"#\">Project name<\/a>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";
    navmenubody += "    <div class=\"container\">\n";
    navmenubody += "        <div class=\"page-header\">\n";
    navmenubody += "            <h1>Navmenu Template<\/h1>\n";
    navmenubody += "        <\/div>\n";
    navmenubody += "        <p class=\"lead\">This example shows the navmenu element. If the viewport is <b>less than 992px<\/b> the menu will be placed the off canvas and will be shown with a slide in effect.<\/p>\n";
    navmenubody += "        <p>Also take a look at the examples for a navmenu with <a href=\"..\/navmenu-push\">push effect<\/a> and <a href=\"..\/navmenu-reveal\">reveal effect<\/a>.<\/p>\n";
    navmenubody += "    <\/div>\n";
    navmenubody += "\n";

    var navmenuoffcanvas = "        <a class=\"navmenu-brand\" href=\"#\">Project name<\/a>\n\n";
    navmenuoffcanvas += "        <ul class=\"nav navmenu-nav\">\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Home<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Components<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li class=\"active\"><a href=\"#\">Programming<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Tutorials<\/a><\/li>\n\n";
    navmenuoffcanvas += "        <\/ul>\n\n";
    navmenuoffcanvas += "        <ul class=\"nav navmenu-nav\">\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li><a href=\"#\">Link<\/a><\/li>\n\n";
    navmenuoffcanvas += "            <li class=\"dropdown\">\n\n";
    navmenuoffcanvas += "                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"><\/b><\/a>\n\n";
    navmenuoffcanvas += "                <ul class=\"dropdown-menu navmenu-nav\">\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Action<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Another action<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Something else here<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li class=\"divider\"><\/li>\n\n";
    navmenuoffcanvas += "                    <li class=\"dropdown-header\">Nav header<\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">Separated link<\/a><\/li>\n\n";
    navmenuoffcanvas += "                    <li><a href=\"#\">One more separated link<\/a><\/li>\n\n";
    navmenuoffcanvas += "                <\/ul>\n\n";
    navmenuoffcanvas += "            <\/li>\n\n";
    navmenuoffcanvas += "        <\/ul>\n\n";
    navmenuoffcanvas += "    <\/div>\n\n";
    navmenuoffcanvas += "    <div class=\"canvas\">\n\n";
    navmenuoffcanvas += "        <div class=\"navbar navbar-default navbar-fixed-top\">\n\n";
    navmenuoffcanvas += "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"offcanvas\" data-recalc=\"false\" data-target=\".navmenu\" data-canvas=\".canvas\">\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "                <span class=\"icon-bar\"><\/span>\n\n";
    navmenuoffcanvas += "            <\/button>\n\n";
    navmenuoffcanvas += "        <\/div>\n\n";
    navmenuoffcanvas += "\n\n";
    navmenuoffcanvas += "        <div class=\"container\">\n\n";
    navmenuoffcanvas += "            <div class=\"page-header\">\n\n";
    navmenuoffcanvas += "                <h1>Off Canvas Reveal Menu Template<\/h1>\n\n";
    navmenuoffcanvas += "            <\/div>\n\n";
    navmenuoffcanvas += "            <p class=\"lead\">This example demonstrates the use of the offcanvas plugin with a reveal effect.<\/p>\n\n";
    navmenuoffcanvas += "            <p>On the contrary of the push effect, the menu doesn't move with the canvas.<\/p>\n\n";
    navmenuoffcanvas += "            <p>You get the reveal effect by wrapping the content in a div and setting the <code>canvas<\/code> option to target that div.<\/p>\n\n";
    navmenuoffcanvas += "            <p>Note that in this example, the navmenu doesn't have the <code>offcanvas<\/code> class, but is placed under the canvas by setting the <code>z-index<\/code>.<\/p>\n\n";
    navmenuoffcanvas += "            <p>Also take a look at the examples for a navmenu with <a href=\"..\/navmenu\">slide in effect<\/a> and <a href=\"..\/navmenu-push\">push effect<\/a>.<\/p>\n\n";
    navmenuoffcanvas += "        <\/div>\n\n";
    navmenuoffcanvas += "\n\n";

    // Fixed to left or right
    // Add either .navmenu-fixed-left or .navmenu-fixed-right.

    snippets.bs4jsnnavmenufixedleft = "    <div class=\"navmenu navmenu-default navmenu-fixed-left offcanvas-sm\">" + navmenubody;
    snippets.bs4jsnnavmenufixedright = "    <div class=\"navmenu navmenu-default navmenu-fixed-right offcanvas-sm\">" + navmenubody;
    snippets.bs4jsnnavmenuoffcanvasreveal = "    <div class=\"navmenu navmenu-default navmenu-fixed-left\">\n" + navmenuoffcanvas;
    snippets.bs4jsnnavmenuoffcanvaspush = "    <div class=\"navmenu navmenu-default navmenu-fixed-left offcanvas\">" + navmenuoffcanvas;

    // Alerts
    // --------------------------------------------------------------------------------------------

    // Fixed to top / bottom
    // Add .alert-fixed-top top stick the alert on top of your page. Use .alert-fixed-bottom for the bottom.

    var alertbody = '\n<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
        '<strong>ALERT! </strong>Your text comes here\n' +
        '</div>\n\n';

    snippets.bs4jsnalerttop = '<div class="alert alert-fixed-top">' + alertbody;
    snippets.bs4jsnalertbottom = '<div class="alert alert-fixed-bottom">' + alertbody;

    snippets.bs4jsnalertdangertop = '<div class="alert alert-danger alert-fixed-top">' + alertbody;
    snippets.bs4jsnalertdangerbottom = '<div class="alert alert-danger alert-fixed-bottom">' + alertbody;

    snippets.bs4jsnalertwarningtop = '<div class="alert alert-warning alert-fixed-top">' + alertbody;
    snippets.bs4jsnalertwarningbottom = '<div class="alert alert-warning alert-fixed-bottom">' + alertbody;

    snippets.bs4jsnalertinfotop = '<div class="alert alert-info alert-fixed-top">' + alertbody;
    snippets.bs4jsnalertinfobottom = '<div class="alert alert-info alert-fixed-bottom">' + alertbody;

    snippets.bs4jsnalertsuccesstop = '<div class="alert alert-success alert-fixed-top">' + alertbody;
    snippets.bs4jsnalertsuccessbottom = '<div class="alert alert-success alert-fixed-bottom">' + alertbody;

    // Table - ROWLINK

    snippets.bs4jsntablerowlink = "    <div class=\"container\">\n";
    snippets.bs4jsntablerowlink += "        <table class=\"table table-striped table-bordered table-hover\">\n";
    snippets.bs4jsntablerowlink += "            <thead>\n";
    snippets.bs4jsntablerowlink += "                <tr>\n";
    snippets.bs4jsntablerowlink += "                    <th>Name<\/th>\n";
    snippets.bs4jsntablerowlink += "                    <th>Company<\/th>\n";
    snippets.bs4jsntablerowlink += "                    <th>Email<\/th>\n";
    snippets.bs4jsntablerowlink += "                    <th>URL<\/th>\n";
    snippets.bs4jsntablerowlink += "                <\/tr>\n";
    snippets.bs4jsntablerowlink += "            <\/thead>\n";
    snippets.bs4jsntablerowlink += "            <tbody data-link=\"row\" class=\"rowlink\">\n";
    snippets.bs4jsntablerowlink += "                <tr>\n";
    snippets.bs4jsntablerowlink += "                    <td><a href=\"#inputmask\">Carson<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>Magnis Dis Parturient Ltd<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>magna@elementumategestas.edu<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td class=\"rowlink-skip\"><a href=\"#\">elementumategestas.edu<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                <\/tr>\n";
    snippets.bs4jsntablerowlink += "                <tr>\n";
    snippets.bs4jsntablerowlink += "                    <td><a href=\"#inputmask\">Salvador<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>Orci Corp.<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>elit.Nulla@nunc.org<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td class=\"rowlink-skip\"><a href=\"#\">nunc.org<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                <\/tr>\n";
    snippets.bs4jsntablerowlink += "                <tr>\n";
    snippets.bs4jsntablerowlink += "                    <td><a href=\"#inputmask\">Jared<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>Nibh Enim Incorporated<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>amet@dapibusrutrumjusto.co.uk<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td class=\"rowlink-skip\"><a href=\"#\">dapibusrutrumjusto.co.uk<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                <\/tr>\n";
    snippets.bs4jsntablerowlink += "                <tr>\n";
    snippets.bs4jsntablerowlink += "                    <td>Carson<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>Gravida Sagittis Associates<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td>molestie.dapibus.ligula@Vivamus.ca<\/td>\n";
    snippets.bs4jsntablerowlink += "                    <td class=\"rowlink-skip\"><a href=\"#\">Vivamus.ca<\/a><\/td>\n";
    snippets.bs4jsntablerowlink += "                <\/tr>\n";
    snippets.bs4jsntablerowlink += "\n";
    snippets.bs4jsntablerowlink += "            <\/tbody>\n";
    snippets.bs4jsntablerowlink += "        <\/table>\n";
    snippets.bs4jsntablerowlink += "    <\/div>\n";
    snippets.bs4jsntablerowlink += "\n";

    // Data Entry Mask

    snippets.bs4jsninputmask = '<input type="text" class="form-control" data-mask="999-99-999-9999-9" placeholder="ISBN">\n';

    snippets.bs4jsnfileselect = "    <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnfileselect += "        <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"glyphicon glyphicon-file fileinput-exists\"><\/i> <span class=\"fileinput-filename\"><\/span><\/div>\n";
    snippets.bs4jsnfileselect += "        <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Select file<\/span><span class=\"fileinput-exists\">Change<\/span>\n";
    snippets.bs4jsnfileselect += "        <input type=\"file\" name=\"...\">\n";
    snippets.bs4jsnfileselect += "        <\/span>\n";
    snippets.bs4jsnfileselect += "        <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remove<\/a>\n";
    snippets.bs4jsnfileselect += "    <\/div>\n";
    snippets.bs4jsnfileselect += "\n";

    snippets.bs4jsnbtnfileselect = "    <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnbtnfileselect += "  <span class=\"btn btn-default btn-file\"><span class=\"fileinput-new\">Select file<\/span><span class=\"fileinput-exists\">Change<\/span><input type=\"file\" name=\"...\"><\/span>\n";
    snippets.bs4jsnbtnfileselect += "  <span class=\"fileinput-filename\"><\/span>\n";
    snippets.bs4jsnbtnfileselect += "  <a href=\"#\" class=\"close fileinput-exists\" data-dismiss=\"fileinput\" style=\"float: none\">&times;<\/a>\n";
    snippets.bs4jsnbtnfileselect += "<\/div>\n";

    snippets.bs4jsnuploadimage = "<div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n";
    snippets.bs4jsnuploadimage += "  <div class=\"fileinput-preview thumbnail\" data-trigger=\"fileinput\" style=\"width: 200px; height: 150px;\"><\/div>\n";
    snippets.bs4jsnuploadimage += "  <div>\n";
    snippets.bs4jsnuploadimage += "    <span class=\"btn btn-default btn-file\"><span class=\"fileinput-new\">Select image<\/span><span class=\"fileinput-exists\">Change<\/span><input type=\"file\" name=\"...\"><\/span>\n";
    snippets.bs4jsnuploadimage += "    <a href=\"#\" class=\"btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remove<\/a>\n";
    snippets.bs4jsnuploadimage += "  <\/div>\n";
    snippets.bs4jsnuploadimage += "<\/div>\n";

    module.exports = snippets;
});
