$('.nav a').on('click', () => {
    $('#click').prop('checked', false);
  });

  $("#btn-resume").click(function (e) {
    e.preventDefault();
    $('.nav a[href="#resume"]').tab('show');
  });
  $("#btn-project").click(function (e) {
    e.preventDefault();
    $('.nav a[href="#project"]').tab('show');
  });
  $("#btn-contact").click(function (e) {
    e.preventDefault();
    $('.nav a[href="#contact"]').tab('show');
  });

  // animate-test 
  $(window).scroll(function () {
    $('.animation-test').each(function () {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos - 300 < topOfWindow + imageHeight) {
        $(this).addClass("animate");
      } else {
        $(this).removeClass("animate");
      }
    });
  });
  $(window).scroll(function () {
    $('.animation-skill').each(function () {
      var imagePos = $(this).offset().top;
      var imageHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (imagePos - 300 < topOfWindow + imageHeight) {
        $(this).addClass("animate-skill");
      } else {
        $(this).removeClass("animate-skill");
      }
    });
  });
  // animate-test ref:http://jsfiddle.net/apaul34208/ozww5cvj/18/


  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#image').attr("src", recipient);

  })
