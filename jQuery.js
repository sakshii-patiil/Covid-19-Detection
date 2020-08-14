//Below jQuery code of index.html

$(document).ready(function(){
	$("#home").click(function(){
		$(".popup-container-loginO").css("display","none");
		$(".popup-container-signupO").css("display","none");
		$(".popup-container-loginC").css("display","none");
		$(".popup-container-signupC").css("display","none");
		$("#bg-img").css({"filter":"blur(0)"});
	})

	$(".loginO").click(function(){
		$(".loginO").addClass("active");
		$(".popup-container-loginO").fadeIn("fast");
		$(".popup-container-loginO").css("display","flex");
		$(".popup-container-signupO").css("display","none");
		$(".popup-container-loginC").css("display","none");
		$(".popup-container-signupC").css("display","none");
		$("#bg-img").css({"filter":"blur(10px)"});
		$(".loginC").removeClass("active");
		$(".signupO").removeClass("active");
		$(".signupC").removeClass("active");
	});
	$("#loginO-button").click(function(){
		window.location.href="loginO.html";
	})
	$(".close-button-loginO").click(function(){
		$(".popup-container-loginO").fadeOut("fast");
		$("#bg-img").css({"filter":"blur(0)"});
		$(".loginO").removeClass("active");
	})

	$(".signupO").click(function(){
		$(this).addClass("active");
		$(".popup-container-signupO").fadeIn("fast");
		$(".popup-container-signupO").css("display","flex");
		$(".popup-container-loginO").css("display","none");
		$(".popup-container-loginC").css("display","none");
		$(".popup-container-signupC").css("display","none");
		$("#bg-img").css({"filter":"blur(10px)"});
		$(".loginO").removeClass("active");
		$(".loginC").removeClass("active");
		$(".signupC").removeClass("active");
	});
	$("#signupO-button").click(function(){
		window.location.href="signupO.html";
	})
	$(".close-button-signupO").click(function(){
		$(".popup-container-signupO").fadeOut("fast");
		$("#bg-img").css({"filter":"blur(0)"});
		$(".signupO").removeClass("active");
	})

	$(".loginC").click(function(){
		$(this).addClass("active");
		$(".popup-container-loginC").fadeIn("fast");
		$(".popup-container-loginC").css("display","flex");
		$(".popup-container-loginO").css("display","none");
		$(".popup-container-signupO").css("display","none");
		$(".popup-container-signupC").css("display","none");
		$("#bg-img").css({"filter":"blur(10px)"});
		$(".loginO").removeClass("active");
		$(".signupC").removeClass("active");
		$(".signupO").removeClass("active");
	});
	$("#loginC-button").click(function(){
		window.location.href="company.html";
	})
	$(".close-button-loginC").click(function(){
		$(".popup-container-loginC").fadeOut("fast");
		$("#bg-img").css({"filter":"blur(0)"});
		$(".loginC").removeClass("active");
	})

	$(".signupC").click(function(){
		$(this).addClass("active");
		$(".popup-container-signupC").fadeIn("fast");
		$(".popup-container-signupC").css("display","flex");
		$(".popup-container-loginC").css("display","none");
		$(".popup-container-loginO").css("display","none");
		$(".popup-container-signupO").css("display","none");
		$("#bg-img").css({"filter":"blur(10px)"});
		$(".loginO").removeClass("active");
		$(".loginC").removeClass("active");
		$(".signupO").removeClass("active");
	});
	$("#signupC-button").click(function(){
		window.location.href="company.html";
	})
	$(".close-button-signupC").click(function(){
		$(".popup-container-signupC").fadeOut("fast");
		$("#bg-img").css({"filter":"blur(0)"});
		$(".signupC").removeClass("active");
	})

})


//Below jQuery code for signupO.html

$(document).ready(function(){
			$("#submit").click(function(){
				$("#main-b").remove();
				$("#main-c").css("display","block");
			})
			$("#slide-right").click(function(){
				$("#menu").toggle();
			})
			$("#profile").click(function(){
				$("#profile-a").remove();
				$("#menu").css("right","130px");
				$("#menu").hide();
				$("#profile-b").css("display","block");
			})
			$("#del-acc").click(function(){
				prompt("ReEnter password:");
				$("#menu").hide();
			})
			$("#log-out").click(function(){
				alert("Stay safe");
				window.location.href="index.html";
				$("#menu").hide();
			})
		})

		function getGender(gender){
			if(gender.value=="female"){
				document.getElementById("gender-female").style.display="block";
			}else{
				document.getElementById("gender-female").style.display="none";

			}
		}

		function getTrip(trip){
			if(trip.value=="yes"){
				document.getElementById("foreign-trip").style.display="block";
			}else{
				document.getElementById("foreign-trip").style.display="none";
			}
		}

		function getBirthdate(date){
			console.log(date.value);

		}

			$(document).ready(function(){
			$("#travel-date").change(function(){
				var date = $(this).val();
				var dd = $("<li id='list-item'></li>").text(date);
				$("#del-button").css("display","block");
				$("#dates").prepend(dd);
			});
			$("#dates").append("<a class='btn btn-primary' id='del-button'>Clear list</a>");
			$("#travel-date").change(function(){
				$("#del-button").click(function(e){
					e.preventDefault();
					$(this).prevAll().remove();
					$(this).toggle();
			})
		 })

			})

//Below jQuery code for company.html

$(document).ready(function(){
			var s;
			$("#main-a div h1").click(function(){
				$("div input").val("");
			})
			$("#main-a div img").click(function(){
				if($("#main-a input").val()==""){
					alert("Invalid search");
					s=null;
				}else{
					s=null;
					s = $("#main-a div input").val();
					var search = $("<h1 style='top:35px;left:250px;' id='temp'> </h1>").text(s);
					$("#main-a").css("display","none");
					$("#main-c").css("display","block");
					$("#main-c").append(search);
				}
			})
			$("#profileC").click(function(){
				$("#main-b").css("display","block");
			})
			
			$("#close").click(function(){
				$("#main-b").css("display","none");
			})
			$("#save").click(function(){
				alert("Changes Saved !");
				$("#main-b").css("display","none");
			})
			$("#main-c #close").click(function(){
				$("#main-c").css("display","none");
				$("#main-a").css("display","block");
				$("#temp").remove();
				$("#temp").text("");
			})
		})

//below jQuery code for loginO.html

$(document).ready(function(){
			$("#ok-button").click(function(){
				$("#popup-container").css("display","none");
				$("#main").css("display","flex");
				$("#main-c").css("display","block");
			})
			$("#profile").click(function(){
				$("#profile-a").remove();
				$("#menu").css("right","130px");
				$("#menu").hide();
				$("#profile-b").css("display","block");
			})
})

//below code for forgot-pass.html

$(document).ready(function(){
	$("#rp").click(function(){
		$("ul").css("display","none");
		$("#reset-pass").css("display","block");
	})
})
