$(".goBack").on("click", function () {
  console.log(history)
  window.history.back();
});

//////////////////////////// Items  Page /////////////////////////
$('li').hide();

$( "div ol").on( "click", function(eve) {
  // eve.preventDefault()
  const thisClass = eve.target.getAttribute('class').split(" ");
  $(`.${thisClass[1]} li`).slideToggle();
});

///////////////////////////// Giver Registration ///////////////////

// Need to put "one" and "two" into an array on each click and thus creating an array of items by category for each person donating. Place the array into local storagee and Then Map that array onto the warehouse page so each item and category are connected correctly. That mapping should only happen when the "donations complete" button is clicked. //

$("#giveBtn").on("click", function(e) {
  e.preventDefault();
  const one = $(".choose").val()
  const two = $("input#itemDonated").val()
  const date = new Date()
  console.log(date, one, two)
  let obj = {
    date: date,
    one: one,
    two: two
  }
  localStorage.setItem('donation', JSON.stringify(obj))
  $(":input").val("");
});

if (localStorage.donation) {
  const obj = JSON.parse(localStorage.getItem('donation'))
  $(".donatedItem").prepend(`<p>${obj.date}</p> <em>${obj.one}</em> <br></br> <em>${obj.two}</em>`)
}



