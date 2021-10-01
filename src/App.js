import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div class="container">
      <main>
        <div>
          <img class="d-block mx-auto mb-4" src="assets/brand/obo.png" alt="" />
          <br />
          <h4>Choose Payment Method</h4>
          <span class="my-3 col-lg-8">
            <p>You can pay using credit/debit card or supported mobile money services.</p>
          </span>
        </div>

        <div class="row g-5">

          <div class="col-md-7 col-lg-8">



            <form class="needs-validation" novalidate>
              <div class="row g-3">

                <div class="my-3">
                  <div class="form-check">
                    <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                      <label class="form-check-label" for="mobile">Mobile Money</label>
            </div>
            <div class="row">
                      <div class="card col-md-2 border-0">
                        <img class="card-img-center" src=
                          "assets/brand/momo.png" alt="" />
  
                </div>

                        <div class="card col-md-2 border-0">
                          <img class="card-img-top" src=
                            "assets/brand/airtel.png" />
                   
                </div>

                          <div class="card col-md-2 border-0">
                            <img class="card-img-top" src=
                              "assets/brand/mpesa.png" />
                   
                </div>
                          </div>
                          <br />
                          <div class="form-check">
                            <input id="card" name="paymentMethod" type="radio" class="form-check-input" required />
                              <label class="form-check-label" for="card">Debit/Credit Card</label>
            </div>
                            <div class="row">
                              <div class="card col-md-2 border-0">
                                <img class="card-img-top" src=
                                  "assets/brand/visa.png" />
  
                </div>

                                <div class="card col-md-2 border-0">
                                  <img class="card-img-top" src=
                                    "assets/brand/mastercard.png" />
                   
                </div>

                                  <div class="card col-md-2 border-0">
                                    <img class="card-img-top" src=
                                      "assets/brand/amex.png" />
                   
                </div>
                                    <div class="card col-md-2 border-0">
                                      <img class="card-img-top" src=
                                        "assets/brand/discover.png" />
                   
                </div>
                                      <div class="card col-md-2 border-0">
                                        <img class="card-img-top" src=
                                          "assets/brand/unionpay.png" />
                   
                </div>
                                      </div>
                                      <br />
            <div class="form-check">
              <input id="transfer" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="transfer">Bank Transfer</label>
            </div>
                                      <div class="row">

                                        <div class="card col-md-2 border-0">
                                          <img class="card-img-top" src=
                                            "assets/brand/equity.png" />

                                        </div>

                                      </div>
                                    </div>
                                    <div class="my-3">
                                      <p>Phone number:</p>
                                      <input id="phone" type="tel" name="phone" />
                                    </div>

                                    <button class="w-25 btn btn-primary btn-md" type="submit">PAY</button>
                                    </div>
                                    </form>
                                </div>
                              </div>
                              <footer class="my-5 pt-5 text-muted text-center text-small">
                            <p class="mb-1">&copy; 2021 One Basket Online</p>

                          </footer>
                              </main>
                            </div>
                                            
  );
}

export default App;
