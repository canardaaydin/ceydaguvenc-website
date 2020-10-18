jQuery(document).ready(function () {

	/* Use backticks instead of <code> for the Code button in the editor */
	if (typeof (edButtons) !== 'undefined') {
		edButtons[110] = new QTags.TagButton('code', 'code', '`', '`', 'c');
		QTags._buttonsInit();
	}

	/* Tab from topic title */
	jQuery('#bbp_topic_title').bind('keydown.editor-focus', function (e) {
		if (e.which !== 9)
			return;

		if (!e.ctrlKey && !e.altKey && !e.shiftKey) {
			if (typeof (tinymce) !== 'undefined') {
				if (!tinymce.activeEditor.isHidden()) {
					var editor = tinymce.activeEditor.editorContainer;
					jQuery('#' + editor + ' td.mceToolbar > a').focus();
				} else {
					jQuery('textarea.bbp-the-content').focus();
				}
			} else {
				jQuery('textarea.bbp-the-content').focus();
			}

			e.preventDefault();
		}
	});

	/* Shift + tab from topic tags */
	jQuery('#bbp_topic_tags').bind('keydown.editor-focus', function (e) {
		if (e.which !== 9)
			return;

		if (e.shiftKey && !e.ctrlKey && !e.altKey) {
			if (typeof (tinymce) !== 'undefined') {
				if (!tinymce.activeEditor.isHidden()) {
					var editor = tinymce.activeEditor.editorContainer;
					jQuery('#' + editor + ' td.mceToolbar > a').focus();
				} else {
					jQuery('textarea.bbp-the-content').focus();
				}
			} else {
				jQuery('textarea.bbp-the-content').focus();
			}

			e.preventDefault();
		}
	});
});


document.write('
	< footer class= "contacts_wrap scheme_light" >
	<div class="contacts_wrap_inner">
		<div class="content_wrap">
			<div class="logo"> <a href="index.html"> <img src="./images/logo_280_134.png" class="logo_footer" alt=""> </a> </div>
				<div class="contacts_address">
					<address class="address_right"> Telefon: <a href="tel:+905321743436">0532 174 34 36</a> </address>
					<address class="address_left"> Şirinyalı Mahallesi, İsmet Gökşen Caddesi.<br> Esra apt, no:111/6 Muratpaşa Antalya </address>
						<br>
							<adress class="adress_left">
            
         </div>
      </div>
   </div>
</footer>
				<div class="copyright_wrap copyright_style_text scheme_dark">
					<div class="copyright_wrap_inner">
						<div class="content_wrap">
							<div class="copyright_text"> <a target="_blank" class="copyright_link">Designed by Can Arda Aydın</a> </div>
						</div>
					</div>
				</div>
')