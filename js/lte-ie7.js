/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'TS\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-teachscape' : '&#xe000;',
			'icon-teachscape-logo' : '&#xe001;',
			'icon-focus' : '&#xe002;',
			'icon-reflect' : '&#xe003;',
			'icon-learn' : '&#xe004;',
			'icon-advance' : '&#xe005;',
			'icon-walk' : '&#xe006;',
			'icon-classroom' : '&#xe007;',
			'icon-ok' : '&#xe008;',
			'icon-remove' : '&#xe009;',
			'icon-trash' : '&#xe00a;',
			'icon-home' : '&#xe00b;',
			'icon-lock' : '&#xe00c;',
			'icon-pencil' : '&#xe00d;',
			'icon-check' : '&#xe00e;',
			'icon-facebook-sign' : '&#xe00f;',
			'icon-calendar' : '&#xe010;',
			'icon-warning-sign' : '&#xe011;',
			'icon-linkedin-sign' : '&#xe012;',
			'icon-minus-sign-alt' : '&#xe013;',
			'icon-plus-sign' : '&#xe014;',
			'icon-youtube-play' : '&#xe015;',
			'icon-twitter' : '&#xe016;',
			'icon-new-tab' : '&#xe017;',
			'icon-spinner' : '&#xe018;',
			'icon-download' : '&#xe019;',
			'icon-list-alt' : '&#xe01a;',
			'icon-file' : '&#xe01b;',
			'icon-paste' : '&#xe01c;',
			'icon-caret-right' : '&#xe01d;',
			'icon-caret-down' : '&#xe01e;',
			'icon-caret-up' : '&#xe01f;',
			'icon-info' : '&#xe020;',
			'icon-check-empty' : '&#xe021;',
			'icon-picture' : '&#xe022;',
			'icon-headphones' : '&#xe023;',
			'icon-circle' : '&#xe024;',
			'icon-circle-blank' : '&#xe025;',
			'icon-sort-by-alphabet' : '&#xe026;',
			'icon-sort-by-alphabet-alt' : '&#xe027;',
			'icon-sort-by-order' : '&#xe028;',
			'icon-sort-by-order-alt' : '&#xe029;',
			'icon-certificate' : '&#xe02a;',
			'icon-table' : '&#xe02b;',
			'icon-folder-close' : '&#xe02c;',
			'icon-film' : '&#xe02d;',
			'icon-facetime-video' : '&#xe02e;',
			'icon-user' : '&#xe02f;',
			'icon-search' : '&#xe030;',
			'icon-star' : '&#xe031;',
			'icon-exclamation-sign' : '&#xe032;',
			'icon-refresh' : '&#xe033;',
			'icon-ban-circle' : '&#xe034;',
			'icon-remove-circle' : '&#xe035;',
			'icon-question-sign' : '&#xe036;',
			'icon-chevron-right' : '&#xe037;',
			'icon-chevron-left' : '&#xe038;',
			'icon-chevron-up' : '&#xe039;',
			'icon-chevron-down' : '&#xe03a;',
			'icon-users' : '&#xe03b;',
			'icon-dashboard' : '&#xe03c;',
			'icon-star-empty' : '&#xe03d;',
			'icon-plus' : '&#xe03e;',
			'icon-minus' : '&#xe03f;',
			'icon-asterisk' : '&#xe040;',
			'icon-quotes-left' : '&#xe041;',
			'icon-cog' : '&#xe042;',
			'icon-chevron-sign-up' : '&#xf139;',
			'icon-chevron-sign-down' : '&#xf13a;',
			'icon-spell-check' : '&#xe043;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};