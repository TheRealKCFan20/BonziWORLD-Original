(function() {
	var originalYoutube = Bonzi.prototype.youtube;
	var originalClearDialog = Bonzi.prototype.clearDialog;
	var originalTalk = Bonzi.prototype.talk;
	var originalUpdateDialog = Bonzi.prototype.updateDialog;

	function clearVideoBubble(bonzi) {
		bonzi.$dialog
			.removeClass("youtube-bubble youtube-bubble-clamped")
			.children(".youtube-bubble-tail")
			.remove();
		bonzi.$dialog.css({
			left: "",
			right: ""
		});
	}

	Bonzi.prototype.youtube = function(vid) {
		originalYoutube.call(this, vid);
		if (!this.mute) {
			this.$dialog.addClass("youtube-bubble");
			this.updateDialog();
		}
	};

	Bonzi.prototype.clearDialog = function() {
		clearVideoBubble(this);
		return originalClearDialog.apply(this, arguments);
	};

	Bonzi.prototype.talk = function() {
		clearVideoBubble(this);
		return originalTalk.apply(this, arguments);
	};

	Bonzi.prototype.updateDialog = function() {
		var isVideoBubble = this.$dialog.hasClass("youtube-bubble");
		if (isVideoBubble) {
			this.$dialog.css({
				left: "",
				right: ""
			});
		}

		originalUpdateDialog.apply(this, arguments);
		if (!isVideoBubble)
			return;

		var viewportWidth = this.$container.width();
		var bubbleWidth = this.$dialog.outerWidth();
		var maxLeft = Math.max(0, viewportWidth - bubbleWidth - 1);
		var currentLeft = this.$dialog.offset().left;
		var bubbleLeft = Math.max(0, Math.min(currentLeft, maxLeft));
		if (Math.abs(currentLeft - bubbleLeft) > 0.5) {
			this.$dialog.css({
				left: bubbleLeft - this.x,
				right: "auto"
			});

			this.$dialog.addClass("youtube-bubble-clamped");
			if (this.$dialog.hasClass("bubble-bottom") || this.$dialog.hasClass("bubble-top")) {
				var tail = this.$dialog.children(".youtube-bubble-tail");
				if (!tail.length)
					tail = $("<span class='youtube-bubble-tail' aria-hidden='true'></span>").appendTo(this.$dialog);

				var tailLeft = this.x + this.data.size.x / 2 - bubbleLeft - 14;
				tailLeft = Math.max(0, Math.min(tailLeft, bubbleWidth - 28));
				tail.css("left", tailLeft + "px");
			}
		} else {
			this.$dialog
				.removeClass("youtube-bubble-clamped")
				.children(".youtube-bubble-tail")
				.remove();
		}
	};
})();
