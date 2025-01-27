(function ($) {
	"use strict";
  
	// Page loading animation
	$(window).on("load", function () {
	  $("#js-preloader").addClass("loaded");
	});
  
	$(window).scroll(function () {
	  var scroll = $(window).scrollTop();
	  var box = $(".header-text").height();
	  var header = $("header").height();
  
	  if (scroll >= box - header) {
		$("header").addClass("background-header");
	  } else {
		$("header").removeClass("background-header");
	  }
	});
  
	$(".owl-banner").owlCarousel({
	  center: true,
	  items: 1,
	  loop: true,
	  nav: true,
	  dots: true,
	  navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  ],
	  margin: 30,
	  responsive: {
		992: {
		  items: 1,
		},
		1200: {
		  items: 1,
		},
	  },
	});
  
	var width = $(window).width();
	$(window).resize(function () {
	  if (width > 767 && $(window).width() < 767) {
		location.reload();
	  } else if (width < 767 && $(window).width() > 767) {
		location.reload();
	  }
	});
  
	const elem = document.querySelector(".properties-box");
	const filtersElem = document.querySelector(".properties-filter");
	if (elem) {
	  const rdn_events_list = new Isotope(elem, {
		itemSelector: ".properties-items",
		layoutMode: "masonry",
	  });
	  if (filtersElem) {
		filtersElem.addEventListener("click", function (event) {
		  if (!matchesSelector(event.target, "a")) {
			return;
		  }
		  const filterValue = event.target.getAttribute("data-filter");
		  rdn_events_list.arrange({
			filter: filterValue,
		  });
		  filtersElem
			.querySelector(".is_active")
			.classList.remove("is_active");
		  event.target.classList.add("is_active");
		  event.preventDefault();
		});
	  }
	}
  
	// Menu Dropdown Toggle
	if ($(".menu-trigger").length) {
	  $(".menu-trigger").on("click", function () {
		$(this).toggleClass("active");
		$(".header-area .nav").slideToggle(200);
	  });
	}
  
	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on("click", function () {
	  if (
		location.pathname.replace(/^\//, "") ==
		  this.pathname.replace(/^\//, "") &&
		location.hostname == this.hostname
	  ) {
		var target = $(this.hash);
		target = target.length
		  ? target
		  : $("[name=" + this.hash.slice(1) + "]");
		if (target.length) {
		  var width = $(window).width();
		  if (width < 991) {
			$(".menu-trigger").removeClass("active");
			$(".header-area .nav").slideUp(200);
		  }
		  $("html,body").animate(
			{
			  scrollTop: target.offset().top - 80,
			},
			700
		  );
		  return false;
		}
	  }
	});
  
	// Page loading animation
	$(window).on("load", function () {
	  if ($(".cover").length) {
		$(".cover").parallax({
		  imageSrc: $(".cover").data("image"),
		  zIndex: "1",
		});
	  }
  
	  $("#preloader").animate(
		{
		  opacity: "0",
		},
		600,
		function () {
		  setTimeout(function () {
			$("#preloader").css("visibility", "hidden").fadeOut();
		  }, 300);
		}
	  );
	});
  
	// Language Switch Functionality
	function toggleLanguage() {
	  const translations = {
		en: {
		  heading: "Contact Us",
		  subheading: "Get In Touch With Us",
		  description: `Dreaming of a luxurious escape and thrilling surf adventures? Contact us at <b>SURF VILLA - HIKKADUWA</b> to book your unforgettable stay. Whether you're seeking relaxation on pristine beaches, exploring the local culture, or catching the perfect wave, our experienced team is here to assist you.
		  <br><br><b>We offer a range of services, including:</b><br><br>
		  <strong>>Luxury Villa Rentals:</strong> Experience the epitome of comfort and style in our stunning villas.<br>
		  <strong>>Surfing Tours:</strong> Guided surf excursions with expert instructors, catering to all skill levels.<br>
		  <strong>>Personalized Concierge Services:</strong> Let us arrange transportation, tours, and other activities to enhance your stay.`,
		  phoneLabel: "Phone Number",
		  emailLabel: "Business Email",
		  footerText: "Developed by: Pathum_Chamod",
		  form: {
			fullName: "Full Name",
			fullNamePlaceholder: "Your Name...",
			emailAddress: "Email Address",
			emailPlaceholder: "Your E-mail...",
			subject: "Subject",
			subjectPlaceholder: "Subject...",
			message: "Message",
			messagePlaceholder: "Your Message",
			sendMessage: "Send Message",
		  },
		},
		ja: {
		  heading: "お問い合わせ",
		  subheading: "私たちと連絡を取りましょう",
		  description: `贅沢な休暇とエキサイティングなサーフ冒険を夢見ていますか？<b>SURF VILLA - HIKKADUWA</b> にお問い合わせいただき、忘れられない滞在を予約してください。穏やかなビーチでのリラクゼーション、地元文化の探訪、または完璧な波を追い求める冒険をお探しの方々を、私たちの経験豊富なチームがサポートします。
		  <br><br><b>私たちは次のようなサービスを提供しています:</b><br><br>
		  <strong>>高級ヴィラのレンタル:</strong> 豪華でスタイリッシュなヴィラで快適さとスタイルの最高峰を体験してください。<br>
		  <strong>>サーフィンツアー:</strong> 経験豊富なインストラクターによるすべてのスキルレベルに対応するサーフツアー。<br>
		  <strong>>パーソナライズドコンシェルジュサービス:</strong> 交通機関、ツアー、その他のアクティビティの手配をお任せください。`,
		  phoneLabel: "電話番号",
		  emailLabel: "ビジネスメール",
		  footerText: "開発者: Pathum_Chamod",
		  form: {
			fullName: "氏名",
			fullNamePlaceholder: "お名前...",
			emailAddress: "メールアドレス",
			emailPlaceholder: "あなたのメール...",
			subject: "件名",
			subjectPlaceholder: "件名...",
			message: "メッセージ",
			messagePlaceholder: "あなたのメッセージ",
			sendMessage: "メッセージを送信",
		  },
		},
	  };
  
	  const isJapanese = document.getElementById("languageSwitch").checked;
	  const lang = isJapanese ? "ja" : "en";
  
	  // Update text dynamically
	  document.querySelector("h3").innerText = translations[lang].heading;
	  document.querySelector(".section-heading h2").innerText =
		translations[lang].subheading;
	  document.querySelector(".section-heading p").innerHTML =
		translations[lang].description;
	  document.querySelector(".phone h6 span").innerText =
		translations[lang].phoneLabel;
	  document.querySelector(".email h6 span").innerText =
		translations[lang].emailLabel;
	  document.querySelector("footer p").innerHTML = `Copyright © 2025 Surf Villa All rights reserved.<br>${translations[lang].footerText}`;
  
	  // Update form labels and placeholders
	  document.querySelector("label[for='name']").innerText =
		translations[lang].form.fullName;
	  document.getElementById("name").placeholder =
		translations[lang].form.fullNamePlaceholder;
	  document.querySelector("label[for='email']").innerText =
		translations[lang].form.emailAddress;
	  document.getElementById("email").placeholder =
		translations[lang].form.emailPlaceholder;
	  document.querySelector("label[for='subject']").innerText =
		translations[lang].form.subject;
	  document.getElementById("subject").placeholder =
		translations[lang].form.subjectPlaceholder;
	  document.querySelector("label[for='message']").innerText =
		translations[lang].form.message;
	  document.getElementById("message").placeholder =
		translations[lang].form.messagePlaceholder;
	  document.getElementById("form-submit").innerText =
		translations[lang].form.sendMessage;
  
	  // Update the language label dynamically
	  const languageLabel = document.getElementById("language-label");
  if (isJapanese) {
    languageLabel.innerText = "EN"; // Show "EN" when toggled on.
    languageLabel.style.color = "black";
  } else {
    languageLabel.innerText = "JP"; // Show "JP" when toggled off.
    languageLabel.style.color = "black";
  }
	}
  
	// Attach the language toggle function to the global window object
	window.toggleLanguage = toggleLanguage;
  })(window.jQuery);
  