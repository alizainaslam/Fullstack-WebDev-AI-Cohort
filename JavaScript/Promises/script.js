// 1. Coffee Shop Order
function barista() {
  return new Promise((res, rej) => {
    res("Barista recived order!");
  });
}
const ingredients = {
  milk: false,
};

function prepareCaffe(ingredients) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (ingredients.milk) {
        res("Preparing caffe ☕");
      } else {
        rej("Sorry, milk finished ❌");
      }
    }, 1000);
  });
}
function serveCaffee() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Serve caffee to customer");
    }, 1000);
  });
}
/* barista()
  .then((data) => {
    console.log(data);
    return prepareCaffe(ingredients);
  })
  .then((data) => {
    console.log(data);
    return serveCaffee();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  })
  .finally(() => console.log("Day ended, shop closed 🛑")); */

// 2. Movie Ticket Booking

const isSeatAvailable = true,
  isPaymentSucceed = true;

function checkSeats(seat) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (seat) {
        res("You got a seat, Please pay your amount here!");
      } else {
        rej("Unfortunately, seat has been fulfilled!");
      }
    }, 500);
  });
}
function payment() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isPaymentSucceed) {
        res("Payment is processed.");
      } else {
        rej("Payment has been failled.");
      }
    }, 500);
  });
}
function ticket() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("You get a ticket");
    }, 500);
  });
}
/* checkSeats(isSeatAvailable)
  .then((msg) => {
    console.log(msg);
    return payment();
  })
  .then((msg) => {
    console.log(msg);
    return ticket();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => console.log("Booking process ended")); */

// 3. Delivery Package
const isOrderConfirm = true;

function orderConfirmation(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      order
        ? res("Order has been confirmed!")
        : rej("Order has not been cofirmed.");
    }, 500);
  });
}
function courier() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Courier picks it up.");
    }, 500);
  });
}
function deliverOrder() {
  let delay = Math.random();
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (delay < 0.5) {
        res("✅ Delivered successfully");
      } else if (delay > 0.5 && delay < 0.7) {
        console.log("⏳ Delayed... waiting for update");

        setTimeout(() => {
          let finaloutcome = Math.random();
          if (finaloutcome < 0.6) {
            res("✅ Deliverd after delay");
          } else {
            rej("❌ Package lost after delay");
          }
        }, 1000);
      } else {
        rej("Lost immediately");
      }
    }, 500);
  });
}

/* orderConfirmation(isOrderConfirm)
  .then((msg) => {
    console.log(msg);
    return courier();
  })
  .then((msg) => {
    console.log(msg);
    return deliverOrder();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => console.log("📦 Delivery process completed")); */
