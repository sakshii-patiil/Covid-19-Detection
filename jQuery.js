//Below jQuery code for signupO.html

$(document).ready(function(){
			$("#submit").click(function(){
				$("#main-b").remove();
				$("#main-c").css("display","block");
			})
			$("#slide-right").click(function(){
				$("#menu").toggle();
				$(this).toggleClass("active");
			})
			$("#profile").click(function(){
				$("#slide-right").removeClass("active");
				$("#profile-a").remove();
				$("#menu").css("right","130px");
				$("#menu").hide();
				$("#profile-b").css("display","block");
			})
			$("#del-acc").click(function(){
				prompt("ReEnter password:");
				$("#slide-right").removeClass("active");
				$("#menu").hide();
			})
			$("#log-out").click(function(){
				$("#slide-right").removeClass("active");
				alert("Stay safe");
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
				$("#menu").css("right","470px");
			})
})

//below code for forgot-pass.html

$(document).ready(function(){
	$("#rp").click(function(){
		$("ul").css("display","none");
		$("#reset-pass").css("display","block");
	})
})
