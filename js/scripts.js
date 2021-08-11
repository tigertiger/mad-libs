$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const time1Input = $("input#time1").val();
    const adverb1Input = $("input#adverb1").val();
    const pluralNoun1Input = $("input#pluralNoun1").val();
    const food1Input = $("input#food1").val();
    const adjective2Input = $("input#adjective2").val();
    const person2Input = $("input#person2").val();
    const exclamationInput = $("input#exclamation").val();

    $(".person1").text(person1Input);
    $(".time1").text(time1Input);
    $(".adverb1").text(adverb1Input);
    $(".pluralNoun1").text(pluralNoun1Input);
    $(".food1").text(food1Input);
    $(".adjective2").text(adjective2Input);
    $(".person2").text(person2Input);
    $(".exclamation").text(exclamationInput);

    $("#again").click(function() {
      location.reload();
    });

    $("#story").show();
    $("#formOne").hide();
    $("#yourLetter").show();
    $("#formOne").hide();
    $("#again").show();

  });
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const yourNameInput = $("input#yourName").val();

  $(".yourName").text(yourNameInput);
  });
});