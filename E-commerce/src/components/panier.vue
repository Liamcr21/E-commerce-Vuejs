<template>
  <div class="container" style="margin-top: 2%;">
    <h1 class="text-center">Panier</h1>
    <section class="bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8 mb-4">


            <!-- Checkout -->
            <div class="card shadow-0 border">
              <div class="p-4">
                <h5 class="card-title mb-3">Coordonnées</h5>
                <div class="row">
                  <div class="col-6 mb-3">
                    <p class="mb-0">Prénom</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Votre prénom..." class="form-control" />
                    </div>
                  </div>

                  <div class="col-6">
                    <p class="mb-0">Nom</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Votre nom..." class="form-control" />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">N° de téléphone</p>
                    <div class="form-outline">
                      <input type="tel" id="typePhone" value="" placeholder="Votre n° de téléphone"
                        class="form-control" />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Email</p>
                    <div class="form-outline">
                      <input type="email" id="typeEmail" placeholder="example@gmail.com" class="form-control" />
                    </div>
                  </div>
                </div>



                <hr class="my-4" />

                <h5 class="card-title mb-3">Information de livraison</h5>

                <div class="row mb-3">
                  <div class="col-lg-4 mb-3">
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                          checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Livraison express <br />
                          <small class="text-muted">3-4 jours via Fedex</small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <!-- Default radio -->
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Poste <br />
                          <small class="text-muted">6-7 jours via la poste </small>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                    <!-- Default radio -->
                    <div class="form-check h-100 border rounded-3">
                      <div class="p-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label class="form-check-label" for="flexRadioDefault3">
                          Livraison à domicile <br />
                          <small class="text-muted">6-7 jours </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-8 mb-3">
                    <p class="mb-0">Addresse</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Votre adresse postal..." class="form-control" />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <p class="mb-0">Ville</p>
                    <select class="form-select">
                      <option value="1">Paris</option>
                      <option value="2">Marseille </option>
                      <option value="3">Lyon</option>
                    </select>
                  </div>



                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Code Postal</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Votre code postal..." class="form-control" />
                    </div>
                  </div>

                  <div class="col-sm-4 col-6 mb-3">
                    <p class="mb-0">Pays</p>
                    <div class="form-outline">
                      <input type="text" id="typeText" placeholder="Votre pays..." class="form-control" />
                    </div>
                  </div>


                </div>


                <div class="float-end">
                  <router-link to="/accueil">
                    <button type="button" class="btn btn-light border">Annuler</button>
                  </router-link>
                  <a href="https://www.paypal.com/fr/webapps/mpp/home" target="_blank"><button
                      class="btn btn-success shadow-0 border">Payment</button></a>
                </div>
              </div>
            </div>
            <!-- Checkout -->
          </div>
          <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div class="ms-lg-4 mt-4 mt-lg-0" style="max-width: 320px;">
              <h6 class="mb-3">Prix</h6>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Prix total:</p>
                <p class="mb-2">$195.90</p>
              </div>
              <hr />
              <h6 class="text-dark my-4">Article(s)</h6>

              <div class="d-flex align-items-center mb-4">
                <div class="me-3 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    1
                  </span>
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                    style="height: 96px; width: 96x;" class="img-sm rounded border" />
                </div>
                <div class="">
                  <a href="#" class="nav-link">
                    Gaming Headset with Mic <br />
                    Darkblue color
                  </a>
                  <div class="price text-muted">Total: $295.99</div>
                </div>
              </div>y
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
</script>