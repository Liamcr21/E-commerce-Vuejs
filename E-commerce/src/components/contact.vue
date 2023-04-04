<template>
    	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h1 class="display-5 fw-bold">Contact</h1>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-7 d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Formulaire de contact</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Message envoyé merci ! 
				      		</div>
									<form method="POST" id="contactForm" name="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
                                                    <label for="name">Prénom : </label>
													<input type="text" class="form-control" name="name" id="name" placeholder="Prénom">
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
                                                    <label for="email">Email : </label>
													<input type="email" class="form-control" name="email" id="email" placeholder="Email">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
                                                    <label for="subject">Sujet : </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Sujet">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
                                                    <label for="message">Votre message : </label>
													<textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
                                                    <br>
													<input type="submit" value="Envoyer" class="btn btn-jaune">
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap bg-jaune w-100 p-lg-5 p-4">
									<h3 class="mb-4 mt-md-4">Coordonnées</h3>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Addresse:</span> 20 rue de la mar de paris<br>76100 Rouen</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Téléphone:</span> <a href="tel://0666158057">06.66.15.80.57</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:contact@hawayclothes.fr">contact@hawayclothes.fr</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>SiteWeb:</span> <a href="hawayclothes.fr">hawayclothes.fr</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>

.ftco-section {
  padding: 2em 0; }

.ftco-no-pt {
  padding-top: 0; }

.ftco-no-pb {
  padding-bottom: 0; }

.heading-section {
  font-size: 28px;
  color: #000; }

.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }

.form-control {
  height: 52px;
  background: #fff;
  color: #000;
  font-size: 14px;
  border-radius: 2px;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid rgba(0, 0, 0, 0.1); }
  .form-control::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(0, 0, 0, 0.7) !important; }
  .form-control::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(0, 0, 0, 0.7) !important; }
  .form-control:-ms-input-placeholder {
    /* IE 0+ */
    color: rgba(0, 0, 0, 0.7) !important; }
  .form-control:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(0, 0, 0, 0.7) !important; }
  .form-control:focus, .form-control:active {
    border-color: rgba(0, 0, 0, 0.1); }

textarea.form-control {
  height: inherit !important; }

.wrapper {
  width: 100%;
  -webkit-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 21px 41px -13px rgba(0, 0, 0, 0.18); }

.contact-wrap {
  background: #fff; }

.info-wrap h3 {
  color: #000; }

.info-wrap .dbox {
  width: 100%;
  color: #000;
  margin-bottom: 25px; }
  .info-wrap .dbox:last-child {
    margin-bottom: 0; }
  .info-wrap .dbox p {
    margin-bottom: 0; }
    .info-wrap .dbox p span {
      font-weight: 600;
      color: #000; }
    .info-wrap .dbox p a {
      color: #000; }
  .info-wrap .dbox .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1); }
    .info-wrap .dbox .icon span {
      font-size: 20px;
      color: #000; }
  .info-wrap .dbox .text {
    width: calc(100% - 50px); }

@media (min-width: 992px) {
  .info-wrap {
    margin-top: -20px;
    margin-bottom: -20px;
    border-radius: 5px; } }

.btn {
  padding: 12px 16px;
  cursor: pointer;
  border-width: 1px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
  -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
  position: relative;
  margin-bottom: 20px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s; }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      -webkit-transition: none;
      -o-transition: none;
      transition: none; } }
  .btn:hover, .btn:active, .btn:focus {
    outline: none !important;
    -webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important;
    -moz-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important;
    box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.22) !important; }
  .btn.btn-primary {
    background: #FFDE59 !important;
    border-color: #FFDE59 !important;
    color: #fff; }
    .btn.btn-primary:hover, .btn.btn-primary:focus {
      border-color: #FFDE59 !important;
      background: #FFDE59 !important; }

#contactForm .error {
  color: red;
  font-size: 12px; }

#contactForm .form-control {
  font-size: 16px; }

#message {
  resize: vertical; }

#form-message-warning, #form-message-success {
  display: none; }

#form-message-warning {
  color: red; }

#form-message-success {
  color: #28a745;
  font-size: 18px;
  font-weight: bold; }

.submitting {
  float: left;
  width: 100%;
  padding: 10px 0;
  display: none;
  font-size: 16px;
  font-weight: bold; }


.bg-jaune{
    background-color: #FFDE59;
    color: #000;
}

.btn-jaune{
    background-color: #FFDE59;
    color: #000;
}
</style>


<script>
(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				/* submit via ajax */
				
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/sendEmail.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeIn();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);

		               	setTimeout(function(){
				               $('#form-message-success').fadeOut();   
		               	}, 8000);

		               	setTimeout(function(){
				               $submit.css('display', 'none').text(waitText);  
		               	}, 1400);

		               	setTimeout(function(){
		               		$( '#contactForm' ).each(function(){
											    this.reset();
											});
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		} // end submitHandler

			});
		}
	};
	contactForm();

})(jQuery);
</script>